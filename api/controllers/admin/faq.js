const sequelize = require('sequelize');
const {validationResult} = require("express-validator");
const fs = require("fs");
const path = require("path");
const faqModel = require('../../models').FAQ;

module.exports = {

    async create(req, res) {
        try {
          let faqCollection = null
          if (req.body.id > 0) {
            faqCollection = await faqModel.findOne(
              {
                where:
                  {
                    id: req.body.id,
                  }
              }
            )
            if (!faqCollection) {
              res.status(402).send("Article not found");
              return
            }

            let vals = {
              question:  req.body.question ,
              answer:  req.body.answer ,
              sortNumber: Number(req.body.sortNumber) ,
              isEnable: req.body.isEnable
            };


            await faqCollection.update(vals);

          } else {

             faqCollection = await faqModel
              .create({
                question:  req.body.question ,
                answer:  req.body.answer ,
                sortNumber: Number(req.body.sortNumber) ,
                isEnable: req.body.isEnable
              });

           }
          res.status(201).send(faqCollection);

        }
        catch (e) {
            console.log(e);
            res.status(400).send(e);
        }
    },

  async getAll(req, res) {

    try {
      const offset = (req.body.currentPage - 1) * req.body.perPage;
      const limit = req.body.perPage;

      let where = {}
      if (req.body.search.question.trim().length > 0)
        where.name = {[sequelize.Op.like]: '%' + req.body.search.name.trim() + '%'}


      const {count, rows} = await faqModel.findAndCountAll({
        where: where,
        offset: offset,
        limit: limit,
        order: [
          ['sortNumber', 'DESC'],
        ],
      });

      res.status(201).send({rows: rows, total: count});
    }
    catch (e) {
      console.log(e);
      res.status(500).send(e);
    }

  },
  async getAllEnabled(req, res) {

    try {

      let where = {}
      where.isEnable = true
      if (req.body.search.question.trim().length > 0)
        where.name = {[sequelize.Op.like]: '%' + req.body.search.name.trim() + '%'}


      const {count, rows} = await faqModel.findAndCountAll({
        where: where,
        order: [
          ['sortNumber', 'DESC'],
        ],
      });

      res.status(201).send({rows: rows, total: count});
    }
    catch (e) {
      console.log(e);
      res.status(500).send(e);
    }

  },

  async deleteFaq(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let faqId = req.body.id;

      const faqFinded = await faqModel.findOne( {where: {id: faqId} })

      if(faqFinded !=null)
      {
        await faqFinded.destroy();
        res.status(200).send({ result: true});
      }
      else
      {
        res.status(422).send({ errors: {
            lesson: {
              "msg": "faq_not_found",
              value: null
            }
          }});
      }
    }
    catch (e) {
      console.log(e);
      res.status(500).send(e);
    }

  },
  async getFaqById(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }

      let faqId = req.body.id;

      const faqFinded = await faqModel.findOne( {where: {id: faqId} })

      if(faqFinded !=null)
      {
        res.status(200).send(faqFinded);
      }
      else {
        res.status(422).send({
          errors: {
            lesson: {
              "msg": "faq_not_found",
              value: null
            }
          }
        });
      }
    }
    catch (e) {
      console.log(e);
      res.status(500).send(e);
    }

  },

}
