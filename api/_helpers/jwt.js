const jwt = require('jsonwebtoken')
const sequelize = require('sequelize');
const {User: user, UserBlackList: userBlackList} = require("../models");

module.exports = {
  checkAuth(req, res, next) {
    let token = req.headers['authorization']
    jwt.verify(token, process.env.SECRET_KEY, async function (err, decoded) {
      if (err) {
        return res.status(404).send(err);
      }

      // if (decoded.scope.length == 1) {
      //   if (decoded.scope[0] == "guest")
      //     return res.status(477).send({type: "Guest"});
      // }

      req.authUser = decoded; //jwt.decode(token)
      const userBlack = await userBlackList.findOne({where: {userId: Number(req.authUser.id)}})

      if (req.url !== '/user/refreshLogin' && userBlack && userBlack.savedTime >= req.authUser.iat) {
        return res.status(477).send({type: userBlack.type});
      } else {
        next()
      }
    })
  },

  getCurrentUser(req) {
    try {
      let token = req.headers['authorization']
      let data = jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        if (err) {
          return null;
        }
        return jwt.decode(token)
      })
      return data;
    } catch (e) {
      return null;
    }

  },

  hasRole(role) {
    return function (req, res, next) {
      if (req.authUser.scope.indexOf(role) === -1)
        return res.status(404).send("permission denied")
      else next();
    }
  },
  genToken(param) {
    return jwt.sign(param, process.env.SECRET_KEY, {
      expiresIn: "7d"
    })
  },
  decodeToken(token){
    let decode = jwt.verify(token, process.env.SECRET_KEY)
    return decode
  }
}
