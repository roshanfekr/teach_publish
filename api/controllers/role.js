const sequelize = require('sequelize');
const role = require('../models').Role;

module.exports = {

  async create(req, res) {
    try {
      const roleName = req.body.name
      const findedRole = await module.exports.findByName(roleName)

      if(findedRole != null)
        return res.status(422).send({
          errors: {
            role: {
              "msg": "roleReserved",
              value: req.body.role
            }
          }
        })

      let roleCollection = await role
        .create({
          name: roleName,
        });
      res.status(201).send(roleCollection);

    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async findByName(name) {
    try {

      const roleCollection = await role.findOne({
        where: {
          name: name
        },
      });
      return roleCollection;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
}
