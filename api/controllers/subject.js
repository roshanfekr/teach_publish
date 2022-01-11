const sequelize = require('sequelize');
const db = require("../models")
const {validationResult} = require('express-validator');
const user = require('../models').User;
const file = require('../models').File;
const fs = require('fs')
const path = require('path')

const lessonModel = require('../models').Lesson;
const userLessonModel = require('../models').UserLesson;
const myLessonModel = require('../models').MyLesson;
const timingModel = require('../models').TutorTiming;
const requestController = require('../controllers/requests');

module.exports = {

  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      let userId = req.authUser.id;
      const lessonId = req.body.lessonId
      const grade = req.body.grade
      const year = req.body.year
      const price = req.body.price
      const findIt = await userLessonModel.findOne({where: {userId: userId, lessonId: lessonId}})
      if (findIt != null)
        return res.status(422).send({
          errors: {
            lessonId: {
              "msg": "duplicate_lesson_for_user",
              value: req.body.lessonId
            }
          }
        });
      let retUserLesson = await userLessonModel
        .create({
          userId: userId, lessonId: lessonId, description: req.body.description , acceptStatus: 0 , price: price
        });

      res.status(200).send(retUserLesson);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async edit(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      let userId = req.authUser.id;
      const lessonId = req.body.lessonId
      let id = req.body.id
      let description = req.body.des
      const findIt = await userLessonModel.findOne({where: {id: id , userId: userId, lessonId: lessonId}})
      if (findIt == null)
        return res.status(422).send({
          errors: {
            lessonId: {
              "msg": "not_found",
              value: ""
            }
          }
        });

      if(findIt.description !== description && findIt.lessonId !== lessonId)
        findIt.acceptStatus = 0
      findIt.lessonId = lessonId
      findIt.userId = userId
      findIt.description = description

      findIt.save();

      res.status(200).send(findIt);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async save(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let lessonId = req.body.lessonId;
      let userId = req.authUser.id
      let description = req.body.description;
      let grade = req.body.grade;
      let year = req.body.year;
      let price = req.body.price;

      if(grade !== null)
        if(grade.length > 4)
          grade = null

      const userLessonCollection = await userLessonModel.findAll({
        where: {userId: userId ,lessonId: lessonId },
        attributes:['id']
      })

      if(userLessonCollection.length > 0)
      {
        return res.status(421).send('duplicate');
      }

      let row = await userLessonModel.create({lessonId: lessonId , userId:userId , grade: grade , price: price , year: year, description: description , acceptStatus: 0 })

      row = await userLessonModel.findOne({
        where: {id: row.id},
        include: [{ model: lessonModel, attributes: ['subject' , 'code', 'isEnable']}],
        attributes:['id','lessonId','description','year' , 'grade' , 'price','acceptStatus','createdAt','updatedAt']
      })

      let lesson= {id: row.id , lessonId: row.lessonId , description: row.description
        , grade: row.grade , year: row.year
        , subject: row.Lesson.subject , isEnable: row.Lesson.isEnable
        , createdAt:  row.createdAt !== null ? row.createdAt.toLocaleString() : ""
        , updatedAt:  row.updatedAt !== null ? row.updatedAt.toLocaleString() : ""
        , acceptStatus: row.acceptStatus , price: row.price }

      res.status(200).send(lesson);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async saveEdit(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let id = req.body.id;
      let userId = req.authUser.id
      let description = req.body.description;
      let grade = req.body.grade;
      let year = req.body.year;
      let price = req.body.price;

      if(grade !== null)
        if(grade.length > 4)
          grade = null

      let userLesson = await userLessonModel.findOne({
        where: {userId: userId ,id: id }
      })

      if(userLesson === null)
      {
        return res.status(421).send('notexist');
      }

      let acceptStatus = userLesson.acceptStatus
      if(userLesson.grade !== grade || userLesson.year !== year )
        acceptStatus = 0

      await userLesson.update({ grade: grade , price: price , year: year, description: description , acceptStatus: acceptStatus });

      let row = await userLessonModel.findOne({
        where: {id: userLesson.id},
        include: [{ model: lessonModel, attributes: ['subject' , 'code', 'isEnable']}],
        attributes:['id','lessonId','description','year' , 'grade' , 'price','acceptStatus','createdAt','updatedAt']
      })

      let lesson= {id: row.id , lessonId: row.lessonId , description: row.description
        , grade: row.grade , year: row.year
        , subject: row.Lesson.subject , isEnable: row.Lesson.isEnable
        , createdAt:  row.createdAt !== null ? row.createdAt.toLocaleString() : ""
        , updatedAt:  row.updatedAt !== null ? row.updatedAt.toLocaleString() : ""
        , acceptStatus: acceptStatus , price: row.price }

      res.status(200).send(lesson);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async saveSubject(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let newItem =JSON.parse(req.body.items);
      newItem.forEach(item => {
        if(!item.userId)
          item.userId = req.authUser.id
      })

      const userId = req.authUser.id;

      const findedUser = await user.findOne(
        {
          where: {id: userId},
        }
      )

      if(req.file!==null && req.file !==undefined) {
        var tempPath = req.file.path
        if (tempPath.length > 0) {
          let dir = 'api/sec-storage/tutor/' + req.authUser.id
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
          var newPath = dir + "/" + "transcript_" + req.file.filename

          fs.rename(tempPath, newPath, function (err) {
            if (err) throw err
          })

          //remove old file record
          if (findedUser.transcript_fileId > 0) {
            let fileObj = await file.findOne({where: {id: findedUser.transcript_fileId}})
            if (fileObj !== null)
              fileObj.destroy()
          }

          //create new file record
          let avatarFile = await file
            .create({
              path: newPath.substr(4),
              ext: path.extname(req.file.filename),
              userId: userId
            })

          findedUser.update({
            transcript_fileId: avatarFile.id,
          });
        }
      }

      newItem = await userLessonModel.bulkCreate(newItem, {updateOnDuplicate: ["lessonId", "description" , "grade" , "year"],returning: true ,individualHooks: true })

      const userLessons = await userLessonModel.findAll({
        where : {userId : req.authUser.id}
      })
      let deletedid = []
      userLessons.forEach(item =>{
        let z =newItem.findIndex(function (obj) {
          return obj.id === item.id
        })
        if (z < 0) {
          deletedid.push(item.id)
        }
      })
      userLessonModel.destroy({ where: { id: deletedid }})

      const userLessonCollection = await userLessonModel.findAll({
        where: {userId: req.authUser.id},
        attributes:['id','lessonId' , 'grade' , 'year' ,'description']
      })
      res.status(200).send(userLessonCollection);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async subjectList(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      let values = []
      const allSubjet = await lessonModel.findAll({where: {isEnable: true}})

      allSubjet.forEach((item) => {
        values.push({value: item.id, text: item.subject});

      })

      if (allSubjet.length === 0)
        return res.status(422).send({
          errors: {
            subject: {
              "msg": "list_is_empty",
              value: null
            }
          }
        });

      res.status(200).send(values);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async getMaxPrice(req , res) {
    try {
      const result = await userLessonModel.findOne(
        {
          attributes: [[sequelize.fn('MAX', sequelize.col('price')) , 'max'] ,  [sequelize.fn('MIN', sequelize.col('price')), 'min']]
        })
      res.status(200).send({result:result});
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  async items(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      const userLessonCollection = await userLessonModel.findAll({
        where: {userId: req.authUser.id},
        include: [{ model: lessonModel, attributes: ['subject' , 'code', 'isEnable']},
          {model: user , attributes: ['transcript_fileId' ] }],
        attributes:['id','lessonId','description' , 'grade' , 'year' , 'price' ,'acceptStatus','createdAt','updatedAt']
      })

      let lessons = []
      let transcript_fileId = null;
      let transcript_filePath = null
      for (let index in userLessonCollection)
      {
        let row = userLessonCollection[index]
        lessons.push({id: row.id , lessonId: row.lessonId , description: row.description , grade: row.grade ,  year: row.year
          , subject: row.Lesson.subject , isEnable: row.Lesson.isEnable
          , createdAt:  row.createdAt !== null ? row.createdAt.toLocaleString() : ""
          , updatedAt:  row.updatedAt !== null ? row.updatedAt.toLocaleString() : ""
          , acceptStatus: row.acceptStatus , price: row.price  })

        transcript_fileId = row.User.transcript_fileId
      }
      if(transcript_fileId > 0)
      {
        const fileItem = await file.findOne({where: {id: transcript_fileId}} )
        if(fileItem !== null)
          transcript_filePath = fileItem.path
      }
      let result = {data:lessons , transcript: {fileId: transcript_fileId , path:transcript_filePath } }


      res.status(200).send(result);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async getUserLessonsByUserId(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      let userId = req.body.userId
      const userLessonCollection = await userLessonModel.findAll({
        where: {userId: userId},
        include: [{ model: lessonModel, attributes: ['subject' , 'code', 'isEnable']}],
        attributes:['id','lessonId','description','acceptStatus','createdAt','updatedAt']
      })
      let lessons = []
      for (let index in userLessonCollection)
      {
        let row = userLessonCollection[index]
        lessons.push({id: row.id , lessonId: row.lessonId , description: row.description
          , subject: row.Lesson.subject , isEnable: row.Lesson.isEnable
          , createdAt:  row.createdAt !== null ? row.createdAt.toLocaleString() : ""
          , updatedAt:  row.updatedAt !== null ? row.updatedAt.toLocaleString() : ""
          , acceptStatus: row.acceptStatus})
      }
      res.status(200).send(lessons);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async delete(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let userId = req.authUser.id;
      let id = req.body.id
      const userLessonItem = await userLessonModel.findOne({where: {id: id, userId: userId}})
      if (userLessonItem != null) {
        await userLessonItem.destroy();
        res.status(200).send({result: true});
      } else {
        res.status(422).send({
          errors: {
            lesson: {
              "msg": "lession_not_found",
              value: null
            }
          }
        });
      }

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },


}
