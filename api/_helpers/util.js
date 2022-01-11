const jwt = require("jsonwebtoken");
const {UserBlackList: userBlackList} = require("../models");
const axios = require("axios");
module.exports = {
  generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
  ,
  captcha(req, res, next) {
    let data = {success: false, hostname: "", score: 0.0, action: "", error: ""}

    let token = req.body.token
    const SECRET_KEY = "6LcLqf4cAAAAAE0yQbqe926nPx_Nt2p_hi-9QcjP"
    axios.get("https://www.google.com/recaptcha/api/siteverify?secret=" + SECRET_KEY + "&response=" + token)
      .then(function (response) {
        // handle success
        data = (response.data);
        if (data.success)
          next()
        else
          res.status(444).send("captcha")
      })
      .catch(function (error) {
        // handle error
        res.status(444).send("captcha")
      })


  }
}
