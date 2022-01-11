const sequelize = require('sequelize');
const {validationResult} = require('express-validator');
const user = require('../models').User;
const roleController = require('../controllers/role');
const jwt = require('../_helpers/jwt')
const bcrypt = require('bcryptjs');
const path = require("path");
const download = require("download");
module.exports = {

  async upload(req, res) {
    try {
      var gg = req.file
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }

  },

  async download(req, res) {
    try {
      let userId = req.authUser.id;
      let fileId = req.params.fileId;
      const fileModel = require('../models').File;

      const fileItem = await fileModel.findAll(
        {where: {userId: userId, id: fileId}})

      if (fileItem != null && fileItem.length > 0) {

        const file = path.basename(fileItem[0].path);
        res.setHeader('filename', file)

        let filePath = fileItem[0].path
        if(fileItem[0].path.substr(0 , 4) !== "api/")
          filePath = "api/" +  fileItem[0].path;
        res.download(filePath, function(err){
          if(err) {
            // Check if headers have been sent
            if(res.headersSent) {
              // You may want to log something here or do something else
            } else {
              return res.sendStatus(404); // 404, maybe 500 depending on err
            }
          }});


      }
    } catch (e) {
      console.log(e)
    }
  },


}
