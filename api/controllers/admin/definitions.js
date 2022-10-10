const sequelize = require("sequelize");
const {validationResult} = require('express-validator');
const lessonModel = require('../../models').Lesson;
const universityModel = require('../../models').University;
const jwt = require('../../_helpers/jwt')
const bcrypt = require('bcryptjs');
const db = require("../../models");
const fs = require("fs");
const {Transcripts: transcriptModel_, fileModel, universityAdminModel} = require("../../models");
const path = require("path");
const {includes} = require("core-js/internals/array-includes");

module.exports = {
  async getAllLessons(req, res) {
    try {
      var filters = {}
      var filters_uni = {}
      if (req.body.uniId !== undefined && req.body.uniId !== null && req.body.uniId > 0)
        filters.universityId = req.body.uniId

      if (req.body.host !== undefined && req.body.host !== null)
        filters_uni.host= req.body.host

      filters.isEnable = 1

      const lessonCollection = await lessonModel.findAll({
        where:  filters ,
        include : { model: universityModel , where:filters_uni }
        }
        )
      res.status(200).send(lessonCollection);
    } catch (e) {
      res.status(400).send(e);
    }
  },
  async lessonList(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      var filters = []
      let subject = "";
      if (req.body.subject !== undefined && req.body.subject !== null)
        subject = req.body.subject

      if (req.body.subject !== "")
        filters.push({
          where: sequelize.where(sequelize.fn('upper', sequelize.col('subject')), {
            [sequelize.Op.like]: subject.trim().toUpperCase() + '%'
          })
        })

      //[req.body.subject + '%']}
      if (req.body.active !== 2)
        filters.push({isEnable: req.body.active})

      if (req.body.uniId !== undefined && req.body.uniId !== null)
        filters.push({universityId: req.body.uniId})

      var page_index = 1
      var perPage = 10
      if (req.body.perPage !== undefined && req.body.perPage > 1)
        perPage = req.body.perPage
      if (req.body.pageIndex !== undefined && req.body.pageIndex > 1)
        page_index = req.body.pageIndex

      var count = await lessonModel.count({where: {[sequelize.Op.and]: filters}})


      var lessonCollection = await lessonModel.findAll(
        {
          offset: perPage * (page_index - 1),
          limit: perPage,
          where: {[sequelize.Op.and]: filters},
          include: { model: universityModel }
        })

      if (lessonCollection === null)
        return res.status(422).send("error_lesson_empty")

      data = []

      lessonCollection.forEach(item => {
        data.push({
          id: item.id,
          subject: item.subject,
          code: item.code,
          state: item.isEnable === false ? "Disable" : "Enable",
          stateValue: item.isEnable,
          University:  item.University !== null ? item.University.name : "",
          UniversityId:  item.University !== null ? item.University.id : ""
        })
      })
      rows = {data: data, count: count}
      res.status(200).send(rows);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },
  async createLesson(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      if (req.body.subject === "")
        return res.status(422).send("subject_is_empty");

      let lesson = await lessonModel.create(
        {
          subject: req.body.subject,
          isEnable: req.body.active,
          universityId : req.body.uniId

        }
      )
      if (lesson === null)
        return res.status(422).send("lesson_create_error");

      res.status(200).send(lesson);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  removeChar(st) {
    st = st.replace('\r' , '')
    st = st.replace('\n' , '')
    return st
  },
  async createLessonBulk(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      if (req.body.subject === "")
        return res.status(422).send("subject_is_empty");
      let lessonList = [];
      let complete = false

      let csvFilePath = null

      if (req.file === null || req.file === undefined)
        return res.status(400).send({ret : null});


        var tempPath = req.file.path

        if (tempPath.length > 0) {

          dir = 'api/sec-storage/admin'
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
          csvFilePath = dir + "/" + "lessons_" + req.file.filename
          fs.rename(tempPath, csvFilePath, function (err) {
            if (err) throw err
          })

        }




      try {
        const data = fs.readFileSync(csvFilePath, 'utf8')
        var rows = data.split("\n");
        for (let i = 0; i < rows.length; i++) {
          let item = rows[i]
          if(item !== null && item !== undefined ) {
            let names = item.split('\t');
            if (names.length >= 2)
            {
              lessonList.push({code: module.exports.removeChar(names[0]), subject: module.exports.removeChar(names[1]),  isenable: true})
            }
            else if (names.length === 1)
            {
              lessonList.push({code: module.exports.removeChar(names[0]), subject: null,  isenable: true})
            }
          }
        }

        const transaction = await db.sequelize.transaction();
        try{
          for (let i = 0; i < lessonList.length; i++) {
            let item = lessonList[i]
            let subject = item.subject
            let code = item.code

            if((subject === null || subject === undefined) && (code!=null))
              subject = code
            if(subject === "")
              continue
            if (subject !== null && subject !== undefined) {
              await lessonModel.create(
                {
                  subject: subject,
                  code: code,
                  isEnable: req.body.active,
                  universityId: req.body.uniId
                }, {transaction: transaction}
              )
            }

          }
          complete = true
          transaction.commit()
        }catch (e) {
          complete = false
          return res.status(200).send({error: true , ret : e});
        }
      } catch (err) {
        console.error(err)
      }

      if (complete === false)
        return res.status(422).send("lesson_create_error");

      return res.status(200).send({ret : true});

    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  },

  async editLesson(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      if (req.body.subject === "")
        return res.status(422).send("subject_is_empty");

      let lesson = await lessonModel.findOne({where: {id: req.body.id}})
      if (lesson === null)
        return res.status(422).send("lesson_notfound_error");

      lesson.subject = req.body.subject;
      lesson.isEnable = req.body.active
      lesson.universityId = req.body.uniId
      lesson.save()

      res.status(200).send(lesson);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  async deleteLesson(req, res) {
    try {
      let lessonId = req.body.lessonId;

      if(lessonId === undefined || lessonId === 0)
        return res.status(400).send({ret: null});

      const lesson = await lessonModel.findOne({where: { id: lessonId}})
      if(lesson=== null) {
        return res.status(400).send({ret: null});
      }
      lesson.destroy()
      return res.status(200).send({ret: null});
    } catch (e) {
      console.log(e);
      return res.status(401).send(0);
    }



  },

  async universityList(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      let where = {}
      let all = req.body.all;
      if(all === undefined)
        where.isenable = true;

      var unCollection = await universityModel.findAll({where:where})
      data = []
      unCollection.forEach(item => {
        data.push({
          id: item.id, name: item.name, emailPattern: item.emailPattern,
          email: item.email, status: item.isenable ? "Enable" : "Disable",
          isenable: item.isenable , host: item.host
        })
      })

      return res.status(200).send(data);


    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },


}
