import db from "../../models";
import {QueryTypes} from "sequelize";
import util from "../../_helpers/util";
import mail from "../../_helpers/mail";
import RequestTypeEnum from "../../_helpers/enums";

const { Op } = require("sequelize");
const {validationResult} = require('express-validator');
const user = require('../../models').User;
const userRole = require('../../models').UserRole;
const roleModle = require('../../models').Role;
const sequelize = require('../../models/index');
const requestService = require('../../_helpers/requestService');


module.exports = {

  async getParameters(req) {

    const DateTypeEnum = Object.freeze({
      TODAY: "t",
      WEEK: "w",
      WEEKLY: "wl",
      MONTH: "m",
      MONTHLY: "ml",
      YEARLY: "yl",
      NONE: "n"
    });

    const UserTypeEnum = Object.freeze({
      GUEST: "guest",
      Student: "student",
      TUTOR: "tutor",
      ADMIN: "admin",
      NONE: "n"
    });

    let userId = req.body.userId;
    let dateType = req.body.dateType;
    let userType = "";
    if(userId == null)
      userId = 0;

    switch (dateType) {
      case "week":
        dateType = DateTypeEnum.WEEK
        break;
      case "weekly":
        dateType = DateTypeEnum.WEEKLY
        break;
      case "month":
        dateType = DateTypeEnum.MONTH
        break;
      case "monthly":
        dateType = DateTypeEnum.MONTHLY
        break;
      case "yearly":
        dateType = DateTypeEnum.YEARLY
        break;
      default:
        dateType = DateTypeEnum.NONE
        break;
    }
    switch (req.body.userType) {
      case "student":
        userType = UserTypeEnum.Student
        break;
      case "tutor":
        userType = UserTypeEnum.TUTOR
        break;
      case "admin":
        userType = UserTypeEnum.ADMIN
        break;
      case "guest":
        userType = UserTypeEnum.GUEST
        break;
      default:
        userType = UserTypeEnum.ALL
        break;
    }

    return {dateType: dateType , userId: userId , userType: userType}
  },

  async requestForTakeCount(req, res) {
    try {

      const ReqTypeEnum = Object.freeze({
        MESSAGE: 0,
        REQUEST_FOR_TAKE: 1,
        ACCEPTED: 2,
        REJECTED: 3,
      });

      let params = await module.exports.getParameters(req);
      let userId = params.userId;
      let dateType = params.dateType;

      let req_for_takeResult = await requestService.getRequestCount(0, dateType, ReqTypeEnum.REQUEST_FOR_TAKE)
      res.status(200).send(req_for_takeResult);

    }catch (e) {
      res.status(450).send({err: true , error: e});
    }

  },


  async acceptedRequestCount(req, res) {


    const ReqTypeEnum = Object.freeze({
      MESSAGE: 0,
      REQUEST_FOR_TAKE: 1,
      ACCEPTED: 2,
      REJECTED: 3,
    });


    try {
      let params = await module.exports.getParameters(req);
      let userId = params.userId;
      let dateType = params.dateType;

      let req_acceptedResult = await requestService.getRequestCount(0, dateType, ReqTypeEnum.ACCEPTED)
      res.status(200).send(req_acceptedResult);

    }catch (e) {
      res.status(450).send({err: true ,error: e});
    }

  },

  async rejectedRequestCount(req, res) {



    const ReqTypeEnum = Object.freeze({
      MESSAGE: 0,
      REQUEST_FOR_TAKE: 1,
      ACCEPTED: 2,
      REJECTED: 3,
    });


    try {
      let params = await  module.exports.getParameters(req);
      let userId = params.userId;
      let dateType = params.dateType;

      let req_rejectedResult =await requestService.getRequestCount(0 , dateType , ReqTypeEnum.REJECTED)
      res.status(200).send(req_rejectedResult);

    }catch (e) {
      res.status(450).send({error: e});
    }

  },

  async getUserReport(req, res) {
    try {
      let params = await  module.exports.getParameters(req);
      let dateType = params.dateType;
      let userType = params.userType;

      let reportResult =await requestService.getUserReport( dateType , userType)
      res.status(200).send(reportResult);

    }catch (e) {
      res.status(450).send({error: e});
    }

  }

}
