import {QueryTypes} from "sequelize";
import uniqueString from 'unique-string'

const  sequelize = require("sequelize");
const {validationResult} = require('express-validator');
const user = require('../models').User;
const userRole = require('../models').UserRole;
const role = require('../models').Role;
const communication = require('../models').Communication;
const myLessonModel = require('../models').MyLesson;
const lessonModel = require('../models').Lesson;

const jwt = require('../_helpers/jwt')
const bcrypt = require('bcryptjs');
const requestModel = require('../models').Request;


module.exports = {


  async getRequestCount(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      let userId = req.authUser.id
      if(userId=== null || userId === undefined )
        return res.status(422).send({error: "erorr" });

      const db = require("../models")
      let requests = []
      var count = 0
      await db.sequelize.query('SELECT COUNT(t.viewed) AS count FROM Requests as t where (t.receiverId = :userId AND t.viewed = 0)'
        , {replacements: {userId: userId }, type: QueryTypes.SELECT}
      ).then(function (projects) {
        count = (projects.length)
        if(projects.length > 0)
        {
          projects.forEach((row) =>{
            count = row["count"]
          })

        }
      })

      let result = { c: count , data: null}
      res.status(200).send(result);

    } catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },



  async getRequests(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      let userId = req.authUser.id
      if(userId=== null || userId === undefined )
        return res.status(422).send({error: "erorr" });

      const db = require("../models")
      let requests = []
      var count = 0
      await db.sequelize.query('SELECT f_ru.path AS image_ru,f_su.path AS image_su, \n' +
        '(SELECT COUNT(t.viewed) FROM Requests as t where t.receiverId = :userId  and t.room = r.room AND t.viewed = 0)  AS unread\n' +
        ', r.* , ru.email AS r_email , ru.NAME AS r_name , ru.lastName AS r_lastName,\n' +
        'su.email AS s_email ,su.NAME AS s_name , su.lastName AS s_lastName \n' +
        ' FROM Requests AS r \n' +
        'JOIN (SELECT max(r.id) AS id FROM Requests AS r GROUP BY r.room) AS r1 ON  r1.id = r.id\n' +
        'JOIN Users AS ru ON ru.id = r.receiverId\n' +
        'JOIN Users AS su ON su.id = r.senderId\n' +
        'LEFT JOIN Files AS f_ru ON f_ru.id = ru.fileId\n' +
        'LEFT JOIN Files AS f_su ON f_su.id = su.fileId\n' +
        // 'LEFT JOIN MyLessons AS mls ON mls.id = t.entityId and t.type= 1\n' +
        'WHERE  (r.senderId= :userId OR r.receiverId = :userId) AND ( r.deleteId1 != :userId OR r.deleteId1 is null ) and' +
        ' (r.deleteId2 != :userId OR r.deleteId2 is null)\n' +
        ' ORDER BY r.updatedAt desc'
        , {replacements: {userId: userId }, type: QueryTypes.SELECT}
      ).then(function (projects) {
        count = (projects.length)
        if(projects.length > 0)
        {

          projects.forEach((row) =>{
            let uId = row.senderId
            let flag = false;
            if(row.senderId === userId)
            {
              flag = true
              uId = row.receiverId
            }
            let ll = row.updatedAt
            let createDate = row.createdAt
            requests.push({id: row.id
              ,image_ru: row.image_ru
              ,image_su: row.image_su
              , room: row.room
              , receiverId: row.receiverId
              , senderId: row.senderId
              , viewName: flag === true ? row.r_name : row.s_name
              , viewLname: flag === true ? row.r_lastName : row.s_lastName
              , viewUserId : uId
              , unread: row.unread
              , viewed: row.viewed
              , updatedAt: ll
              , createdAt: createDate
              , viewTime: row.viewTime
              , deleted: row.deleted
              , text: row.text
              , type: row.type
              , r_email: row.r_email
              , r_name: row.r_name
              , r_lastName: row.r_lastName
              , s_email: row.s_email
              , s_name: row.s_name
              , s_lastName: row.s_lastName
              , entityId: row.entityId})

          })

        }
      })

      let result = { c: count , data: requests}
      res.status(200).send(result);

    } catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },

  async getUserRequests(req, res)
  {
    try{

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let userId = req.authUser.id
      if(userId=== null || userId === undefined )
        return res.status(422).send({error: "erorr" });

      let secondUserId = req.body.sUid;
      if(secondUserId=== null || secondUserId === undefined )
        return res.status(422).send({error: "erorr" });

      let requests = await requestModel.findAll({
        where: {
          [sequelize.Op.or]: [{[sequelize.Op.and]: [{receiverId: userId, senderId: secondUserId}]}
            , {[sequelize.Op.and]: [{receiverId: secondUserId, senderId: userId}]}],
          // type:0
        },
        include:{model:myLessonModel , required: false , include:{ model: lessonModel , required: true} },
        distinct: true
      })

      let result = { data: requests}
      res.status(200).send(result);


    }
    catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },


  async createRequest(req, res)
  {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let text = req.body.text
      let senderId = req.authUser.id;
      let receiverId = req.body.receiverId
      let type = req.body.type
      let entityId = req.body.entityId
      if (text.length === 0)
        return res.status(401).send("error");

      if (senderId === undefined || senderId <= 0)
        return res.status(401).send("error");

      if (receiverId === undefined || receiverId <= 0)
        return res.status(401).send("error");
      let room = await requestModel.findOne({
        where: {
          [sequelize.Op.or]: [{[sequelize.Op.and]: [{receiverId: receiverId, senderId: senderId}]}
            , {[sequelize.Op.and]: [{receiverId: senderId, senderId: receiverId}]}]
        }, distinct: true
      })

      let roomNumber = -1;
      if (room !== null && room !== undefined)
          roomNumber = room.room

      let nRequest = await requestModel.create({
        room: roomNumber,
        receiverId: receiverId,
        senderId: senderId,
        text: text,
        viewed: 0,
        deleted: 0,
        // 0 - user message
        // 1 - reject message
        type: type,
        entityId: entityId,
      })
      // todo: what is this shompekht
      // vase roomId shompet
      if(roomNumber === -1 )
      {
        let request = await requestModel.findOne({where: {id: nRequest.id}})
        request.room = request.id
        request.save()
        nRequest = request;
      }

      // let requests = await requestModel.findAll({
      //   where: {
      //     [sequelize.Op.or]: [{[sequelize.Op.and]: [{receiverId: senderId, senderId: receiverId}]}
      //       , {[sequelize.Op.and]: [{receiverId: receiverId, senderId: senderId}]}],
      //     type:0
      //   },
      //   distinct: true
      // })

      return res.status(200).send( {ok: true , data:nRequest});

    }
    catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },

  async sendRequestToUser(text, senderId, receiverId, type, entityId , transaction) {
    try {

      if (text.length === 0 && type === 0)
        return {error: true, type: ""};

      if (senderId === undefined || senderId <= 0)
        return {error: true, type: ""};

      if (receiverId === undefined || receiverId <= 0)
        return {error: true, type: ""};

      let room = await requestModel.findOne({
        where: {
          [sequelize.Op.or]: [{[sequelize.Op.and]: [{receiverId: receiverId, senderId: senderId}]}
            , {[sequelize.Op.and]: [{receiverId: senderId, senderId: receiverId}]}]
        }, distinct: true
      })

      let roomNumber = -1;
      if (room !== null && room !== undefined)
        roomNumber = room.room

      if (roomNumber === -1)
        roomNumber = uniqueString()

      let nRequest = await requestModel.create({
        room: roomNumber,
        receiverId: receiverId,
        senderId: senderId,
        text: text,
        viewed: 0,
        deleted: 0,
        // 0 - user message
        // 1 - reject message
        type: type,
        entityId: entityId,
      } , transaction!==null?{  transaction:transaction}: {})

      return ({error: false, type:"OK" , data: nRequest});

    }catch (e) {
      return ({error: true, type:"" , data: e});

    }

  },


  async setView(req, res)
  {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let userId = req.authUser.id
      let senderId = req.body.sUid

      if (senderId === undefined || senderId <= 0)
        return res.status(401).send("error");

      if (userId === undefined || userId <= 0)
        return res.status(401).send("error");

      let requests = await requestModel.findAll({ where: {receiverId: userId, senderId: senderId , viewed: false} })

      if (requests.length > 0)
        requests.forEach((item) => {
          item.viewed = 1
          let date_ob = new Date();
          item.viewTime = date_ob.toUTCString();
          item.save()
        })

      return res.status(200).send("success");

    }
    catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },

  async deleteRequest(req, res)
  {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let senderId = req.body.senderId
      let receiverId = req.body.receiverId
      let rId = req.body.rId

      if (senderId === undefined || senderId <= 0)
        return res.status(401).send("error");

      if (receiverId === undefined || receiverId <= 0)
        return res.status(401).send("error");

      if (rId === undefined || rId <= 0)
        return res.status(401).send("error");

      let requests = await requestModel.findAll({ where: {
          id: rId ,
          receiverId: receiverId,
          senderId: senderId ,
          [sequelize.Op.not]: [{deleteId1: rId} , {deleteId2: rId} ]
      }})

      if (requests.length > 0)
        requests.forEach((item) => {
          item.viewed = 1
          item.viewTime = Date.getDate();
          item.save()
        })

      return res.status(200).send("success");


    }
    catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },

  async deleteAllUserMessage(req, res)
  {
    try {

      let userId = req.authUser.id
      let receiverId = req.body.senderId

      if (receiverId === undefined || receiverId <= 0)
        return res.status(401).send("error");

      let requests = await requestModel.findAll({ where: {
          [sequelize.Op.or]: [{[sequelize.Op.and]: [{receiverId: userId, senderId: receiverId}]},
            {[sequelize.Op.and]: [{receiverId: receiverId, senderId: userId}]}],
          [sequelize.Op.and]:[{[sequelize.Op.or]:[{[sequelize.Op.not]:[{deleteId2: userId}]} ,{deleteId2: {[sequelize.Op.is]: null }} ]},{[sequelize.Op.or]:[{[sequelize.Op.not]:[{deleteId1: userId}]} ,{deleteId1: {[sequelize.Op.is]: null }} ]}],
        }})

      if (requests.length > 0)
        requests.forEach((item) => {
          if(item.deleteId1 === null || item.deleteId1 ===0 )
            item.deleteId1 = userId
          else
            item.deleteId2 = userId
          item.save()
        })

      return res.status(200).send("removed");

    }
    catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },

  async hasUnread(req, res)
  {
    try {
      let userId = req.authUser.id

      let count = await requestModel.count({where:{receiverId: userId , [sequelize.Op.or]:[{viewed: 0 }, {viewed: null }] }})

      res.status(200).send({count: count});
    }catch (e) {
      res.status(401).send("error");
    }
  }

}


