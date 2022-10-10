import {QueryTypes} from "sequelize";
import uniqueString from 'unique-string'
import mail from "../_helpers/mail";

const sequelize = require("sequelize");
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
const db = require("../models")

module.exports = {


  async getRequestCount(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      let userId = req.authUser.id
      if (userId === null || userId === undefined)
        return res.status(422).send({error: "erorr"});

      const db = require("../models")
      let requests = []
      var count = 0
      await db.sequelize.query('SELECT COUNT(t.viewed) AS count FROM Requests as t where (t.receiverId = :userId AND t.viewed = 0)'
        , {replacements: {userId: userId}, type: QueryTypes.SELECT}
      ).then(function (projects) {
        count = (projects.length)
        if (projects.length > 0) {
          projects.forEach((row) => {
            count = row["count"]
          })

        }
      })

      let result = {c: count, data: null}
      res.status(200).send(result);

    } catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },

  async getTakeLessonRequestCount(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let userId = req.authUser.id
      if (userId === null || userId === undefined)
        return res.status(422).send({error: "erorr"});


      let requests = []
      var count = 0
      await db.sequelize.query('SELECT COUNT(t.viewed) AS count FROM Requests as t where (t.type = 1)'
        , {replacements: {userId: userId}, type: QueryTypes.SELECT}
      ).then(function (projects) {
        count = (projects.length)
        if (projects.length > 0) {
          projects.forEach((row) => {
            count = row["count"]
          })

        }
      })

      let result = {c: count, data: null}
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
      if (userId === null || userId === undefined)
        return res.status(422).send({error: "erorr"});

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
        , {replacements: {userId: userId}, type: QueryTypes.SELECT}
      ).then(function (projects) {
        count = (projects.length)
        if (projects.length > 0) {

          projects.forEach((row) => {
            let uId = row.senderId
            let flag = false;
            if (row.senderId === userId) {
              flag = true
              uId = row.receiverId
            }
            let ll = row.updatedAt
            let createDate = row.createdAt
            requests.push({
              id: row.id
              , image_ru: row.image_ru
              , image_su: row.image_su
              , room: row.room
              , receiverId: row.receiverId
              , senderId: row.senderId
              , viewName: flag === true ? row.r_name : row.s_name
              , viewLname: flag === true ? row.r_lastName : row.s_lastName
              , viewUserId: uId
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
              , entityId: row.entityId
            })

          })

        }
      })

      let result = {c: count, data: requests}
      res.status(200).send(result);

    } catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },

  async getUserRequests(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let userId = req.authUser.id
      if (userId === null || userId === undefined)
        return res.status(422).send({error: "erorr"});

      let secondUserId = req.body.sUid;
      if (secondUserId === null || secondUserId === undefined)
        return res.status(422).send({error: "erorr"});

      let requests = await requestModel.findAll({
        where: {
          [sequelize.Op.or]: [{[sequelize.Op.and]: [{receiverId: userId, senderId: secondUserId}]}
            , {[sequelize.Op.and]: [{receiverId: secondUserId, senderId: userId}]}],
          // type:0
        },
        include: {model: myLessonModel, required: false, include: {model: lessonModel, required: true}},
        distinct: true
      })

      let result = {data: requests}
      res.status(200).send(result);


    } catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },


  async createRequest(req, res) {
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
      if (roomNumber === -1) {
        let request = await requestModel.findOne({where: {id: nRequest.id}})
        request.room = request.id
        request.save()
        nRequest = request;
      }

      const findReceiver = await user.findOne({
        where: {
          id: receiverId
        }
      })
      if (findReceiver.receiveEmailOnMessage)
        await module.exports.sendEmailToReceiverOnMessage(findReceiver)

      // let requests = await requestModel.findAll({
      //   where: {
      //     [sequelize.Op.or]: [{[sequelize.Op.and]: [{receiverId: senderId, senderId: receiverId}]}
      //       , {[sequelize.Op.and]: [{receiverId: receiverId, senderId: senderId}]}],
      //     type:0
      //   },
      //   distinct: true
      // })

      return res.status(200).send({ok: true, data: nRequest});

    } catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },

  async sendRequestToUser(text, senderId, receiverId, type, entityId, transaction) {
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
      }, transaction !== null ? {transaction: transaction} : {})


      const findReceiver = await user.findOne({
        where: {
          id: receiverId
        }
      })
      if (findReceiver.receiveEmailOnRequest)
        await module.exports.sendEmailToReceiverOnRequest(findReceiver)

      return ({error: false, type: "OK", data: nRequest});

    } catch (e) {
      return ({error: true, type: "", data: e});

    }

  },


  async setView(req, res) {
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

      let requests = await requestModel.findAll({where: {receiverId: userId, senderId: senderId, viewed: false}})

      if (requests.length > 0)
        requests.forEach((item) => {
          item.viewed = 1
          let date_ob = new Date();
          item.viewTime = date_ob.toUTCString();
          item.save()
        })

      return res.status(200).send("success");

    } catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },

  async deleteRequest(req, res) {
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

      let requests = await requestModel.findAll({
        where: {
          id: rId,
          receiverId: receiverId,
          senderId: senderId,
          [sequelize.Op.not]: [{deleteId1: rId}, {deleteId2: rId}]
        }
      })

      if (requests.length > 0)
        requests.forEach((item) => {
          item.viewed = 1
          item.viewTime = Date.getDate();
          item.save()
        })

      return res.status(200).send("success");


    } catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },

  async deleteAllUserMessage(req, res) {
    try {

      let userId = req.authUser.id
      let receiverId = req.body.senderId

      if (receiverId === undefined || receiverId <= 0)
        return res.status(401).send("error");

      let requests = await requestModel.findAll({
        where: {
          [sequelize.Op.or]: [{[sequelize.Op.and]: [{receiverId: userId, senderId: receiverId}]},
            {[sequelize.Op.and]: [{receiverId: receiverId, senderId: userId}]}],
          [sequelize.Op.and]: [{[sequelize.Op.or]: [{[sequelize.Op.not]: [{deleteId2: userId}]}, {deleteId2: {[sequelize.Op.is]: null}}]}, {[sequelize.Op.or]: [{[sequelize.Op.not]: [{deleteId1: userId}]}, {deleteId1: {[sequelize.Op.is]: null}}]}],
        }
      })

      if (requests.length > 0)
        requests.forEach((item) => {
          if (item.deleteId1 === null || item.deleteId1 === 0)
            item.deleteId1 = userId
          else
            item.deleteId2 = userId
          item.save()
        })

      return res.status(200).send("removed");

    } catch (e) {
      console.log(e)
      res.status(401).send("error");
    }
  },

  async hasUnread(req, res) {
    try {
      let userId = req.authUser.id

      let count = await requestModel.count({
        where: {
          receiverId: userId,
          [sequelize.Op.or]: [{viewed: 0}, {viewed: null}]
        }
      })

      res.status(200).send({count: count});
    } catch (e) {
      res.status(401).send("error");
    }
  },

  async sendEmailToReceiverOnRequest(receiver) {
    let html = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
      '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n' +
      '<head>\n' +
      '<!--[if gte mso 9]>\n' +
      '<xml>\n' +
      '  <o:OfficeDocumentSettings>\n' +
      '    <o:AllowPNG/>\n' +
      '    <o:PixelsPerInch>96</o:PixelsPerInch>\n' +
      '  </o:OfficeDocumentSettings>\n' +
      '</xml>\n' +
      '<![endif]-->\n' +
      '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n' +
      '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
      '  <meta name="x-apple-disable-message-reformatting">\n' +
      '  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->\n' +
      '  <title></title>\n' +
      '  \n' +
      '    <style type="text/css">\n' +
      '      table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }\n' +
      '@media only screen and (min-width: 520px) {\n' +
      '  .u-row {\n' +
      '    width: 500px !important;\n' +
      '  }\n' +
      '  .u-row .u-col {\n' +
      '    vertical-align: top;\n' +
      '  }\n' +
      '\n' +
      '  .u-row .u-col-100 {\n' +
      '    width: 500px !important;\n' +
      '  }\n' +
      '\n' +
      '}\n' +
      '\n' +
      '@media (max-width: 520px) {\n' +
      '  .u-row-container {\n' +
      '    max-width: 100% !important;\n' +
      '    padding-left: 0px !important;\n' +
      '    padding-right: 0px !important;\n' +
      '  }\n' +
      '  .u-row .u-col {\n' +
      '    min-width: 320px !important;\n' +
      '    max-width: 100% !important;\n' +
      '    display: block !important;\n' +
      '  }\n' +
      '  .u-row {\n' +
      '    width: calc(100% - 40px) !important;\n' +
      '  }\n' +
      '  .u-col {\n' +
      '    width: 100% !important;\n' +
      '  }\n' +
      '  .u-col > div {\n' +
      '    margin: 0 auto;\n' +
      '  }\n' +
      '}\n' +
      'body {\n' +
      '  margin: 0;\n' +
      '  padding: 0;\n' +
      '}\n' +
      '\n' +
      'table,\n' +
      'tr,\n' +
      'td {\n' +
      '  vertical-align: top;\n' +
      '  border-collapse: collapse;\n' +
      '}\n' +
      '\n' +
      'p {\n' +
      '  margin: 0;\n' +
      '}\n' +
      '\n' +
      '.ie-container table,\n' +
      '.mso-container table {\n' +
      '  table-layout: fixed;\n' +
      '}\n' +
      '\n' +
      '* {\n' +
      '  line-height: inherit;\n' +
      '}\n' +
      '\n' +
      'a[x-apple-data-detectors=\'true\'] {\n' +
      '  color: inherit !important;\n' +
      '  text-decoration: none !important;\n' +
      '}\n' +
      '\n' +
      '</style>\n' +
      '  \n' +
      '  \n' +
      '\n' +
      '</head>\n' +
      '\n' +
      '<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">\n' +
      '  <!--[if IE]><div class="ie-container"><![endif]-->\n' +
      '  <!--[if mso]><div class="mso-container"><![endif]-->\n' +
      '  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">\n' +
      '  <tbody>\n' +
      '  <tr style="vertical-align: top">\n' +
      '    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">\n' +
      '    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->\n' +
      '    \n' +
      '\n' +
      '<div class="u-row-container" style="padding: 0px;background-color: #02378e">\n' +
      '  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">\n' +
      '    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">\n' +
      '      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #02378e;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->\n' +
      '      \n' +
      '<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->\n' +
      '<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">\n' +
      '  <div style="width: 100% !important;">\n' +
      '  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->\n' +
      '  \n' +
      '<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">\n' +
      '  <tbody>\n' +
      '    <tr>\n' +
      '      <td style="overflow-wrap:break-word;word-break:break-word;padding:32px;font-family:arial,helvetica,sans-serif;" align="left">\n' +
      '        \n' +
      '<table width="100%" cellpadding="0" cellspacing="0" border="0">\n' +
      '  <tr>\n' +
      '    <td style="padding-right: 0px;padding-left: 0px;" align="center">\n' +
      '      \n' +
      '      <img align="center" border="0" src="https://tuteloop.ca/storage/logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 33%;max-width: 143.88px;" width="143.88"/>\n' +
      '      \n' +
      '    </td>\n' +
      '  </tr>\n' +
      '</table>\n' +
      '\n' +
      '      </td>\n' +
      '    </tr>\n' +
      '  </tbody>\n' +
      '</table>\n' +
      '\n' +
      '  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->\n' +
      '  </div>\n' +
      '</div>\n' +
      '<!--[if (mso)|(IE)]></td><![endif]-->\n' +
      '      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<div class="u-row-container" style="padding: 0px;background-color: transparent">\n' +
      '  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">\n' +
      '    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">\n' +
      '      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->\n' +
      '      \n' +
      '<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->\n' +
      '<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">\n' +
      '  <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">\n' +
      '  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->\n' +
      '  \n' +
      '<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">\n' +
      '  <tbody>\n' +
      '    <tr>\n' +
      '      <td style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">\n' +
      '        \n' +
      '  <div style="color: #004094; line-height: 140%; text-align: left; word-wrap: break-word;">\n' +
      '    <p style="font-size: 14px; line-height: 140%;"><strong>Hello,</strong></p>\n' +
      '<p style="font-size: 14px; line-height: 140%;">&nbsp;</p>\n' +
      '<p style="font-size: 14px; line-height: 140%;">You have a new Request, to see it you can go to the link below:</p>\n' +
      '<p style="font-size: 14px; line-height: 140%;">&nbsp;</p>\n' +
      '<p style="font-size: 14px; line-height: 140%;"><span style="color: #e67e23; font-size: 14px; line-height: 19.6px;"><a style="color: #e67e23;" rel="noopener" href="http://tuteloop.ca/user-panel/my-lessons" target="_blank">http://tuteloop.ca/user-panel/my-lessons</a></span></p>\n' +
      '<p style="font-size: 14px; line-height: 140%;">&nbsp;</p>\n' +
      '<p style="font-size: 14px; line-height: 140%;">Or press the button bellow:</p>\n' +
      '  </div>\n' +
      '\n' +
      '      </td>\n' +
      '    </tr>\n' +
      '   </tbody>\n' +
      '</table>\n' +
      '\n' +
      '  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->\n' +
      '  </div>\n' +
      '</div>\n' +
      '<!--[if (mso)|(IE)]></td><![endif]-->\n' +
      '      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<div class="u-row-container" style="padding: 0px;background-color: transparent">\n' +
      '  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">\n' +
      '    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">\n' +
      '      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->\n' +
      '      \n' +
      '<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->\n' +
      '<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">\n' +
      '  <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">\n' +
      '  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->\n' +
      '  \n' +
      '<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">\n' +
      '  <tbody>\n' +
      '    <tr>\n' +
      '      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">\n' +
      '        \n' +
      '<div align="center">\n' +
      '  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;"><tr><td style="font-family:arial,helvetica,sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://tuteloop.ca/tutors/1?tutor=&subject=-1&method=3&price=0&price=100&rate=0&rate=5" style="height:37px; v-text-anchor:middle; width:150px;" arcsize="11%" stroke="f" fillcolor="#02378e"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->\n' +
      '    <a href="http://tuteloop.ca/user-panel/my-lessons" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #02378e; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">\n' +
      '      <span style="display:block;padding:10px 20px;line-height:120%;"><span style="font-size: 14px; line-height: 16.8px;">See the request</span></span>\n' +
      '    </a>\n' +
      '  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->\n' +
      '</div>\n' +
      '\n' +
      '      </td>\n' +
      '    </tr>\n' +
      '  </tbody>\n' +
      '</table>\n' +
      '\n' +
      '  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->\n' +
      '  </div>\n' +
      '</div>\n' +
      '<!--[if (mso)|(IE)]></td><![endif]-->\n' +
      '      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '\n' +
      '    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n' +
      '    </td>\n' +
      '  </tr>\n' +
      '  </tbody>\n' +
      '  </table>\n' +
      '  <!--[if mso]></div><![endif]-->\n' +
      '  <!--[if IE]></div><![endif]-->\n' +
      '</body>\n' +
      '\n' +
      '</html>\n'
    await mail.sendMail(receiver.email, 'Hi, You received new Request in tuteloop', 'Hi, You received new Request in tuteloop', html)
  },

  async sendEmailToReceiverOnMessage(receiver) {
    let html = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
      '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n' +
      '<head>\n' +
      '<!--[if gte mso 9]>\n' +
      '<xml>\n' +
      '  <o:OfficeDocumentSettings>\n' +
      '    <o:AllowPNG/>\n' +
      '    <o:PixelsPerInch>96</o:PixelsPerInch>\n' +
      '  </o:OfficeDocumentSettings>\n' +
      '</xml>\n' +
      '<![endif]-->\n' +
      '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n' +
      '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
      '  <meta name="x-apple-disable-message-reformatting">\n' +
      '  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->\n' +
      '  <title></title>\n' +
      '  \n' +
      '    <style type="text/css">\n' +
      '      table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }\n' +
      '@media only screen and (min-width: 520px) {\n' +
      '  .u-row {\n' +
      '    width: 500px !important;\n' +
      '  }\n' +
      '  .u-row .u-col {\n' +
      '    vertical-align: top;\n' +
      '  }\n' +
      '\n' +
      '  .u-row .u-col-100 {\n' +
      '    width: 500px !important;\n' +
      '  }\n' +
      '\n' +
      '}\n' +
      '\n' +
      '@media (max-width: 520px) {\n' +
      '  .u-row-container {\n' +
      '    max-width: 100% !important;\n' +
      '    padding-left: 0px !important;\n' +
      '    padding-right: 0px !important;\n' +
      '  }\n' +
      '  .u-row .u-col {\n' +
      '    min-width: 320px !important;\n' +
      '    max-width: 100% !important;\n' +
      '    display: block !important;\n' +
      '  }\n' +
      '  .u-row {\n' +
      '    width: calc(100% - 40px) !important;\n' +
      '  }\n' +
      '  .u-col {\n' +
      '    width: 100% !important;\n' +
      '  }\n' +
      '  .u-col > div {\n' +
      '    margin: 0 auto;\n' +
      '  }\n' +
      '}\n' +
      'body {\n' +
      '  margin: 0;\n' +
      '  padding: 0;\n' +
      '}\n' +
      '\n' +
      'table,\n' +
      'tr,\n' +
      'td {\n' +
      '  vertical-align: top;\n' +
      '  border-collapse: collapse;\n' +
      '}\n' +
      '\n' +
      'p {\n' +
      '  margin: 0;\n' +
      '}\n' +
      '\n' +
      '.ie-container table,\n' +
      '.mso-container table {\n' +
      '  table-layout: fixed;\n' +
      '}\n' +
      '\n' +
      '* {\n' +
      '  line-height: inherit;\n' +
      '}\n' +
      '\n' +
      'a[x-apple-data-detectors=\'true\'] {\n' +
      '  color: inherit !important;\n' +
      '  text-decoration: none !important;\n' +
      '}\n' +
      '\n' +
      '</style>\n' +
      '  \n' +
      '  \n' +
      '\n' +
      '</head>\n' +
      '\n' +
      '<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">\n' +
      '  <!--[if IE]><div class="ie-container"><![endif]-->\n' +
      '  <!--[if mso]><div class="mso-container"><![endif]-->\n' +
      '  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">\n' +
      '  <tbody>\n' +
      '  <tr style="vertical-align: top">\n' +
      '    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">\n' +
      '    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->\n' +
      '    \n' +
      '\n' +
      '<div class="u-row-container" style="padding: 0px;background-color: #02378e">\n' +
      '  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">\n' +
      '    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">\n' +
      '      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #02378e;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->\n' +
      '      \n' +
      '<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->\n' +
      '<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">\n' +
      '  <div style="width: 100% !important;">\n' +
      '  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->\n' +
      '  \n' +
      '<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">\n' +
      '  <tbody>\n' +
      '    <tr>\n' +
      '      <td style="overflow-wrap:break-word;word-break:break-word;padding:32px;font-family:arial,helvetica,sans-serif;" align="left">\n' +
      '        \n' +
      '<table width="100%" cellpadding="0" cellspacing="0" border="0">\n' +
      '  <tr>\n' +
      '    <td style="padding-right: 0px;padding-left: 0px;" align="center">\n' +
      '      \n' +
      '      <img align="center" border="0" src="https://tuteloop.ca/storage/logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 33%;max-width: 143.88px;" width="143.88"/>\n' +
      '      \n' +
      '    </td>\n' +
      '  </tr>\n' +
      '</table>\n' +
      '\n' +
      '      </td>\n' +
      '    </tr>\n' +
      '  </tbody>\n' +
      '</table>\n' +
      '\n' +
      '  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->\n' +
      '  </div>\n' +
      '</div>\n' +
      '<!--[if (mso)|(IE)]></td><![endif]-->\n' +
      '      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<div class="u-row-container" style="padding: 0px;background-color: transparent">\n' +
      '  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">\n' +
      '    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">\n' +
      '      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->\n' +
      '      \n' +
      '<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->\n' +
      '<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">\n' +
      '  <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">\n' +
      '  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->\n' +
      '  \n' +
      '<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">\n' +
      '  <tbody>\n' +
      '    <tr>\n' +
      '      <td style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">\n' +
      '        \n' +
      '  <div style="color: #004094; line-height: 140%; text-align: left; word-wrap: break-word;">\n' +
      '    <p style="font-size: 14px; line-height: 140%;"><strong>Hello,</strong></p>\n' +
      '<p style="font-size: 14px; line-height: 140%;">&nbsp;</p>\n' +
      '<p style="font-size: 14px; line-height: 140%;">You have a new Message, to see it you can go to the link below:</p>\n' +
      '<p style="font-size: 14px; line-height: 140%;">&nbsp;</p>\n' +
      '<p style="font-size: 14px; line-height: 140%;"><span style="color: #e67e23; font-size: 14px; line-height: 19.6px;"><a style="color: #e67e23;" rel="noopener" href="http://tuteloop.ca/user-panel/requests" target="_blank">http://tuteloop.ca/user-panel/requests</a></span></p>\n' +
      '<p style="font-size: 14px; line-height: 140%;">&nbsp;</p>\n' +
      '<p style="font-size: 14px; line-height: 140%;">Or press the button bellow:</p>\n' +
      '  </div>\n' +
      '\n' +
      '      </td>\n' +
      '    </tr>\n' +
      '   </tbody>\n' +
      '</table>\n' +
      '\n' +
      '  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->\n' +
      '  </div>\n' +
      '</div>\n' +
      '<!--[if (mso)|(IE)]></td><![endif]-->\n' +
      '      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '\n' +
      '\n' +
      '<div class="u-row-container" style="padding: 0px;background-color: transparent">\n' +
      '  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">\n' +
      '    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">\n' +
      '      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->\n' +
      '      \n' +
      '<!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->\n' +
      '<div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">\n' +
      '  <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">\n' +
      '  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->\n' +
      '  \n' +
      '<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">\n' +
      '  <tbody>\n' +
      '    <tr>\n' +
      '      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">\n' +
      '        \n' +
      '<div align="center">\n' +
      '  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;"><tr><td style="font-family:arial,helvetica,sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://tuteloop.ca/tutors/1?tutor=&subject=-1&method=3&price=0&price=100&rate=0&rate=5" style="height:37px; v-text-anchor:middle; width:150px;" arcsize="11%" stroke="f" fillcolor="#02378e"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->\n' +
      '    <a href="http://tuteloop.ca/user-panel/requests" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #02378e; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">\n' +
      '      <span style="display:block;padding:10px 20px;line-height:120%;"><span style="font-size: 14px; line-height: 16.8px;">See the message</span></span>\n' +
      '    </a>\n' +
      '  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->\n' +
      '</div>\n' +
      '\n' +
      '      </td>\n' +
      '    </tr>\n' +
      '  </tbody>\n' +
      '</table>\n' +
      '\n' +
      '  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->\n' +
      '  </div>\n' +
      '</div>\n' +
      '<!--[if (mso)|(IE)]></td><![endif]-->\n' +
      '      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '\n' +
      '    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->\n' +
      '    </td>\n' +
      '  </tr>\n' +
      '  </tbody>\n' +
      '  </table>\n' +
      '  <!--[if mso]></div><![endif]-->\n' +
      '  <!--[if IE]></div><![endif]-->\n' +
      '</body>\n' +
      '\n' +
      '</html>\n'
    await mail.sendMail(receiver.email, 'Hi, You received new message in tuteloop','Hi, You received new message in tuteloop', html)
  }
}


