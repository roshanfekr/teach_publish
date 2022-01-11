const sequelize = require('sequelize');
const message = require('../models').Message;

module.exports = {

    async create(req, res) {
        try {
            const messageCollection = await message
            .create({
                name:  req.body.name ,
                subject: req.body.subject ,
                email:  req.body.email ,
                msg: req.body.msg
            });

            res.status(201).send(messageCollection);
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
            if (req.body.search.name.trim().length > 0)
                where.name = {[sequelize.Op.like]: '%' + req.body.search.name.trim() + '%'}
            if (req.body.search.tel.trim().length > 0)
                where.tel = {[sequelize.Op.like]: '%' + req.body.search.tel.trim() + '%'}
            if (req.body.search.email.trim().length > 0)
                where.email = {[sequelize.Op.like]: '%' + req.body.search.email.trim() + '%'}

            const {count, rows} = await message.findAndCountAll({
                where: where,
                offset: offset,
                limit: limit,
                order: [
                    [req.body.sortBy, req.body.sortDesc ? 'DESC' : 'ASC'],
                    ['id', 'DESC'],
                ],
            });

            res.status(201).send({rows: rows, total: count});
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }

    },

}
