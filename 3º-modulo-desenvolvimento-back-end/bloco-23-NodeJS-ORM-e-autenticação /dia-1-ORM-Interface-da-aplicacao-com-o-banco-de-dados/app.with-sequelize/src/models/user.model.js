const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });

  return User;
};

module.exports = UserModel;