const sequelize = require("sequelize");
const {validationResult} = require('express-validator');
const lessonModel = require('../../models').Lesson;
const universityModel = require('../../models').University;
const jwt = require('../../_helpers/jwt')
const bcrypt = require('bcryptjs');
const db = require("../../models");

module.exports = {
  async getAllLessons(req, res) {
    try {
      var filters = []
      var filters_uni = []
      if (req.body.uniId !== undefined && req.body.uniId !== null && req.body.uniId > 0)
        filters.push({universityId: req.body.uniId})

      if (req.body.host !== undefined && req.body.host !== null)
        filters_uni.push({host: req.body.host})

      filters.push({isEnable: 1})

      const lessonCollection = await lessonModel.findAll({where: {[sequelize.Op.and]: filters}
        , include:{model: universityModel , where:filters_uni}})
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

  async createLessonBulk(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      if (req.body.subject === "")
        return res.status(422).send("subject_is_empty");
      let lessonList = req.body.cvs;
      let retLessons = []
      let complete = false

      const transaction = await db.sequelize.transaction();
      try{
        for (let i = 0; i < lessonList.length; i++) {
          let item = lessonList[i]
          let name = item.name
          let code = item.code
          if (name !== null && name !== undefined) {
            let lesson = await lessonModel.create(
              {
                subject: name,
                code: code !== null && code !== undefined ? null : code,
                isEnable: req.body.active,
                universityId: req.body.uniId
              }, {transaction: transaction}

            )
            retLessons.push(lesson)
            complete = true
          }

        }
        transaction.commit()
      }catch (e) {
        complete = false
        return res.status(200).send({error: true , ret : e});
      }


      if (complete === false)
        return res.status(422).send("lesson_create_error");

      res.status(200).send({ret : retLessons});

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
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

  async universityList(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      var unCollection = await universityModel.findAll()
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

  async createUniversity(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let university = await universityModel.create(
        {
          name: req.body.name,
          emailPattern: req.body.emailPattern,
          email: req.body.email,
          isenable: true
        }
      )
      if (university === null)
        return res.status(422).send("university_create_error");

      res.status(200).send(university);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  async editUniversity(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      let uni = await universityModel.findOne({where: {id: req.body.id}})
      if (uni === null)
        return res.status(422).send("university_create_error");

      uni.name = req.body.name
      uni.emailPattern = req.body.emailPattern
      uni.email = req.body.email
      uni.isenable = req.body.isenable
      uni.save();
      res.status(200).send(true);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  async changeStatus(req, res) {

  }

}
