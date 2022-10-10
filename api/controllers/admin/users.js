import db from "../../models";
import {QueryTypes} from "sequelize";
import util from "../../_helpers/util";
import mail from "../../_helpers/mail";
const { Op } = require("sequelize");
const {validationResult} = require('express-validator');
const user = require('../../models').User;
const onlineUserModel = require('../../models').OnlineUser;
const userRole = require('../../models').UserRole;
const roleModle = require('../../models').Role;
const fileModel = require('../../models').File;
const certModel = require('../../models').Certificate;
const lessonModel = require('../../models').Lesson;
const userLessonModel = require('../../models').UserLesson;
const educationModel = require('../../models').Educations;
const userBlackListModel = require('../../models').UserBlackList;
const transcriptModel = require('../../models').Transcripts;
const { sequelize } = require('../../models/index');

module.exports = {

  async changeTranscriptStatus(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const userId = req.authUser.id;
      const status = req.body.acceptStatus

      const findedUser = await transcriptModel.findOne({where: {id: userId },})

      findedUser.update({
        fileId: avatarFile.id,
        acceptStatus: status
      });

      res.status(201).send(transcriptFile);
    } catch (e) {
      res.status(450).send({error: e});
    }
  },

  async list(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()})
      }

      var filters = []
      let email = ""
      let name = ""
      let lastname = ""
      if(req.body.email !== undefined && req.body.email!==null)
        email = req.body.email
      if(req.body.name !== undefined && req.body.name!==null)
        name = req.body.name
      if(req.body.lastname !== undefined && req.body.lastname!==null)
        lastname = req.body.lastname


      if (req.body.email !== "")
        filters.push({where: sequelize.where(sequelize.fn('upper', sequelize.col('email')), {
            [sequelize.Op.like]: email.trim().toUpperCase() +  '%'
          })})

      if (req.body.name !== "")
        filters.push({where: sequelize.where(sequelize.fn('upper', sequelize.col('email')), {
            [sequelize.Op.like]: name.trim().toUpperCase() +  '%'
          })})

      if (req.body.lastname !== "")
        filters.push({where: sequelize.where(sequelize.fn('upper', sequelize.col('lastname')), {
            [sequelize.Op.like]: lastname.trim().toUpperCase() +  '%'
          })})

      if (req.body.active !== 2)
        filters.push({acceptStatus: req.body.active})

      var page_index = 1
      var perPage = 10
      if (req.body.perPage !== undefined && req.body.perPage > 1)
        perPage = req.body.perPage
      if (req.body.pageIndex !== undefined && req.body.pageIndex > 1)
        page_index = req.body.pageIndex


      var userCollection = []
      var count = 0
      if(filters.length === 0) {
        count = await user.count()
        userCollection = await user.findAll(
          {
            offset: perPage * (page_index - 1),
            limit: perPage,
            include: { model: userRole , include:{ model: roleModle , attributes: ['name']}}
          },)
      }
      else {
        count = await user.count({where: {[Op.and]: filters}})
        userCollection = await user.findAll(
          {
            offset: perPage * (page_index - 1),
            limit: perPage,
            where: {[Op.and]: filters},
            include: {all: true, include: {all: true}}
          },)
      }




      if (userCollection === null)
        return res.status(422).send("error_users_empty")

      let rows = []


      userCollection.forEach(item => {
        let roles = []
        let rolesId = []
        item.UserRoles.forEach( role => {
          roles.push(role.Role.name)
          rolesId.push(role.roleId)
        })
        let acceptStatus = "Disable"
        if(item.acceptStatus=== 0)
          acceptStatus = "Pending"
        else if(item.acceptStatus=== 1)
          acceptStatus = "Accepted"
        else if(item.acceptStatus=== 2)
          acceptStatus = ("Reject")
        rows.push({
          id: item.id, email: item.email, name: item.name, lastname: item.lastname , createdAt: item.createdAt !== null ? item.createdAt.toLocaleString() : ""
          , status: acceptStatus , acceptStatus: item.acceptStatus , roles: roles , rolesId: rolesId , emailConfirmed: item.emailConfirmed
        })
      })
      res.status(200).send({row_count: count , rows: rows});

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async changeCount(req, res) {
    try {
      const PENDING = 0;

      var count = 0
      var incomplete_count = 0
      await db.sequelize.query('SELECT count(Users.id) as c FROM Users where\n' +
        '        exists(SELECT * from Certificates AS c where c.userId = Users.id AND c.acceptStatus = 0)\n' +
        '        OR \n' +
        '        exists(SELECT t.userId from Transcripts AS t where t.userId = Users.id AND t.acceptStatus = 0)\n' +
        '        OR \n' +
        '        exists(SELECT * from Educations AS e where e.userId = Users.id AND e.acceptStatus = 0)\n' +
        '        OR \n' +
        '        exists(SELECT l.id from UserLessons ul JOIN Lessons l ON ul.lessonId = l.id where ul.userId = Users.id AND ul.acceptStatus = 0)'
        , {replacements: { }, type: QueryTypes.SELECT}
      ).then(function (projects) {
        count = (projects[0].c)
      })

      await db.sequelize.query('SELECT count(Users.id) as c FROM Users where\n' +
        '        not exists(SELECT * from Certificates AS c where c.userId = Users.id )\n' +
        '        OR \n' +
        '        exists(SELECT t.userId from Transcripts AS t where t.userId = Users.id AND t.acceptStatus = 0)\n' +
        '        OR \n' +
        '        not exists(SELECT * from Educations AS e where e.userId = Users.id )\n' +
        '        OR \n' +
        '        not exists(SELECT l.id from UserLessons ul JOIN Lessons l ON ul.lessonId = l.id where ul.userId = Users.id )'
        , {replacements: { }, type: QueryTypes.SELECT}
      ).then(function (p) {
        incomplete_count = (p[0].c)
      })

      let result = { result: count , incomplete: incomplete_count}
      res.status(200).send(result);


    } catch (e) {
      console.log(e)
      res.status(500).send("error");
    }
  },

  async changes(req, res) {
    try {
      const PENDING = 0;

      let name = ""
      let lastName=""
      let email = ""
      let count = 0
      var page_index = 1
      var perPage = 10
      if (req.body.perPage !== undefined && req.body.perPage > 1)
        perPage = req.body.perPage
      if (req.body.pageIndex !== undefined && req.body.pageIndex > 1)
        page_index = req.body.pageIndex

      var offset = perPage * (page_index - 1)

      var filters = ""

      if (req.body.email !== "") {
        filters = filters + " u.email like :email "
        email = req.body.email
      }

      if (req.body.name !== "")
      {
        if(filters.length > 0)
          filters =  filters + " and "
        filters = filters + " u.name like :name "
        name = req.body.name
      }

      if (req.body.lastname !== "")
      {
        if(filters.length > 0)
          filters =  filters + " and "
        filters = filters + " u.lastname like :lastname "
        lastName = req.body.lastname
      }

      if(filters.length > 0)
        filters = " where " + filters

      await db.sequelize.query('SELECT count(*) as c From Users'
        , {replacements: {}, type: QueryTypes.SELECT}
      ).then(function (result) {
        count = (result[0].c)
      })


      var userCollection = null
      await db.sequelize.query('SELECT u.* , f.path , EXISTS (SELECT Users.* FROM Users WHERE u.id = Users.id and\n' +
        ' (exists(SELECT * from Certificates AS c where c.userId = Users.id AND c.acceptStatus = 0)\n' +
        ' OR \n' +
        ' exists(SELECT * from Educations AS e where e.userId = Users.id AND e.acceptStatus = 0)\n' +
        ' OR \n' +
        ' exists(SELECT t.userId from Transcripts AS t where t.userId = Users.id AND t.acceptStatus = 0)\n' +
        ' OR \n' +
        ' exists(SELECT l.id from UserLessons ul JOIN Lessons l ON ul.lessonId = l.id where ul.userId = Users.id \n' +
        ' AND ul.acceptStatus = 0))) AS changed\n' +
        ' FROM Users AS u  LEFT JOIN Files AS f on f.id = u.fileId \n' + filters +
        ' ORDER BY changed DESC\n' +
        'LIMIT :limit OFFSET :offset '
        , {replacements: {offset: offset, limit: perPage
            ,email: email + "%"
            ,name: name + "%"
            ,lastname: lastName + "%" }, type: QueryTypes.SELECT}
      ).then(function (projects) {
        userCollection = (projects)
      })


      var rows = []
      if (userCollection != null) {

        let certItems = [];
        let eduItems = [];
        let lessonItems = []

        for (const index in userCollection) {
          let item = userCollection[index]
          if (item != null) {
            let acceptStatus = "Disable"
            if(item.acceptStatus === 0)
              acceptStatus = "Pending"
            else if(item.acceptStatus=== 1)
              acceptStatus = "Accepted"
            else if(item.acceptStatus=== 2)
              acceptStatus = ("Reject")

            // find  pending record
            let transcripts = await transcriptModel.findAll({where: {[Op.and]: [{userId: item.id} , ]} ,
              include: { model: fileModel}
            })
            certItems = await certModel.findAll({where: {[Op.and]: [{userId: item.id}, ]},order: [['acceptStatus', 'ASC']]})
            eduItems = await educationModel.findAll({where: {[Op.and]: [{userId: item.id}, ]},order: [['acceptStatus', 'ASC']]})
            lessonItems = await db.sequelize.query('SELECT l.* , ul.acceptStatus , ul.description, ul.userId , ul.lessonId from UserLessons ul JOIN Lessons l ON ul.lessonId = l.id where ul.userId = :userId '
              , {replacements: {userId: item.id}, type: QueryTypes.SELECT})

            rows.push({
              id: item.id, email: item.email, name: item.name
              , createdAt: item.createdAt.toLocaleString()
              , updatedAt: item.updatedAt.toLocaleString()
              , lastname: item.lastName
              , changed: item.changed
              , state: acceptStatus
              , acceptStatus: item.acceptStatus
              , emailConfirmed: item.emailConfirmed
              , certItems: certItems
              , eduItems: eduItems
              , lessonItems: lessonItems
              , transcriptItem: transcripts
            })


          }
        }


      }
      let result = { rows: rows , count: count}

      res.status(200).send(result);


    } catch (e) {
      res.status(500).send(e);
    }
  },

  async changeStatus(req, res) {
    try {
      const CERT_TYPE = "cert"
      const EDUC_TYPE = "educ"
      const LESSON_TYPE = "lesson"
      const USER_TYPE = "user"
      const TRANSCRIPT_TYPE = "transcript"
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let id = req.body.id;
      let status = req.body.status;
      //check target user
      let userId = req.body.userId;

      if(!(userId > 0 ))
        return res.status(422).send("error");

      if(!(id > 0))
        return res.status(422).send("error");
      let date_ob = new Date()


      // change certificate status
      if(req.body.type === CERT_TYPE) {
        let cert = await certModel.findOne({where: {[Op.and]: [{userId: userId}, {id: id}]}})
        if (cert != null) {
          cert.acceptStatus = status
          cert.updatedAt = date_ob.getDate()
          cert.save()
          return res.status(200).send("success");
        }
      }

      // change educations status
      if(req.body.type === EDUC_TYPE) {
        let educ = await educationModel.findOne({where: {[Op.and]: [{userId: userId}, {id: id}]}})
        if (educ != null) {
          educ.acceptStatus = status
          educ.updatedAt = date_ob.getDate()
          educ.save()
          return res.status(200).send("success");
        }
      }

      // change lesson status
      if(req.body.type === LESSON_TYPE) {
        let uLesson = await userLessonModel.findOne({where: {[Op.and]: [{userId: userId}, {lessonId: id}]}})
        if (uLesson != null) {
          uLesson.acceptStatus = status
          uLesson.updatedAt = date_ob.getDate()
          uLesson.save()
          return res.status(200).send("success");
        }
      }
      // change lesson status
      if(req.body.type === USER_TYPE) {
        let uUser = await user.findOne({where: { id: id}})
        if (uUser != null) {
          uUser.acceptStatus = status
          uUser.save()
          return res.status(200).send("success");
        }
      }

      // change TRANSCRIPT status
      if(req.body.type === TRANSCRIPT_TYPE) {
        let trans = await transcriptModel.findOne({where: { userId: userId}})
        if (trans != null) {
          trans.acceptStatus = status
          trans.save()
          return res.status(200).send("success");
        }
      }



    } catch (e) {
      console.log(e)
      res.status(500).send("error");
    }
  },

  async setRole(req , res)
  {
    let transaction = null
    try {

      let roles = req.body.roles;

      let userId = req.body.userId

      if(userId === undefined || userId <= 0)
        return res.status(400).send({"result" : false});

      const roles_current = await  userRole.findAll({where:{userId: userId}})
      if(roles_current!==null)
      {
        let falg_count = 0;
        roles_current.forEach((x)=>{
          for (let i = 0; i < roles.length ; i++) {
            let r = roles[i]
            if(r === x.roleId)
              falg_count = falg_count + 1
          }
        })
        if(falg_count === roles_current.length && roles_current.length > 0)
          return res.status(200).send({result : true , msg:"no change"});
      }
      transaction = await db.sequelize.transaction();
      await userRole.destroy({where: {userId:userId}}, {transaction: transaction})
      for (const roleId of roles) {
        await userRole.create({userId: userId , roleId:  roleId }, {transaction: transaction})
      }
      await transaction.commit();

      res.status(200).send({result : true});

      await module.exports.blackList(userId)
    }catch (e) {
      try{
        if(transaction !== undefined || transaction !== null)
          await transaction.rollback()
      }catch (e1) {

      }
      res.status(400).send({result : false , error: true});

    }
  },
  async blackList(userId)
  {
    try {
      await userBlackListModel.destroy({where: {userId:userId}})
      const userBlockList =  await  userBlackListModel
        .create({
          userId: userId,
          savedTime: Date.now() / 1000,
          type: 'RoleChanged',
        });

      res.status(201).send(userBlockList);

    }catch (e) {
      res.status(500).send("error");

    }
  },
  async getOnlineUser(req, res) {
    try {
      var page_index = 1
      var perPage = 10

      if (req.body.perPage !== undefined && req.body.perPage > 1)
        perPage = req.body.perPage
      if (req.body.pageIndex !== undefined && req.body.pageIndex > 1)
        page_index = req.body.pageIndex

      let where = {};
      where = {
        updatedAt: {
          [Op.gte]: sequelize.literal("NOW() - INTERVAL 5 MINUTE"),
        },
      }
      const {count, rows} = await onlineUserModel.findAndCountAll({
        where: where,
        offset: perPage * (page_index - 1),
        limit: perPage,
        order: [
          ['updatedAt', 'DESC'],
        ],
      });

      res.status(201).send({rows: rows, totalRows: count});
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

}



