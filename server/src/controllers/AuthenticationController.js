const {User} = require('../models');
const jwt = require('jsonwebtoken');
// const config = require('../config/config');

// async function jwtSignUser(user) {
//   return jwt.sign(user, config.authentication.jwtSecret);
// }
// console.log(jwt);
// console.log(config);
// console.log(jwtSignUser({user: 'test'}));

module.exports = {
  async register(req, res) {
    try{
      console.log(User);
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch(err) {
      res.send({
        error: 'This email is already in use'
      })
    }
  },
  async login(req, res) {
    try{
      const {email, password} = req.body;
      console.log(email, password);
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      console.log(user);
      if(!user) {
        return res.status(403).send({
          error: 'The login info was incorrect',
        })
      }

      // console.log(jwtSignUser(userJson));
      const isPasswordValid = await user.comparePassword(password);
      if(!isPasswordValid) {
        return res.status(403).send({
          error: 'The login info was incorrect',
        })
      }
      const userJson = user.toJSON();
      const token = jwt.sign(userJson, 'secret');
      // console.log(token);
      res.send({
        user: userJson,
        token: token,
      });
    } catch(err) {
      res.send({
        error: err,
      })
    }
  }
}
