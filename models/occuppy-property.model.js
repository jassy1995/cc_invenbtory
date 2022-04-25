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
    monthly_rate: {
      type: DataTypes.TEXT,
    },
    start_date: {
      type: DataTypes.TEXT,
    },
    end_date: {
      type: DataTypes.TEXT,
    },
    end_date: {
      type: DataTypes.TEXT,
    },
    duration: {
      type: DataTypes.TEXT,
    },
  });

module.exports = Request;
