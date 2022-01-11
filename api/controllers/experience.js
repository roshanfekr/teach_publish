const sequelize = require('sequelize');
const {validationResult} = require('express-validator');
const user = require('../models').User;
const path = require('path')
const fs = require('fs')
const download = require('download');
const expeModel = require('../models').Experience;

module.exports = {

  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }



      const userId = req.authUser.id;
      const company = req.body.company
      const position = req.body.position
      const startYear = req.body.startYear
      const endYear = req.body.endYear
      const acceptStatus = 0

      await expeModel
        .create({
          userId: userId,
          company: company,
          position: position,
          startYear: startYear ,
          endYear: endYear ,
          acceptStatus: acceptStatus,
        });

      const expe = await expeModel.findAll({where: {userId: req.authUser.id}})
      res.status(200).send(expe)

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
      const expe = await expeModel.findAll({where: {userId: req.authUser.id}})
      res.status(200).send(expe);
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
      let expeId = req.body.expeId;

      const expe = await expeModel.findOne( {where: {userId: userId , id: expeId} })

      if(expe !=null)
      {
        await expe.destroy();
        res.status(200).send({ result: true});
      }
      else
      {
        res.status(422).send({ errors: {
            lesson: {
              "msg": "exper_not_found",
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
