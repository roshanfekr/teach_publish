const sequelize = require('sequelize');
const {validationResult} = require('express-validator');
const user = require('../models').User;
const universityModel = require('../models').University;
const roleController = require('../controllers/role');

const jwt = require('../_helpers/jwt')
const bcrypt = require('bcryptjs');

module.exports = {

  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      //   name: DataTypes.STRING,
      //   emailPattern: DataTypes.STRING,
      //   email: DataTypes.STRING,
      //   isenable: DataTypes.BOOLEAN
      const name = req.body.name
      const emailPattern = req.body.emailPattern
      const email = req.body.email

      const findUniversityByemail = await module.exports.findByEmail(email)
      if(findUniversityByemail != null)
        return res.status(422).send("email is reserved")

      let uniCollection = await universityModel
        .create({
          name: name, emailPattern: emailPattern , email : email
        });
      res.status(201).send(uniCollection);


    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },



  async findByEmail(value) {
    try {
      const uniCollection = await universityModel.findOne(
        {where: {email: value}}
      )
      return uniCollection
    } catch (e) {
      console.log(e);
      return null;
    }



  }


}
