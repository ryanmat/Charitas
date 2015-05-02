"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email_address: DataTypes.STRING,
    password_digest: DataTypes.STRING
  }, {
    underscored: true,

    classMethods: {
      associate: function(models) {

      }
    }
  });
  return users;
};