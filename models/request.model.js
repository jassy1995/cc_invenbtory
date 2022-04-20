const Request = (sequelize, DataTypes, Sequelize) =>
  sequelize.define("request", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
    },

    description: {
      type: DataTypes.TEXT,
      validate: {
        len: [7, 16],
      },
    },
    product: {
      type: DataTypes.TEXT,
    },
  });

module.exports = Request;
