'use strict';
module.exports = (sequelize, DataTypes) => {
  const services = sequelize.define('services', {
    title: DataTypes.STRING
  }, {});
  services.associate = function(models) {
    // associations can be defined here
  };
  return services;
};