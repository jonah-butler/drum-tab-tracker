module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('User', {
    title: {
      type: DataTypes.STRING,
    },
    artist: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    album: {
      type: DataTypes.STRING,
    },
    albumImage: {
      type: DataTypes.STRING
    },
    youtubeId: {
      type: DataTypes.STRING,
    },
    tab: {
      type: DataTypes.TEXT,
    },
  })

  return Song;
}
