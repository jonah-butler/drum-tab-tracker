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
  async post(req, res) {
    try {
      // console.log(Song);
      //
      // const newSong = {
      //   title: 'So What1',
      //   artist: 'Miles Davis',
      //   genre: 'Jazz',
      //   album: 'Kind of Blue',
      //   albumImage: 'https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg',
      //   youtubeId: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ylXk1LBvIqU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      //   tab: 'Some drum tab will go here',
      // };

      const song = await Song.create(req.body);
      res.send(song);
    } catch(err) {
        console.log('song post', err);
    }
  }
}
