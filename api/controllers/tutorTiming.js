const sequelize = require('sequelize');
const {validationResult} = require('express-validator');
const user = require('../models').User;
const tutorTiming = require('../models').TutorTiming;

const roleController = require('../controllers/role');
const {UserLesson: userLesson} = require("../models");

module.exports = {
  async getTiming(req, res) {
    try {
      const userId = req.authUser.id
      const tutorTimingsFinded = await tutorTiming.findAll({
        where: {
          userId: userId,
        }
      })
      res.status(200).send(tutorTimingsFinded);
    } catch
      (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  async saveTiming(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send({errors: errors.mapped()});
      }
      const userId = req.authUser.id
      const timeStart = req.body.start
      const timeEnd = req.body.start + 2
      const dayOfWeek = req.body.day
      const tutorTimingFinded = await tutorTiming.findOne({
        where: {
          userId: userId,
          timeStart: timeStart,
          timeEnd: timeEnd,
          dayOfWeek: dayOfWeek
        }
      })
      if (req.body.checked) {
        if (tutorTimingFinded != null)
          await tutorTimingFinded.destroy();
      } else {
        if (tutorTimingFinded === null)
          await tutorTiming
            .create({
              userId: userId,
              timeStart: timeStart,
              timeEnd: timeEnd,
              dayOfWeek: dayOfWeek
            });
      }
      res.status(200).send("ok");
    } catch
      (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },
  async getTimingCount(req, res) {
    try {
      let userId = req.authUser.id
      const count = await tutorTiming.count({where: { userId: userId }})
      return res.status(200).send({c: count});
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  }

}
