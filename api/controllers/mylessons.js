import {QueryTypes} from "sequelize";
import uniqueString from 'unique-string'



const sequelize = require('sequelize');
const db = require("../models")
const {validationResult} = require('express-validator');
const userModel = require('../models').User;
const userLessonModel = require('../models').UserLesson;
const myLessonModel = require('../models').MyLesson;
const timingModel = require('../models').TutorTiming
const jwt = require('../_helpers/jwt')
const bcrypt = require('bcryptjs');
const requestModel = require('../models').Request;
const lessonModel = require('../models').Lesson;
const fileModel = require('../models').File;
const requestController = require('../controllers/requests');
const notificationController = require('../controllers/notification');

module.exports = {

  async getTutorlessons(req, res)
  {
    try {

      let tutorId = req.authUser.id;
      let ret  = await db.sequelize.query('Select distinct l.* from Lessons as l join MyLessons as ml on ' +
        'ml.lessonId = l.id where ml.tutorUserId = :tutorUserId'
        , {replacements: {tutorUserId: tutorId }, type: QueryTypes.SELECT}
      ).then(function (lessons) {
        if(lessons.length > 0)
        {
          return lessons;
        }
      })
      return res.status(200).send(ret);
    }catch (e) {
      return res.status(400).send("err");
    }

  },

  async getStudentlessons(req, res)
  {
    try {

      let userId = req.authUser.id;
      let ret  = await db.sequelize.query('Select distinct l.* from Lessons as l join MyLessons as ml on ' +
        'ml.lessonId = l.id where ml.userId = :userId'
        , {replacements: {userId: userId }, type: QueryTypes.SELECT}
      ).then(function (lessons) {
        if(lessons.length > 0)
        {
          return lessons;
        }
      })
      return res.status(200).send(ret);
    }catch (e) {
      return res.status(400).send("err");
    }

  },

  async getStudentMylessons(req, res)
  {
    try {
      var page_index = 1
      var perPage = 10
      if (req.body.perPage !== undefined && req.body.perPage > 1)
        perPage = req.body.perPage
      if (req.body.pageIndex !== undefined && req.body.pageIndex > 1)
        page_index = req.body.pageIndex

      let studentId = req.authUser.id;
      let finished = req.body.finished
      let acceptStatus = req.body.acceptStatus
      let lessonId = req.body.lessonId

      if (studentId === null || studentId === undefined || studentId < 1)
      {
        return res.status(400).send("notfound");
      }
      let whereFilter = {}
      if(finished !== null && finished !== undefined)
        whereFilter["finished"] = finished

      if(lessonId !== null && lessonId !== undefined)
        whereFilter["lessonId"] = lessonId

      if(acceptStatus !== null && acceptStatus !== undefined && acceptStatus !== -1)
        whereFilter["acceptStatus"] = acceptStatus

      whereFilter["userId"] = studentId

      const {count , rows} = await myLessonModel.findAndCountAll({
        where: whereFilter,
        offset: perPage * (page_index - 1),
        limit: perPage,
        include: [
          {
            model: lessonModel,
            required: true
          } ,
          {
            model: userModel ,
            as:'tutor' ,
            required: true ,
            include:{ model: fileModel , attribute:['path']}
          } ,
        ],
        order: [['updatedAt', 'DESC']],

      })

      return res.status(200).send({count: count , rows: rows});

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async getTutorMylessons(req, res)
  {
    try {

      var page_index = 1
      var perPage = 10
      let lessonId = req.body.lessonId

      if (req.body.perPage !== undefined && req.body.perPage > 1)
        perPage = req.body.perPage
      if (req.body.pageIndex !== undefined && req.body.pageIndex > 1)
        page_index = req.body.pageIndex

      let tutorId = req.authUser.id;
      let finished = req.body.finished
      let acceptStatus = req.body.acceptStatus


      if (tutorId === null || tutorId === undefined || tutorId < 1)
      {
        return res.status(400).send("notfound");
      }
      let whereFilter = {}
      if(lessonId !== null && lessonId !== undefined)
        whereFilter["lessonId"] = lessonId
      if(finished !== null && finished !== undefined)
        whereFilter["finished"] = finished

      if(acceptStatus !== null && acceptStatus !== undefined && acceptStatus !== -1)
        whereFilter["acceptStatus"] = acceptStatus

      whereFilter["tutorUserId"] = tutorId

      const {count , rows} = await myLessonModel.findAndCountAll({
          where: whereFilter,
          offset: perPage * (page_index - 1),
          limit: perPage,
          include: [
            {
              model: lessonModel,
              required: true
            } ,
            {
              model: userModel ,
              as:'student' ,
              required: true ,
              include:{ model: fileModel , attribute:['path']}
            } ,
          ],
          order: [['updatedAt', 'DESC']],
      })

      return res.status(200).send({count: count , rows: rows});

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },


  async saveMyLesson(req, res) {
    try {
      let userId = req.authUser.id;
      let timeStart = req.body.timeStart
      let timeEnd = req.body.timeEnd
      let dayOfWeek = req.body.dayOfWeek
      let tutorUserId = req.body.tutorUserId
      let userLessonId = req.body.userLessonId
      let lessonId = req.body.lessonId
      let timingId = req.body.timingId
      let message = req.body.description
      // ba userLessonId motmaen mishavad ke in dasr tavasot in tutor  erae shode ast

      if(message!==null && message!==undefined)
        if( message.length > 500)
        {
          let result= {error: true , type: "message long"}
          res.status(411).send(result);
        }


      let uLesson = await userLessonModel.findOne({where: {id: userLessonId , userId: tutorUserId , lessonId:lessonId}})
      if (uLesson === null) {
        let result= {error: true , type: "user lesson not found"}
        res.status(410).send(result);
        return
      }

      // ba timingId motmaen mishavad ke timing dorost entekhab shode ast
      let timing = await timingModel.findOne({where: {id: timingId, timeStart: timeStart , dayOfWeek: dayOfWeek , timeEnd:timeEnd }})
      if (timing === null) {
        let result= {error: true , type: "timing not found"}
        res.status(410).send( result);
        return
      }



      let myLessonItem = await myLessonModel.findOne({where: {
          userId: userId
          , lessonId: uLesson.lessonId
          , tutorUserId: tutorUserId
          , timeStart: timeStart
          , dayOfWeek:dayOfWeek
          , acceptStatus: 0 }})

      if (myLessonItem != null) {
        let result= { error: true , type: "exist" }
        return res.status(410).send(result);

      }
      else
      {
        const transaction = await db.sequelize.transaction();


        myLessonItem = await  myLessonModel.create({
          userId: userId
          , timingId: timingId
          , dayOfWeek: dayOfWeek
          , timeEnd: timeEnd
          , timeStart:timeStart
          , finished: 0
          , acceptStatus: 0
          , lessonId: lessonId
          , tutorUserId: tutorUserId
          , message: message } , {transaction: transaction})


        if(myLessonItem.id > 0) {
          let lesson = await lessonModel.findOne({where: {id: lessonId }})
          let result = {error: false , type: "", data: {ID:myLessonItem.id
              , userId:myLessonItem.userId
              , timingId: myLessonItem.timingId
              , dayOfWeek: myLessonItem.dayOfWeek
              , timeEnd: myLessonItem.timeEnd
              , timeStart: myLessonItem.timeStart
              , finished: myLessonItem.finished
              , acceptStatus: myLessonItem.acceptStatus
              , lessonId: myLessonItem.lessonId
              , tutorUserId: myLessonItem.tutorUserId
              , Lesson: lesson
              , message: myLessonItem.message }
          }

          const requestResult = await requestController.sendRequestToUser(message , userId , tutorUserId , 1 , myLessonItem.id , transaction )

          if(requestResult.error === false)
            await transaction.commit();
          else {
            await transaction.rollback();
            throw new Error('rollback')
          }

          return res.status(200).send(result);
        }


      }

    } catch (e) {

      let result = {error: true , type: "err" , data: e}

      res.status(411).send(result);
    }

  },

  async saveMyLessonReplay(req , res)
  {
    try {
      let tutorId = req.authUser.id;
      let myLessonId = req.body.myLessonId
      let replay = req.body.replay

      let myLessonItem = await myLessonModel.findOne({where: {id: myLessonId , tutorUserId: tutorId }})

      if (myLessonItem === null)
        return res.status(411).send("error");

      myLessonItem.replay = replay
      myLessonItem.save()

      res.status(200).send({result: true });

    }
     catch (e) {

      let result = {error: true , type: "err" , data: e}

      res.status(411).send(result);
    }
  },

  async acceptMyLessonByTutor(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let tutorId = req.authUser.id;
      let myLessonId = req.body.myLessonId
      let acceptStatus = req.body.acceptStatus
      let msg = req.body.msg

      let myLessonItem = await myLessonModel.findOne({where: {id: myLessonId , tutorUserId: tutorId }})

      if (myLessonItem === null)
        return res.status(411).send("error");
      if(acceptStatus < -1 || acceptStatus > 2 || acceptStatus === null || acceptStatus=== undefined )
        return res.status(411).send("error");


      myLessonItem.acceptStatus = acceptStatus
      if(msg !==undefined && msg !== null)
        myLessonItem.message = msg
      myLessonItem.save()

      try{
        let STATUS = 2
        if(acceptStatus === 1)
          STATUS = 2 // verify
        else if(acceptStatus === 2)
          STATUS = 3 // reject

        await requestController.sendRequestToUser(msg , myLessonItem.tutorUserId , myLessonItem.userId , STATUS , myLessonItem.id  )
      }  catch (e) {

      }


      res.status(200).send({acceptStatus: acceptStatus });

    } catch (e) {

      let result = {error: true , type: "err" , data: e}
      res.status(411).send(result);
    }

  },

}
