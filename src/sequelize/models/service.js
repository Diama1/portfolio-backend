module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
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
    },
  }, {});
  Service.associate = () => {
    // associations can be defined here
  };
  return Service;
};
