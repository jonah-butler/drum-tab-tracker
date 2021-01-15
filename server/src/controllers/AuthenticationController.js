const {User} = require('../models');

module.exports = {
  async register(req, res) {
    try{
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
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if(!user) {
        return res.status(403).send({
          error: 'The login info was incorrect',
        })
      }

      // const ifPasswordValid = password = user.password;
      if(password != user.password) {
        return res.status(403).send({
          error: 'The login info was incorrect',
        })
      }
      const userJson = user.toJSON();
      res.send({
        user: userJson,
      });
    } catch(err) {
      res.send({
        error: 'Invalid login'
      })
    }
  }
}
