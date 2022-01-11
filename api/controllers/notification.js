import {QueryTypes} from "sequelize";
import db from "../models";
const  sequelize = require("sequelize");
const {validationResult} = require('express-validator');
const user = require('../models').User;
const userRole = require('../models').UserRole;
const notifModel = require('../models').Notification;
const userNotifModel = require('../models').UserNotification;
const mail = require('../_helpers/mail')


module.exports = {

    async getAdminAllNotification(req, res) {
        try {
            let userId = req.authUser.id
            if (userId === null || userId === undefined)
                return res.status(422).send({error: "erorr"});

            const {count, rows} = await notifModel.findAndCountAll({
                where: {userId: userId},
                include: {model: userNotifModel, attributes: ['id', 'userId', 'view', 'viewDate', 'updatedAt']},
                order: [['viewDate', 'ASC']]
            })
            let result = {
                count: count,
                rows: rows // [{msg:""  , dateTime: "18:20..." , important:"true|false"}]
            }

            res.status(200).send(result);

        } catch (e) {
            console.log(e)
            res.status(401).send("error");
        }
    },

    async getUserNotification(req, res) {
        try {
            let userId = req.authUser.id
            if (userId === null || userId === undefined)
                return res.status(422).send({error: "erorr"});

            const {count, rows} = await notifModel.findAndCountAll({
                where: {userId: userId},
                include: {model: userNotifModel, attributes: ['id', 'userId', 'view', 'viewDate', 'updatedAt']},
                order: [['viewDate', 'ASC']]
            })
            let result = {
                count: count,
                rows: rows // [{msg:""  , dateTime: "18:20..." , important:"true|false"}]
            }

            res.status(200).send(result);

        } catch (e) {
            console.log(e)
            res.status(401).send("error");
        }
    },

    async getAllNotification(req, res) {
        try {
            let userId = req.authUser.id
            if (userId === null || userId === undefined)
                return res.status(422).send({error: "erorr"});

            const {count, rows} = await userNotifModel.findAndCountAll({
                where: {userId: userId},
                include: {model: notifModel, attributes: ['id', 'title', 'level', 'createdAt', 'updatedAt']},
                order: [['viewDate', 'ASC']]
            })
            let result = {
                count: count,
                rows: rows // [{msg:""  , dateTime: "18:20..." , important:"true|false"}]
            }


            res.status(200).send(result);

        } catch (e) {
            console.log(e)
            res.status(401).send("error");
        }
    },

    async getNotificationDetail(req, res) {
        try {
            let userId = req.authUser.id
            let notifId = req.body.Id

            if (userId === null || userId === undefined)
                return res.status(422).send({error: "erorr"});

            if (notifId === null || notifId === undefined || notifId <= 0)
                return res.status(422).send({error: "erorr"});

            const exist = await userNotifModel.findOne({
                where: {userId: userId, id: notifId},
                include: {model: notifModel, attributes: ['id', 'title', 'text', 'level', 'createdAt', 'updatedAt']},
            })

            if (exist === null)
                return res.status(422).send({error: "not_exist_erorr"});
            let date_ob = new Date();

            exist.view = true
            exist.viewDate = date_ob.getDate();
            exist.save()

            res.status(200).send({ok: true, data: exist});

        } catch (e) {
            console.log(e)
            res.status(401).send("error");
        }
    },

    async createNotification(req, res) {
        try {
            let userId = req.authUser.id
            let title = req.body.title
            let text = req.body.text
            let level = req.body.level
            let users = req.body.users
            let send_to_all = req.body.sendAll
            let sendEmail = req.body.sendEmail

            if (send_to_all === undefined || send_to_all === null)
                if (users === undefined || users === null)
                    return res.status(422).send({error: "receiver_not_found_erorr"});

            if (userId === null || userId === undefined)
                return res.status(422).send({error: "erorr"});

            const notification = await notifModel.create({level: level, text: text, title: title})

            if (send_to_all === true) {

                const users = await user.findAll()

                const transaction = await db.sequelize.transaction();
                try {
                    for (let i = 0; i < users.length; i++) {
                        let u = users[i]
                        await userNotifModel.create({notificationId: notification.id, userId: u.id, viewed: false}
                            , {transaction: transaction})
                    }
                    await transaction.commit()
                } catch (e) {
                    await transaction.rollback()
                    return res.status(401).send("rollback_error1");
                }

            } else {


                const transaction = await db.sequelize.transaction();
                try {
                    for (let i = 0; i < users.length; i++) {
                        let uid = users[i]
                        await userNotifModel.create({notificationId: notification.id, userId: uid, viewed: false}
                            , {transaction: transaction})
                    }
                    await transaction.commit()
                } catch (e) {
                    await transaction.rollback()
                    return res.status(401).send("rollback_error2");

                }

            }

            //TODO  send email
            if (sendEmail) {

            }

            return res.status(200).send(result);

        } catch (e) {
            console.log(e)
            return res.status(401).send("rollback_error3");
        }
    },
}
