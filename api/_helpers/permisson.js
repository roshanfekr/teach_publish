const sequelize = require('sequelize');
const {validationResult} = require('express-validator');
const user = require('../models').User;
const userRole = require('../models').UserRole;
const role = require('../models').Role;
const certificate = require('../models').Certificate;
const roleController = require('../controllers/role');
const jwtHelper = require('../_helpers/jwt')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const util = require("../_helpers/util");

module.exports = {

  async getRoles(req, res) {
    try {
      let token = req.headers['authorization']
      let authUser = jwt.decode(token)
      let userId = authUser.id;
      let userCollection = await user.findAll({
        where: {id: userId},
        include: {model: userRole , include:{ model: role} }
      })
      let roles = []
      userCollection.forEach(item => {
        item.UserRoles.forEach(role => {
          roles.push(role.Role.name)
        })

      })
      return res.status(200).send({roles: roles})
    } catch (e) {
      return res.status(422).send({permission: false})

    }

  },

  async hasPermission (req, res) {
    try {
      let token = req.headers['authorization']
      let authUser = jwt.decode(token)
      let userId = authUser.id;

      let permission = req.body.permission;
      let userCollection = await user.findAll({
        where: {id: userId},
        include: { model: userRole ,  include: {model: role}}
      })
      let roles = []
      userCollection.forEach(item => {
        item.UserRoles.forEach(role => {
          roles.push(role.Role.name)
        })

      })
      if (roles.indexOf(permission) !== -1) {
        return res.status(200).send({permission: true})
      } else if (roles.indexOf("admin") !== -1) {
        return res.status(200).send({permission: true})
      }
      return res.status(422).send({permission: false})
    } catch (e) {
      return res.status(422).send({permission: false})

    }
  },
}
