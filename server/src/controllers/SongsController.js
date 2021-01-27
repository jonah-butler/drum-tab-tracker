const {Song} = require('../models');

module.exports = {
  async index(req, res) {
    try {
      const songs = await Song.findAll({
        limit: 5,
      });
      res.send(songs);
    } catch(err) {
      res.send({
        error: 'an error occurred while fetching songs',
      });
    }
  },
  async post(req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch(err) {
        console.log('song post', err);
    }
  },
  async show(req, res) {
    try {
      const song = await Song.findByPk(req.params.songId);
      res.send(song);
    } catch(err) {
      res.send({
        error: 'an error occurred while fetching song',
      });
    }
  },
}
