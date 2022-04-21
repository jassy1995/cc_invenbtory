const Request = (sequelize, DataTypes, Sequelize) =>
  sequelize.define("request", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    property_id: {
      type: DataTypes.INTEGER,
    },

    request_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
    },
    phone: {
      type: DataTypes.TEXT,
    },
  });

module.exports = Request;
