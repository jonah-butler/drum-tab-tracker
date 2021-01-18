const {Song} = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      });
      res.send(songs);
    } catch(err) {
      res.send({
        error: 'an error occurred while fetching songs',
      });
    }
  },
  async post(res, req) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch(err) {
        console.log('song post', err);
    }
  }
}
