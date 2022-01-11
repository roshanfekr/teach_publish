const sequelize = require('sequelize');
const {validationResult} = require('express-validator');
const user = require('../models').User;
const path = require('path')
const fs = require('fs')
const download = require('download');
const fileModel = require('../models').File;
const educations = require('../models').Educations;

module.exports = {

  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      const userId = req.authUser.id;
      const university = req.body.university
      const department = req.body.department
      const levelEducation = req.body.levelEducation
      const startYear = req.body.startYear
      const endYear = req.body.endYear
      const acceptStatus = 0
      let certFile = null
      if(req.file!==null && req.file !==undefined) {
        var tempPath = req.file.path
        let dir = 'api/sec-storage/tutor/' + req.authUser.id
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        var newPath = dir + "/" + "educ_" + req.file.filename

        fs.rename(tempPath, newPath, function (err) {
          if (err) throw err
        })

        certFile = await fileModel
          .create({
            path: newPath ,
            ext: path.extname(req.file.filename),
            userId: userId
          })

      }

      await educations.create({
          userId: userId,
          university: university,
          department: department,
          levelEducation: levelEducation,
          startYear: startYear ,
          endYear: endYear ,
          acceptStatus: acceptStatus, fileId :(certFile!== null ? certFile.id : 0)});

      const educ = await educations.findAll({where: {userId: req.authUser.id}})
      res.status(200).send(educ)

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async list(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const educ = await educations.findAll({where: {userId: req.authUser.id}})
      res.status(200).send(educ);
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
      let educId = req.body.educId;

      const educ = await educations.findOne( {where: {userId: userId , id: educId} })

      if(educ !=null)
      {
        await educ.destroy();
        res.status(200).send({ result: true});
      }
      else
      {
        res.status(422).send({ errors: {
            lesson: {
              "msg": "educ_not_found",
              value: null
            }
          }});
      }
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  async accept(req, res)
  {

  },

  async reject(req, res)
  {

  }


}
