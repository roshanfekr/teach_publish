const sequelize = require('sequelize');
const {validationResult} = require('express-validator');
const universityAdminModel = require('../../models').University;

const jwt = require('../../_helpers/jwt')
const bcrypt = require('bcryptjs');

module.exports = {

  async createUniversity(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const name = req.body.name
      const emailPattern = req.body.emailPattern
      const email = req.body.email
      const host = req.body.host

      const findUniversityByemail = await module.exports.findByEmail(email)
      if(findUniversityByemail != null)
        return res.status(422).send("email is reserved")

      let uniCollection = await universityAdminModel
        .create({
          name: name, emailPattern: emailPattern , email : email , host: host
        });
      res.status(201).send(uniCollection);


    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },



  async findByEmail(value) {
    try {
      const uniCollection = await universityAdminModel.findOne(
        {where: {email: value}}
      )
      return uniCollection
    } catch (e) {
      console.log(e);
      return null;
    }



  },


  async deleteUniversity(req, res) {
    try {
      let tutorId = req.authUser.id;
      let uniId = req.body.uniId;

      if(uniId === undefined || uniId === 0)
        return res.status(400).send({ret: null});

      const university = await universityAdminModel.findOne({where: { id: uniId}})
      if(university=== null) {
        return res.status(400).send({ret: null});
      }
      university.destroy()
      return res.status(200).send({ret: null});

    } catch (e) {
      console.log(e);
      return res.status(401).send(0);
    }



  },

  async editUniversity(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      let uni = await universityAdminModel.findOne({where: {id: req.body.id}})
      if (uni === null)
        return res.status(422).send("university_create_error");

      uni.name = req.body.name
      uni.emailPattern = req.body.emailPattern
      uni.email = req.body.email
      uni.isenable = req.body.isenable
      uni.host = req.body.host

      uni.save();
      res.status(200).send(true);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

}
