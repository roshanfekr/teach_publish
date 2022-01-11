const sequelize = require('sequelize');
const db = require("../models")
const {validationResult} = require('express-validator');
const user = require('../models').User;
const lessonModel = require('../models').Lesson;
const userLessonModel = require('../models').UserLesson;
const userModel = require('../models').User;
const myLessonModel = require('../models').MyLesson;
const rateModel = require('../models').Rate;
const overallModel = require('../models').RateOverall;
const requestController = require('../controllers/requests');
const jwt = require('../_helpers/jwt')
const bcrypt = require('bcryptjs');
const seq = require('../models/index');
const {where} = require("sequelize");
const fileModel = require("../models").File

module.exports = {

  async create(req, res)
  {
    try{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const ACCEPTED = 1
      const userId = req.authUser.id;
      const comment = req.body.comment
      const lessonId = req.body.lessonId
      const rate = req.body.rate
      const tutorId = req.body.tutorId
      let mylesson = await myLessonModel.findOne({where: {tutorUserId: tutorId ,userId:  userId , lessonId: lessonId ,acceptStatus : ACCEPTED}})
      if(mylesson == null)
      {
        return res.status(422).send({errors: {
            lessonId: {
            "msg": "review_nolesson",
              value: lessonId
          }}});
      }
      if(rate <= 0 || rate > 5){
        return res.status(422).send({errors: {
            lessonId: {
              "msg": "review_rateNotValid",
              value: rate
            }}});
      }

      if(comment.length > 500){
        return res.status(422).send({errors: {
            lessonId: {
              "msg": "review_commentLong",
              value: ""
            }}});
      }

      const rateRow = await rateModel.findOne({where:{tutor_userId: tutorId , stu_userId: userId ,lessonId: lessonId }})
      if(rateRow != null){
        return res.status(422).send("review_exist");
      }
      const rateNew = await rateModel.create({tutor_userId: tutorId ,rate: rate , stu_userId: userId
      , comment: comment ,acceptStatus: 0 , lessonId: lessonId , delete: false})

      let row = await rateModel.findOne({ where:{id:rateNew.id },
        include:[
          {model: userModel , as: 'student'  , attributes:['id' , 'name' ,'lastname'] , include:[{model: fileModel , attributes:['path']}]},
          {model: lessonModel  , as: 'Lesson',  attributes:['id' , 'subject' ]},
        ]

      })

      return res.status(200).send(row);

    }catch (e) {
      return res.status(422).send({errors: {
          err: {
            "msg": "exist",
            value: ""
          }}});
    }
  }
  ,
  async edit(req, res)
  {
    try{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const ACCEPTED = 1
      const userId = req.authUser.id;
      const comment = req.body.comment
      const lessonId = req.body.lessonId
      const rate = req.body.rate
      const id = req.body.id
      const tutorId = req.body.tutorId
      let mylesson = await myLessonModel.findOne({where: {tutorUserId: tutorId ,userId:  userId , lessonId: lessonId ,acceptStatus : ACCEPTED}})
      if(mylesson == null)
      {
        return res.status(422).send({errors: {
            lessonId: {
              "msg": "review_nolesson",
              value: lessonId
            }}});
      }
      if(rate <= 0 || rate > 5){
        return res.status(422).send({errors: {
            lessonId: {
              "msg": "review_rateNotValid",
              value: rate
            }}});
      }

      if(comment.length > 500){
        return res.status(422).send({errors: {
            lessonId: {
              "msg": "review_commentLong",
              value: ""
            }}});
      }

      const rateRow = await rateModel.findOne({
        where:{tutor_userId: tutorId , stu_userId: userId ,id: id  } ,
        include:[ {model: lessonModel ,attributes: ['subject' , 'id'] }]
      })

      if(rateRow == null){
        return res.status(422).send("review_notexist");
      }else
      {
        if(rateRow.lessonId !== lessonId)
          return res.status(422).send("review_exist");

      }
      let acceptStatus = rateRow.acceptStatus;
      if(rate !== rateRow.rate || comment!== rateRow.comment || lessonId !==  rateRow.lessonId)
        acceptStatus = 0

      const rateNew = await rateRow.update({rate: rate, comment: comment ,acceptStatus: acceptStatus , lessonId: lessonId })

      return res.status(200).send(rateNew);

    }catch (e) {
      return res.status(422).send({errors: {
          err: {
            "msg": "exist",
            value: ""
          }}});
    }
  }
  ,
  async delete(req, res) {

    try{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      const userId = req.authUser.id;
      const lessonId = req.body.lessonId
      const tutorId = req.body.tutorId
      const id = req.body.id;
      if(!Number.isInteger(lessonId) || !Number.isInteger(tutorId))
      {
        throw new Error("not valid")
        return
      }
      let ret = await rateModel.destroy({where: {id: id , lessonId: lessonId , stu_userId: userId , tutor_userId: tutorId }})
      return res.status(200).send({ret: ret , id: id});
    }catch (e) {
      return res.status(445).send("error");
    }

  }
  ,
  async getReviews(req, res) {

    try{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      var page_index = 1
      var perPage = 10
      if (req.body.perPage !== undefined && req.body.perPage > 1)
        perPage = req.body.perPage
      if (req.body.pageIndex !== undefined && req.body.pageIndex > 1)
        page_index = req.body.pageIndex

      const userId = req.authUser.id;
      const lessonId = 0
      const tutorId =parseInt(req.body.tutorId)
      if(!Number.isInteger(lessonId) || !Number.isInteger(tutorId))
      {
        throw new Error("not valid")
        return
      }

      let filter = {[sequelize.Op.and]:[{[sequelize.Op.or]:[{stu_userId: userId }, {acceptStatus: 1}]}
          ,{tutor_userId: tutorId }]}

      if( lessonId > 0)
        filter["lessonId"] = lessonId

      let { count, rows } = await rateModel.findAndCountAll({
        where: filter ,
        offset: perPage * (page_index - 1),
        limit: perPage,
        include:[
          {model: userModel  , as: 'tutor',  attributes:['id' , 'name' ,'lastname']},
          {model: userModel , as: 'student'  , attributes:['id' , 'name' ,'lastname'] , include:[{model: fileModel , attributes:['path']}]},
          {model: lessonModel  , as: 'Lesson',  attributes:['id' , 'subject' ]},
        ]
      })

      return res.status(200).send({row_count: count , rows: rows});

    }catch (e) {
      return res.status(401).send("error");

    }

  }
  ,
  async changeAcceptStatus(req, res) {

    try{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      const id =parseInt(req.body.id)
      const acceptStatus =parseInt(req.body.acceptStatus)

      if(!Number.isInteger(id) || !Number.isInteger(id))
      {
        throw new Error("not valid")
        return
      }
      let row = await rateModel.findOne({ where: {id: id}} )
      row.update({acceptStatus: acceptStatus})
      return res.status(200).send(true);

    }catch (e) {
      return res.status(401).send("error");

    }
  }
  ,
  async getReviewSearch(req, res) {

    try{
      var page_index = 1
      var perPage = 10
      if (req.body.perPage !== undefined && req.body.perPage > 1)
        perPage = req.body.perPage
      if (req.body.pageIndex !== undefined && req.body.pageIndex > 1)
        page_index = req.body.pageIndex

      const userId = req.authUser.id;
      const tutorId = parseInt(req.body.tutorId)
      const tutorName = req.body.tutorName
      const tutorLname = req.body.tutorLname
      const lessonId = parseInt(req.body.lessonId)
      const acceptStatus = parseInt(req.body.acceptStatus)


      if(!Number.isInteger(lessonId) || !Number.isInteger(tutorId))
      {
        throw new Error("not valid")
        return
      }

      let filter = {}
      let nameFilter = {}

      if(tutorId > 0 )
        filter["tutor_userId"] = tutorId
      if(acceptStatus !== -1)
        filter["acceptStatus"] = acceptStatus
      if( lessonId > 0)
        filter["lessonId"] = lessonId

      if(tutorName!== undefined && tutorName!== null)
        if(tutorName.trim().length > 0)
        {
          nameFilter["name"] = {[sequelize.Op.like]: '%' + tutorName + '%'}
        }
      if(tutorLname!== undefined && tutorLname!== null)
        if(tutorLname.trim().length > 0)
        {
          nameFilter["lastName"] = {[sequelize.Op.like]: '%' + tutorLname + '%'}
        }

      let { count, rows } = await rateModel.findAndCountAll({
        where: filter ,
        offset: perPage * (page_index - 1),
        limit: perPage,
        include:[
          {model: userModel  , as: 'tutor',  attributes:['id' , 'name' ,'lastname'] , where:nameFilter},
          {model: userModel , as: 'student'  , attributes:['id' , 'name' ,'lastname'] , include:[{model: fileModel , attributes:['path']}]},
          {model: lessonModel  , as: 'Lesson',  attributes:['id' , 'subject' ]},
        ]
      })


      return res.status(200).send({row_count: count , rows: rows});

    }catch (e) {
      return res.status(401).send("error");

    }

  }
  ,

}
