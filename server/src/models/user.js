module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: 'email',
    },
    password: DataTypes.STRING,
  })
