"use strict";

module.exports = function (sequelize, DataTypes) {
  var Service = sequelize.define('Service', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});

  Service.associate = function () {// associations can be defined here
  };

  return Service;
};
//# sourceMappingURL=service.js.map