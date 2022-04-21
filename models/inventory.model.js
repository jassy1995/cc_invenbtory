const Inventory = (sequelize, DataTypes, Sequelize) =>
  sequelize.define("inventory", {
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
    },
    property_code: {
      type: DataTypes.TEXT,
    },
    house_type: {
      type: DataTypes.TEXT,
    },
    is_serviced: {
      type: DataTypes.TEXT,
    },
    cover_image: {
      type: DataTypes.TEXT,
    },
    no_of_rooms: {
      type: DataTypes.INTEGER,
    },
    no_of_toilet: {
      type: DataTypes.INTEGER,
    },
    no_of_bath: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.TEXT,
    },
    state: {
      type: DataTypes.TEXT,
    },
    lga: {
      type: DataTypes.TEXT,
    },
    country: {
      type: DataTypes.TEXT,
    },
    area: {
      type: DataTypes.TEXT,
    },
    landmark: {
      type: DataTypes.TEXT,
    },
    pictures: {
      type: DataTypes.TEXT,
    },
    monthly_rate: {
      type: DataTypes.TEXT,
    },
    security_deposit: {
      type: DataTypes.TEXT,
    },
    service_charge: {
      type: DataTypes.TEXT,
    },
    shelf: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    marketplace: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    occupied: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

module.exports = Inventory;
