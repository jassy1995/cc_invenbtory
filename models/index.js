const { Sequelize, DataTypes, Op } = require("sequelize");
const dbConfig = require("../config/db.config");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  logging: false,

  pool: {
    ...dbConfig.pool,
  },
});

const Author = require("./author.model")(sequelize, DataTypes, Sequelize);
const Inventory = require("./inventory.model")(sequelize, DataTypes, Sequelize);
const Request = require("./request.model")(sequelize, DataTypes, Sequelize);

module.exports = {
  Author,
  Inventory,
  Request,
  sequelize,
  Sequelize,
  Op,
  DataTypes,
};
