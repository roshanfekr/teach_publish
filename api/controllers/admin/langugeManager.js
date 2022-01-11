const sequelize = require('sequelize');
const {validationResult} = require("express-validator");
const fs = require("fs");
const path = require("path");
const languageModel = require('../../models').Language;
// const filePath = "C:\\Users\\Mahdi\\Desktop\\wg\\app\\source\\.nuxt\\dist\\server\\lang-en-US.js.js";//path.join(__dirname, 'start.html');
const filePath = process.env.En_File_Path
module.exports = {

  async readFiles(req, res) {
    try {

      fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
          console.log('received data: ' + data);
          const strStart = "__webpack_exports__[\"default\"] = ("
          const start = data.indexOf(strStart)
          const end = data.indexOf(");",start)
          const json = data.substring(start + strStart.length , end)
          console.log(json)
          var jobj = JSON.parse( json );
          Object.keys(jobj).forEach(async function(k){
            const languageCollection = await languageModel.findOne(
              {
                where: {key: k},
              }
            )
            if(languageCollection){
              // languageCollection.update({
              //   value: jobj[k],
              // });
            }else{
              languageModel.create(
                {
                  key: k,
                  value:jobj[k]
                }
              )
            }

          });

        } else {
          console.log(err);
        }
      });
      res.status(200).send();
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  async saveAndReload(req, res) {
    try {

      fs.readFile(filePath, {encoding: 'utf-8'}, async function (err, data) {
        if (!err) {
          console.log('received data: ' + data);
          const strStart = "__webpack_exports__[\"default\"] = ("
          const start = data.indexOf(strStart)
          const end = data.indexOf(");", start)
          const json = data.substring(start + strStart.length, end)
          console.log(json)

          const lanCollection = await languageModel.findAll({
            attributes: ['key', 'value'],
          });
            var arr = {};
            lanCollection.forEach( item  => {
              let k = item.key
              let v = item.value
              arr[k] = v
            })
          const newjson = JSON.stringify(arr)
          const finalJson = data.substring(0,start + strStart.length) + newjson + data.substring(end)

          fs.writeFile(filePath, finalJson, (err) => {
              if (err) throw err;
            }
          )

        } else {
          console.log(err);
        }
      });
      res.status(200).send();
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
  async getAll(req, res) {
    try {
      const languageCollection = await languageModel.findAll()

      res.status(200).send(languageCollection);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
  async saveLanguage(req, res) {
    try {

      const languageCollection = await languageModel.findOne(
        {
          where: {id: req.body.id},
        }
      )
      if(languageCollection){
        languageCollection.update({
          value: req.body.value,
        });
      }
      res.status(200).send(languageCollection);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
}
