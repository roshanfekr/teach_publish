


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


const DateTypeEnum = Object.freeze({
  TODAY: "t",
  WEEK: "w",
  WEEKLY: "wl",
  MONTH: "m",
  MONTHLY: "ml",
  YEARLY: "yl",
  NONE: "n"
});

const RequestTypeEnum = Object.freeze({
  MESSAGE: 0,
  REQUEST_FOR_TAKE: 1,
  ACCEPTED: 2,
  REJECTED: 3,
});

const UserTypeEnum = Object.freeze({
  GUEST: "guest",
  Student: "student",
  TUTOR: "tutor",
  ADMIN: "admin",
  NONE: "n"
});


module.exports = {

  async getRequestCount(userId,dateType,reqTypeEnum) {

    try {

      let result =  [] ;

      if(reqTypeEnum == null)
        reqTypeEnum = RequestTypeEnum.REQUEST_FOR_TAKE

      if (userId == null)
        userId = 0;

      if(dateType !== null ){
        let day = 0;
        if(dateType === DateTypeEnum.WEEK){
          day = 7
        } else if (dateType === DateTypeEnum.MONTH) {
          day = 30
        } else if (dateType === DateTypeEnum.MONTHLY){
            day = 365
        // }else if (dateType === DateTypeEnum.WEEKLY){
        //   day = 365
        }else if (dateType === DateTypeEnum.YEARLY){
          day = 365 * 10
        }
        let sql = 'SELECT r.d , COUNT(id) AS count , r.`type` FROM \n' +
          ' (SELECT date(req.createdAt) AS d, (req.id) , req.`type`\n' +
          ' FROM requests AS req WHERE ( req.`type` > 0) and (req.senderId = :userId OR :userId = 0)' +
          ' and req.createdAt >= DATE_SUB(NOW(), INTERVAL :day DAY) AND req.createdAt <=NOW() ) AS r \n' +
          ' GROUP BY r.d ,r.`type` order by r.d'

        if (dateType === DateTypeEnum.MONTHLY){
          sql = 'SELECT r.w ,r.d , COUNT(id) AS count , r.`type` , r.d1 FROM \n' +
            ' (SELECT week(req.createdAt) as w , CONCAT( year(req.createdAt)  , \'-\', month(req.createdAt)) AS d, date(req.createdAt) as d1' +
            ', (req.id) , req.`type`\n' +
            ' FROM requests AS req WHERE ( req.`type` > 0) and (req.senderId = :userId OR :userId = 0) ' +
            ' and req.createdAt >= DATE_SUB(NOW(), INTERVAL :day DAY) ' +
            ' AND req.createdAt <=NOW() ) AS r \n' +
            ' GROUP BY r.d , r.`type` order by r.d1'

        }
        else if (dateType === DateTypeEnum.YEARLY){
          sql = 'SELECT r.d , COUNT(id) AS count , r.`type` FROM\n' +
            '(SELECT year(req.createdAt)  AS d, (req.id) , req.`type` \n' +
            'FROM requests AS req WHERE req.`type` > 0 and (req.senderId = :userId OR :userId = 0) and ' +
            'req.createdAt >= DATE_SUB(NOW(), INTERVAL :day DAY) AND\n' +
            ' req.createdAt <=NOW() ) AS r \n' +
            'GROUP BY r.d , r.`type` order by r.d\n'

        }
        await db.sequelize.query( sql
          , {replacements: {day: day ,userId: userId }, type: QueryTypes.SELECT}

        ).then(function (reqData) {

          if (reqData.length > 0) {
            reqData.forEach((row) => {
              let rowItem = {d: row["d"], count: row["count"] , type: row["type"]}
              result.push(rowItem)
            })
          }

        })

      }
      return { err: false , exception: null , result: result }
    }catch (e) {
      return { err: true , exception: e , result: null }
    }
  }
  ,

  async getUserReport(dateType , userType) {

    try {
      let roleName = ''
      if(userType === null)
        roleName = 'tutor'
      if(userType === 2)
        roleName = 'student'
      let result = [];


      if(dateType !== null ){
        let day = 0;
        if(dateType === DateTypeEnum.WEEK){
          day = 7
        } else if (dateType === DateTypeEnum.MONTH) {
          day = 30
        } else if (dateType === DateTypeEnum.MONTHLY){
          day = 365
        // }else if (dateType === DateTypeEnum.WEEKLY){
        //   day = 365
        }else if (dateType === DateTypeEnum.YEARLY){
          day = 365 * 10
        }

        let sql = '(SELECT r.d, r.name , COUNT(id) AS count FROM \n' +
          '(SELECT  DATE(usr.createdAt) AS d,  (usr.id) , role.name\n' +
          'FROM users AS usr JOIN userroles AS ur ON usr.id = ur.userId JOIN roles AS role ON role.id = ur.roleId\n' +
          'WHERE (role.name = \'\' OR \'\' = \'\' ) AND  usr.createdAt >= DATE_SUB(NOW(), INTERVAL :day DAY) AND usr.createdAt <= NOW() ) AS r \n' +
          'GROUP BY r.d , r.name ORDER BY r.d)\n' +
          'UNION\n' +
          '(SELECT r.d, r.name , COUNT(r.d) AS count FROM \n' +
          '(SELECT   DATE(usr.createdAt) AS d,  (usr.id) ,\'guest\' AS `name` \n' +
          'FROM \n' +
          '(SELECT * FROM onlineusers AS online WHERE NOT EXISTS(SELECT users.id FROM users WHERE online.email = users.email))\n' +
          ' AS usr \n' +
          'WHERE   usr.createdAt >= DATE_SUB(NOW(), INTERVAL :day DAY) AND usr.createdAt <= NOW() ) AS r \n' +
          'GROUP BY r.d , r.name ORDER BY r.d)'

        if (dateType === DateTypeEnum.MONTHLY){
          sql = '(SELECT r.d, r.name , COUNT(id) AS count FROM \n' +
            '(SELECT   DATE(usr.createdAt) AS da ,CONCAT(year(usr.createdAt) , "-" , month(usr.createdAt)) AS d,  (usr.id) , role.name\n' +
            'FROM users AS usr JOIN userroles AS ur ON usr.id = ur.userId JOIN roles AS role ON role.id = ur.roleId\n' +
            'WHERE (role.name = \'\' OR \'\' = \'\' ) AND  usr.createdAt >= DATE_SUB(NOW(), INTERVAL :day DAY) AND usr.createdAt <= NOW() ) AS r \n' +
            'GROUP BY r.d , r.name ORDER BY r.da)\n' +
            'UNION\n' +
            '(SELECT r.d, r.name , COUNT(r.d) AS count FROM \n' +
            '(SELECT    DATE(usr.createdAt) AS da ,CONCAT(year(usr.createdAt) , "-" , month(usr.createdAt)) AS d,  (usr.id) ,\'guest\' AS `name` \n' +
            'FROM \n' +
            '(SELECT * FROM onlineusers AS online WHERE NOT EXISTS(SELECT users.id FROM users WHERE online.email = users.email))\n' +
            ' AS usr \n' +
            'WHERE   usr.createdAt >= DATE_SUB(NOW(), INTERVAL :day DAY) AND usr.createdAt <= NOW() ) AS r \n' +
            'GROUP BY r.d , r.name ORDER BY r.da)'
        }
        else if (dateType === DateTypeEnum.YEARLY){
          sql = '(SELECT r.d, r.name , COUNT(id) AS count FROM \n' +
            '(SELECT year(usr.createdAt) AS d,  (usr.id) , role.name\n' +
            'FROM users AS usr JOIN userroles AS ur ON usr.id = ur.userId JOIN roles AS role ON role.id = ur.roleId\n' +
            'WHERE  usr.createdAt >= DATE_SUB(NOW(), INTERVAL :day DAY) AND usr.createdAt <= NOW() ) AS r \n' +
            'GROUP BY r.d , r.name ORDER BY r.d)\n' +
            'UNION\n' +
            '(SELECT r.d, r.name , COUNT(r.d) AS count FROM \n' +
            '(SELECT year(usr.createdAt) AS d,  (usr.id) ,\'guest\' AS `name` \n' +
            'FROM \n' +
            '(SELECT * FROM onlineusers AS online WHERE NOT EXISTS(SELECT users.id FROM users WHERE online.email = users.email))\n' +
            ' AS usr \n' +
            'WHERE   usr.createdAt >= DATE_SUB(NOW(), INTERVAL :day DAY) AND usr.createdAt <= NOW() ) AS r \n' +
            'GROUP BY r.d , r.name ORDER BY r.d)'
        }
          await db.sequelize.query(sql , {replacements: {day: day , roleName: roleName}, type: QueryTypes.SELECT}

        ).then(function (reqData) {
          if (reqData.length > 0) {
            reqData.forEach((row) => {
              let rowItem = {year: row["d"] , name: row["name"] , count: row["count"] }
              result.push(rowItem)
            })
          }
        })

      }
      return { err: false , exception: null , result: result }
    }catch (e) {
      return { err: true , exception: e , result: null }
    }
  }
  ,

  async getUserByRequestCount(userId,dateType,reqTypeEnum) {

    try {

      let result = [];

      if(reqTypeEnum == null)
        reqTypeEnum = RequestTypeEnum.REQUEST_FOR_TAKE

      if (userId == null)
        userId = 0;

      if(dateType !== null ){
        let day = 0;

        if(dateType === DateTypeEnum.WEEK){
          day = 7
        } else if (dateType === DateTypeEnum.MONTH){
          day = 30
        }else if (dateType === DateTypeEnum.YEAR){
          day = 365
        }

        await db.sequelize.query('SELECT r.year , r.month , r.day , COUNT(id) AS count FROM \n' +
          '(SELECT YEAR(req.createdAt) AS year, MONTH(req.createdAt) AS month , Day(req.createdAt) AS day, (req.id) \n' +
          'FROM requests AS req WHERE  req.`type` = :reqType and (req.senderId = 64 OR :userId = 0) and req.createdAt >= DATE_SUB(NOW(), INTERVAL :day DAY) AND req.createdAt <= NOW() ) AS r \n' +
          'GROUP BY r.day'
          , {replacements: {day: day ,userId: userId , reqType: reqTypeEnum}, type: QueryTypes.SELECT}

        ).then(function (reqData) {

          if (reqData.length > 0) {
            reqData.forEach((row) => {
              let rowItem = {year: row["year"], month: row["month"] , day: row["day"], count: row["count"] }
              result.push(rowItem)
            })
          }

        })

      }
      return { err: false , exception: null , result: result }
    }catch (e) {
      return { err: true , exception: e , result: null }
    }
  }

}
