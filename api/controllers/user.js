const sequelize = require('sequelize');
const {validationResult} = require('express-validator');
const user = require('../models').User;
const myLessonModel = require('../models').MyLesson;
const userRole = require('../models').UserRole;
const roleModel = require('../models').Role;
const role = require('../models').Role;
const communication = require('../models').Communication;
const experience = require('../models').Experience;
const educations = require('../models').Educations;
const tutorTiming = require('../models').TutorTiming;
const certificate = require('../models').Certificate;
const userLesson = require('../models').UserLesson;
const rateOverallModel = require('../models').RateOverall;
const lesson = require('../models').Lesson;
const roleController = require('../controllers/role');
const mail = require('../_helpers/mail')
const jwt = require('../_helpers/jwt')
const bcrypt = require('bcryptjs');
const util = require("../_helpers/util");
const fileModel = require('../models').File;
const fs = require('fs')
const path = require('path')
const {blacklist} = require("validator");
const {INTEGER} = require("sequelize");
const userBlackListModel = require('../models').UserBlackList;
const lessonModel = require('../models').Lesson;

module.exports = {

  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const email = req.body.email
      const name = req.body.name
      const lastName = req.body.lastName
      const program = req.body.program
      const findedUser = await module.exports.findByEmail(email)

      if (findedUser !== null)
        return res.status(422).send({
          errors: {
            email: {
              "msg": "emailReserved",
              value: req.body.email
            }
          }
        })
      const roleCollection = await roleController.findByName(req.body.role)
      if (roleCollection === null || req.body.role === "admin") {
        return res.status(422).send({
          errors: {
            role: {
              "msg": "roleNotValid",
              value: req.body.role
            }
          }
        })
      }

      var randomString = util.generateRandomString(128)
      let userCollection = await user
        .create({
          name: name,
          lastName: lastName,
          program: program,
          email: email,
          isActive: false,
          emailConfirmed: false,
          emailConfirmCode: randomString,
          password: bcrypt.hashSync(req.body.password, 8)
        });

      await userRole.create({
        userId: userCollection.id,
        roleId: roleCollection.id
      })

     // var html = '<b>Hey there! </b><br> This is active url, please click it for active your email.<br/><a href="http://tuteloop.ca/activation?email=' + email + '&code=' + randomString + '">Click here</a> '
      var html ='<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
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
        '<p style="font-size: 14px; line-height: 140%;">Thanks for joining TuteLoop! Please use this link to verify yourself and to confirm your email:</p>\n' +
        '<p style="font-size: 14px; line-height: 140%;">&nbsp;</p>\n' +
        '<p style="font-size: 14px; line-height: 140%;"><span style="color: #e67e23; font-size: 14px; line-height: 19.6px;"><a style="color: #e67e23;" rel="noopener" href="http://tuteloop.ca/activation?email=' + encodeURIComponent(email) + '&code=' + randomString + '" target="_blank">http://tuteloop.ca/activation?email=' + encodeURIComponent(email) + '&code=' + randomString + '</a></span></p>\n' +
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
        '    <a href="http://tuteloop.ca/activation?email=' + encodeURIComponent(email) + '&code=' + randomString + '" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #02378e; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">\n' +
        '      <span style="display:block;padding:10px 20px;line-height:120%;"><span style="font-size: 14px; line-height: 16.8px;">Confirm my Email</span></span>\n' +
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
      await mail.sendMail(email, 'Welcome to TuteLoop - Confirm Email', 'randomString is : ' + randomString, html)

      res.status(201).send(userCollection);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async refreshLogin(req, res) {
    try {
      const userCollection = await user.findOne(
        {where: {id: req.authUser.id},  include: [
            {
              model: userRole,
              include: [
                {
                  model: role,
                }
              ]
            }
          ]}
      )
      if (userCollection === null)
        return res.status(422).send({
          errors: {
            email: {
              "msg": "this email address not registered",
              value: req.body.email
            }
          }
        })
      else{
        var roles = [];
        userCollection.UserRoles.forEach(item => {
          roles.push(item.Role.name)
        })
        let token = jwt.genToken({
          id: userCollection.id,
          name: userCollection.name,
          email: userCollection.email,
          emailConfirmed: userCollection.emailConfirmed,
          scope: roles,
          // createTime: Number(Date.now() / 1000)
        })
        res.send({token: token})

      }

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  async login(req, res) {
    try {
      const userCollection = await user.findOne(
        {
          where: {email: req.body.email},
          include: [
            {
              model: userRole,
              include: [
                {
                  model: role,
                }
              ]
            }
          ]
        }
      )

      if (userCollection) {
        var roles = [];
        userCollection.UserRoles.forEach(item => {
          roles.push(item.Role.name)
        })
        var passwordIsValid = bcrypt.compareSync(req.body.password, userCollection.password);
        if (passwordIsValid) {
          let token = jwt.genToken({
            id: userCollection.id,
            name: userCollection.name,
            email: userCollection.email,
            emailConfirmed: userCollection.emailConfirmed,
            scope: roles,
            // createTime: Number(Date.now() / 1000)
          })
          res.send({token: token})
        } else {
          res.status(404).send({
            errors: {
              email: {
                "msg": "loginFailed",
                value: req.body.email
              }
            }
          });
        }

      } else {
        res.status(404).send({
          errors: {
            email: {
              "msg": "loginFailed",
              value: req.body.email
            }
          }
        });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  async disableAccount(req, res) {
    try {
      let userModel = require('../models').User

      const userId = req.authUser.id;
      const disable = req.body.dis
      const user = await userModel.findOne({where: {id: userId}})
      user.disable = disable
      user.save()

      return res.status(200).send({disable: user.disable , del: user.deleted});
    } catch (e) {
      console.log(e);
      return res.status(400).send({result: false});
    }
  },

  async getCourseCount(req,res){

    try {
      let userId = req.authUser.id

      const count = await userLesson.count({where: { userId: userId }})

      return res.status(200).send({c: count});

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async getDisableStatus(req, res){
    try {
      let userModel = require('../models').User
      const userId = req.authUser.id;
      const user = await userModel.findOne({where: {id: userId}})
      return res.status(200).send({disable: user.disable , del: user.deleted});
    } catch (e) {
      console.log(e);
      return res.status(400).send({result: false});
    }
  },

  async findByEmail(value) {
    try {
      const userCollection = await user.findOne(
        {where: {email: value}}
      )
      return userCollection
    } catch (e) {
      console.log(e);
      return null;
    }
  },

  async getStudentDetail(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send({errors: errors.mapped()});
    }
    try {
      const uRow = await user.findOne(
        {
          where: {id: req.authUser.id},
          include: [
            {
              model: fileModel,
            }
          ]
        }
      )

      let info = {
        name: uRow.name
        , File: uRow.File
        , lastName: uRow.lastName
        , email: uRow.email
        , emailConfirmed: uRow.emailConfirmed
        , acceptStatus: uRow.acceptStatus
        , headline: uRow.headline
        , bioMore: uRow.bioMore
        , fileId: uRow.fileId
        , createdAt: uRow.createdAt
        , updatedAt: uRow.updatedAt
        , program: uRow.program
        , transcript_fileId: uRow.transcript_fileId
        , trainingMethod: uRow.training_method
      }
      res.status(201).send(info);
    } catch (e) {
      res.status(400).send(e);
      return null;
    }
  },

  async saveUserImage(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const userId = req.authUser.id;

      const findedUser = await user.findOne(
        {
          where: {id: userId},
          include: {
            model: fileModel,
          }
        }
      )

      var tempPath = req.file.path
      let dir = 'api/storage/tutor/' + req.authUser.id
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      var newPath = dir + "/" + "avatar_" + req.file.filename

      fs.rename(tempPath, newPath, function (err) {
        if (err) throw err
      })

      //remove old file record
      let fileObj = await fileModel.findOne({where: {id: findedUser.fileId}})
      if (fileObj !== null)
        fileObj.destroy()

      //create new file record
      let avatarFile = await fileModel
        .create({
          path: newPath.substr(4),
          ext: path.extname(req.file.filename),
          userId: userId
        })

      findedUser.update({
        fileId: avatarFile.id,
      });

      res.status(201).send(avatarFile);
    } catch (e) {
      res.status(450).send({error: e});
    }
  },

  async removeUserImage(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const userId = req.authUser.id;

      const findedUser = await user.findOne(
        {
          where: {id: userId},
          include: {
            model: fileModel,
          }
        }
      )
      //remove old file record
      let fileObj = await fileModel.findOne({where: {id: findedUser.fileId}})
      if (fileObj !== null)
        fileObj.destroy()

      findedUser.update({
        fileId: null,
      });

      res.status(201).send(null);
    } catch (e) {
      res.status(450).send({error: e});
    }
  },

  async saveUserTranscript(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const userId = req.authUser.id;

      if (req.file !== null && req.file !== undefined) {

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

          const findedUser = await user.findOne({where: {id: userId},})

          //remove old file record
          if (findedUser.transcript_fileId > 0) {
            let fileObj = await fileModel.findOne({where: {id: findedUser.transcript_fileId}})
            if (fileObj !== null)
              fileObj.destroy()
          }

          //create new file record
          let avatarFile = await fileModel
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

      res.status(201).send(true);
    } catch (e) {
      res.status(450).send({error: e});
    }
  },

  async getUserTranscript(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const userId = req.authUser.id;

      const findedUser = await user.findOne({where: {id: userId},})

      let transcriptFile = {}
      //remove old file record
      if (findedUser.transcript_fileId > 0) {
        let fileObj = await fileModel.findOne({where: {id: findedUser.transcript_fileId}})
        var stats = fs.statSync("./api/" + fileObj.path)
        var fileSizeInBytes = stats.size;
// Convert the file size to megabytes (optional)
        var fileSizeInMegabytes = fileSizeInBytes / (1024);
        transcriptFile = {fileId: fileObj.id, size: fileSizeInMegabytes}
      }


      res.status(201).send(transcriptFile);
    } catch (e) {
      res.status(450).send({error: e});
    }
  },

  async saveStudentDetail(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      const userId = req.authUser.id;


      const findedUser = await user.findOne(
        {
          where: {id: userId},
          include: {
            model: communication,
            attributes: ['id', 'name', 'accountId', 'userId']
          }
        }
      )
      if (findedUser === null)
        return res.status(422).send({
          errors: {
            user: {
              "msg": "userNotFound",
            }
          }
        })
      let formData = JSON.parse(req.body.registerForm)
      await findedUser.update({
        name: formData.name,
        lastName: formData.lastName,
        headline: formData.headline,
        bioMore: formData.bioMore,
        program: formData.program,
        training_method: formData.trainingMethod ,

      });

      let uRow = findedUser
      let info = {
          name: formData.name
        , File: uRow.File
        , lastName: formData.lastName
        , email: uRow.email
        , emailConfirmed: uRow.emailConfirmed
        , acceptStatus: uRow.acceptStatus
        , headline: formData.headline
        , bioMore: formData.bioMore
        , fileId: uRow.fileId
        , createdAt: uRow.createdAt
        , updatedAt: uRow.updatedAt
        , program: uRow.program
        , transcript_fileId: uRow.transcript_fileId
        , trainingMethod: uRow.training_method
        , token : ""
        , disable : uRow.disable
      }
      let ret = await module.exports.loginFunc(findedUser.id)
      if(ret.login)
        info.token = ret.token

      res.status(201).send(info);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async getTutorStatus(req, res) {
    try {

      const uRow = await user.findOne({where: {id: req.authUser.id}})
      const lesson = await userLesson.findOne({where: {userId: req.authUser.id}})
      const schedules = await tutorTiming.findOne({where: {userId: req.authUser.id}})

      let result = {
        emailComfirmed: uRow.emailConfirmed
        , subject: !(lesson !== null)
        , tutorTiming: (schedules !== null)}

      res.status(200).send(result);

    } catch (e) {
      res.status(410).send(false);
    }
  },

  async changePassword(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const userCollection = await user.findOne(
        {where: {id: req.authUser.id},}
      )
      if (userCollection === null)
        return res.status(422).send({
          errors: {
            user: {
              "msg": "userNotFound",
            }
          }
        })

      const passwordIsValid = bcrypt.compareSync(req.body.oldPassword, userCollection.password);
      if (!passwordIsValid)
        return res.status(422).send({
          errors: {
            oldPassword: {
              "msg": "currentPasswordIsWrong",
              value: req.body.oldPassword
            }
          }
        })


      await userCollection.update({
        password: bcrypt.hashSync(req.body.password, 8),
      });

      res.status(201).send(userCollection);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  async checkResetPasswordCode(req, res) {
    const userCollection = await user.findOne(
      {where: {email: req.body.email, resetPasswordCode: req.body.resetCode}}
    )
    if (userCollection === null)
      return res.status(422).send({msg: "Error in reset password", variant: 'danger'})

    res.status(201).send({msg: "Your email has been confirmed." , variant: 'success'})
  },

  async resetPassword(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const userCollection = await user.findOne(
        {where: {email: req.body.email, resetPasswordCode: req.body.resetCode},}
      )
      if (userCollection === null)
        return res.status(422).send({
          errors: {
            user: {
              "msg": "userNotFound",
            }
          }
        })


      await userCollection.update({
        password: bcrypt.hashSync(req.body.password, 8),
      });

      res.status(201).send(userCollection);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  async loginFunc(userId) {
    try {
      var roles = [];

      const userCollection = await user.findOne(
        {
          where: {id: userId},
          include: [
            {
              model: userRole,
              include: [
                {
                  model: role,
                }
              ]
            }
          ]
        }
      )

      userCollection.UserRoles.forEach(item => {
        roles.push(item.Role.name)
      })

      let token = jwt.genToken({
        id: userCollection.id,
        name: userCollection.name,
        email: userCollection.email,
        emailConfirmed: userCollection.emailConfirmed,
        scope: roles,
        // createTime: Number(Date.now() / 1000)
      })

      return {login: true , token: token}

    } catch (e) {
      return {login: false , token: null}
    }
  },

  async checkActivation(req, res) {

    const userCollection = await user.findOne(
      {
        where: {email: req.body.email, emailConfirmCode: req.body.activeCode},
        include: [
          {
            model: userRole,
            include: [
              {
                model: role,
              }
            ]
          }
        ]
      }
    )
    if (userCollection === null)
      return res.status(422).send({msg: "Error in activation", variant: 'danger'})

    if (userCollection.emailConfirmed)
      return res.status(201).send({msg: "You active your mail before", variant: 'info'})

    await userCollection.update({
      emailConfirmed: true
    })
    let ret = await module.exports.loginFunc(userCollection.id)
    res.status(201).send({msg: "Your email has been confirmed. ", variant: 'success' , token: ret.token})
  },
  async reSendVerificationEmail(req, res) {
    try {
      const userCollection = await user.findOne(
        {where: {id: req.authUser.id},}
      )
      if (userCollection === null)
        return res.status(422).send({
          errors: {
            email: {
              "msg": "this email address not registered",
              value: req.body.email
            }
          }
        })
      const randomString = util.generateRandomString(128)
      await userCollection.update({
        emailConfirmCode: randomString
      })

      // const html = '<b>Hey there! </b><br> This is active url, please click it for active your email.<br/><a href="http://tuteloop.ca/activation?email=' + userCollection.email + '&code=' + randomString + '">Click here</a> '
      var html ='<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
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
        '<p style="font-size: 14px; line-height: 140%;">Thanks for joining TuteLoop! Please use this link to verify yourself and to confirm your email:</p>\n' +
        '<p style="font-size: 14px; line-height: 140%;">&nbsp;</p>\n' +
        '<p style="font-size: 14px; line-height: 140%;"><span style="color: #e67e23; font-size: 14px; line-height: 19.6px;"><a style="color: #e67e23;" rel="noopener" href="http://tuteloop.ca/activation?email=' + encodeURIComponent(userCollection.email) + '&code=' + randomString + '" target="_blank">http://tuteloop.ca/activation?email=' + encodeURIComponent(userCollection.email) + '&code=' + randomString + '</a></span></p>\n' +
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
        '    <a href="http://tuteloop.ca/activation?email=' + encodeURIComponent(userCollection.email) + '&code=' + randomString + '" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #02378e; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">\n' +
        '      <span style="display:block;padding:10px 20px;line-height:120%;"><span style="font-size: 14px; line-height: 16.8px;">Confirm my Email</span></span>\n' +
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

      await mail.sendMail(userCollection.email, 'Welcome to tutor', 'randomString is : ' + randomString, html)

      res.status(201).send(true);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  async forgetPassword(req, res) {

    const userCollection = await user.findOne(
      {where: {email: req.body.email}}
    )
    if (userCollection === null)
      return res.status(422).send({
        errors: {
          email: {
            "msg": "this email address not registered",
            value: req.body.email
          }
        }
      })
    var randomString = util.generateRandomString(128)
    await userCollection.update({
      resetPasswordCode: randomString
    })
    // var html = '<b>Hey there! </b><br>please click it for reset your password.<br/><a href="http://tuteloop.ca/reset-password?email=' + req.body.email + '&code=' + randomString + '">Click here</a> '
    var html ='<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
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
      '<p style="font-size: 14px; line-height: 140%;">Thanks for using TuteLoop! Please use this link to reset your password:</p>\n' +
      '<p style="font-size: 14px; line-height: 140%;">&nbsp;</p>\n' +
      '<p style="font-size: 14px; line-height: 140%;"><span style="color: #e67e23; font-size: 14px; line-height: 19.6px;"><a style="color: #e67e23;" rel="noopener" href="http://tuteloop.ca/reset-password?email=' + encodeURIComponent(req.body.email) + '&code=' + randomString + '" target="_blank">http://tuteloop.ca/reset-password?email=' + encodeURIComponent(req.body.email) + '&code=' + randomString + '</a></span></p>\n' +
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
      '    <a href="http://tuteloop.ca/reset-password?email=' + encodeURIComponent(req.body.email) + '&code=' + randomString +'" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #02378e; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">\n' +
      '      <span style="display:block;padding:10px 20px;line-height:120%;"><span style="font-size: 14px; line-height: 16.8px;">Confirm my Email</span></span>\n' +
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
    await mail.sendMail(req.body.email, 'TuteLoop - Reset Password', 'randomString is : ' + randomString, html)

    res.status(201).send({
      msg: "to change password we send an email to you, please visit your mail box",
      variant: 'success'
    })
  },

  async getTutor(req, res) {
    try {
      let userId = 0
      let tutorId =  req.body.tutorId
      let authUser = jwt.getCurrentUser(req)
      if (authUser != null)
        userId = authUser.id;

      const userCollection = await user.findOne(
        {
          where: {id: req.body.tutorId},
          attributes: ['id', 'name', 'lastName', 'headline', 'bioMore', 'training_method',
            [sequelize.literal(
              "(SELECT avg(`avg_rate`) as avgRate FROM `RateOveralls` WHERE tutorId = User.id and avg_rate > 0)"), 'AvgRate'],],
          include: [
            {
              attributes: ['path', 'userId'],
              model: fileModel,
              required: false,
            },
            {
              model: educations,
              required: false,
            },
            {
              model: tutorTiming,
              required: false,
            },
            {
              model: userLesson,
              required: false,
              attributes: ['id', 'lessonId', 'acceptStatus', 'description', 'price', 'userId', 'year', 'grade',
                [sequelize.literal(
                  " IFNULL((SELECT `avg_rate` FROM `RateOveralls` WHERE tutorId = UserLessons.userId and lessonId =  UserLessons.LessonId ),'')"), 'rate'],
              ],
              include: [
                {
                  model: lesson,
                }
              ]
            },
            {
              model: myLessonModel, as:"TutorMyLessons" ,
              required: false,
              where: {userId: userId , acceptStatus : 1 },
              include: {model: lessonModel, attributes: ["subject", "code"]},
              distinct: true
            }
            ,
          ]
        }
      )
      if (userCollection)
        res.status(201).send(userCollection)
      else
        res.status(400).send('not found')
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  async getTutors(req, res) {
    // try {
      const offset = (req.body.currentPage - 1) * req.body.perPage;
      const limit = req.body.perPage;
      const rangeRate = req.body.rangeRate
      const rangePrice = req.body.rangePrice
      const trainingMethod = req.body.trainingMethod

      let whereTutor = {};
      let whereSubject = {}
      let whereDays = []
      if (req.body.tutorName && req.body.tutorName.trim().length > 0)
        whereTutor = {
          [sequelize.Op.or]:
            [sequelize.where(sequelize.fn('upper', sequelize.col('name')), {
                [sequelize.Op.like]: req.body.tutorName.trim().toUpperCase() + '%'})
              , sequelize.where(sequelize.fn('upper', sequelize.col('lastName')), {
                [sequelize.Op.like]: req.body.tutorName.trim().toUpperCase() + '%'
              })]
        }
      whereTutor.disable = false
      if(trainingMethod && trainingMethod > 0 && trainingMethod < 3)
        whereTutor.training_method = {[sequelize.Op.in]: [trainingMethod,3]}
      else if (trainingMethod === 3)
        whereTutor.training_method = {[sequelize.Op.in]: [1,2,3]}

      if (req.body.subject && req.body.subject > 0)
        whereSubject.lessonId = req.body.subject
      if(rangePrice && rangePrice.length > 0)
      {
        const m1 = rangePrice[0]
        const m2 = rangePrice[1]
        whereSubject.price = {[sequelize.Op.between]: [m1, m2]}
      }

      let rateWhere= {}
      if(rangeRate !== undefined && rangeRate.length > 0)
      {
        const r1 = rangeRate[0]
        const r2 = rangeRate[1]
        let arr = [{avg_rate:{[sequelize.Op.between]: [r1, r2]}},]
        if(r1 === 0)
          arr.push({avg_rate:{[sequelize.Op.is]: null}})
        rateWhere = { [sequelize.Op.or]: arr}
      }

      if (req.body.days) {
        let days = req.body.days
        if (Array.isArray(days)) {
          days.forEach(item => {
            const myArr = item.split("-");
            if (myArr.length === 2) {
              whereDays.push({
                dayOfWeek: myArr[0],
                timeStart: {[sequelize.Op.between]: [myArr[1] * 12, (myArr[1] * 12) + 11]}
              })
            }
          })
        } else {
          const myArr = days.split("-");
          if (myArr.length === 2) {
            //  dayOfWeek: myArr[0] && (timeStart >= myArr[1] * 12 && timeStart < myArr[1] * 12 * 2 )
            whereDays = [{
              dayOfWeek: myArr[0],
              timeStart: {[sequelize.Op.between]: [myArr[1] * 12, (myArr[1] * 12) + 11]}
            }]
          }
        }
      }

      const {count, rows} = await user.findAndCountAll({
        where: whereTutor,
        offset: offset,
        limit: limit,
        distinct: true,

        order: [
          [req.body.sortBy, req.body.sortDesc ? 'DESC' : 'ASC'],
          ['id', 'DESC'],
        ],
        attributes: ['id', 'name', 'lastName', 'headline', 'bioMore', 'training_method',
          [sequelize.literal(
            "(SELECT avg(`avg_rate`) as avgRate FROM `RateOveralls` WHERE tutorId = User.id and avg_rate > 0)"), 'AvgRate'],
          [sequelize.literal(
            "(SELECT GROUP_CONCAT(DISTINCT subject , '-' , IFNULL((SELECT `avg_rate` FROM `RateOveralls` WHERE tutorId = User.id and lessonId = Lessons.id),''),'-',acceptStatus,'-',price SEPARATOR ', ') FROM UserLessons LEFT OUTER JOIN Lessons ON" +
            " UserLessons.lessonId = Lessons.id WHERE UserLessons.userId = User.id)"), 'Subjects'],
          [sequelize.literal("(SELECT GROUP_CONCAT(TutorTimings.dayOfWeek, '-' , TutorTimings.timeStart SEPARATOR ',') " +
            "FROM TutorTimings WHERE TutorTimings.userId = User.id)"), 'Timings']],
        include: [
          {
            attributes: ['path', 'userId'],
            model: fileModel,
            required: false,
          },
          {
            model: educations,
            required: false,
          },
          {
            attributes: [],
            model: tutorTiming,
            required: true,
            where: whereDays.length > 0 ? {[sequelize.Op.or]: whereDays} : true,
          },
          {
            attributes: [],
            model: userLesson,
            required: true,
            where: whereSubject,
          },
          {
            attributes: [],
            model: rateOverallModel,
            where: rateWhere
          },
        ]
      });

      res.status(201).send({rows: rows, totalRows: count});
    // } catch (e) {
    //   console.log(e);
    //   res.status(500).send(e);
    // }

  },

  async changeToTutor(req , res)
  {
    try{
      let userId = req.authUser.id

      let uRoles = await userRole.findAll({
        where:{ userId: userId}
        ,include:{ model: roleModel }
      })
      const role = await roleModel.findOne({where: { name: "tutor"}})
      let tutorFlag = false

      uRoles.forEach((role)=> {
        if (role.Role.name === "tutor")
          tutorFlag = true;
      });
      if(!tutorFlag)
      {
        for (let i = 0; i < uRoles.length; i++) {
          let ur = uRoles[i]
          if (ur.Role.name === "student") {
            // let ru = await userRole.findOne({
            //   where:{ id: userId}
            // })

            await ur.update({roleId: role.id})
          }
        }
        let ret = await module.exports.loginFunc(userId)
        var info = {result: true , token: ret.token}
        res.status(201).send(info);

      }
      else
      {
        res.status(400).send("exist")
      }
    }catch (e) {
      res.status(400).send("error")
    }
  }
}
