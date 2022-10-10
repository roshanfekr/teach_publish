const sequelize = require('sequelize');
const {validationResult} = require('express-validator');
const user = require('../models').User;
const universityModel = require('../models').University;
const roleController = require('../controllers/role');

const jwt = require('../_helpers/jwt')
const bcrypt = require('bcryptjs');

module.exports = {

  async getUserUniversity(req, res) {
    try {
      let userId = req.authUser.id;
      let email = req.authUser.email;
      let email_host = email.split('@')[1]

      var activeUser = await user.findOne( {where: {id:userId}})

      const uni = await universityModel.findOne( {where: {id: activeUser.universityId}})

      return res.status(200).send({ret: uni});

    } catch (e) {
      console.log(e);
      return res.status(401).send(0);
    }



  },


}
