const sequelize = require('sequelize');
const {validationResult} = require('express-validator');
const user = require('../models').User;
const path = require('path')
const fs = require('fs')
const download = require('download');
const fileModel = require('../models').File;
const certModel = require('../models').Certificate;

module.exports = {

  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      var tempPath = req.file.path
      let dir = 'api/sec-storage/tutor/' + req.authUser.id
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      var newPath = dir + "/" +  "cert_" + req.file.filename

      fs.rename(tempPath, newPath, function (err) {
        if (err) throw err
      })


      const userId = req.authUser.id;
      const certName = req.body.certName
      const description = req.body.description
      const startYear = req.body.startYear
      const endYear = req.body.endYear
      const issuedby = req.body.issuedby
      const acceptStatus = 0


      let certFile = await fileModel
        .create({
          path: newPath ,
          ext: path.extname(req.file.filename),
          userId: userId
        })

      await certModel
        .create({
          userId: userId,
          certName: certName,
          description: description,
          startYear: startYear ,
          endYear: endYear ,
          issuedby: issuedby,
          acceptStatus: acceptStatus,
          fileId: certFile.id,
        });

      const certs = await certModel.findAll({where: {userId: req.authUser.id}})
      res.status(200).send(certs)

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async certList(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const certs = await certModel.findAll({where: {userId: req.authUser.id}})
      res.status(200).send(certs);
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
      let certId = req.body.certId;

      const cert = await certModel.findOne( {where: {userId: userId , id: certId} })

      if(cert !=null)
      {
        await cert.destroy();
        res.status(200).send({ result: true});
      }
      else
      {
        res.status(422).send({ errors: {
            lesson: {
              "msg": "cert_not_found",
              value: null
            }
          }});
      }
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },



}
