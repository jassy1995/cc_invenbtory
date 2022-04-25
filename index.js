const express = require("express");
const winston = require("./loggers");
const app = express();
const { Author, Inventory, OccupyProperty } = require("./models");

//========= One To One =========
// Salary.hasOne(Employee, {
//   foreignKey: "salary_id",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// Employee.belongsTo(Salary, {
//   foreignKey: "employee_id",
//   targetKey: "id",
//   onDelete: "CASCADE",
// });

// ========= One To Many =========
Author.hasMany(Inventory, {
  foreignKey: "author_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Inventory.belongsTo(Author, {
  foreignKey: "author_id",
  targetKey: "id",
  onDelete: "CASCADE",
});

Inventory.hasMany(OccupyProperty, {
  foreignKey: "inventory_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
OccupyProperty.belongsTo(Inventory, {
  foreignKey: "inventory_id",
  targetKey: "id",
  onDelete: "CASCADE",
});

// Author.hasMany(Request, {
//   foreignKey: "author_id",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// Request.belongsTo(Author, {
//   foreignKey: "author_id",
//   targetKey: "id",
//   onDelete: "CASCADE",
// });

// ====== Many To Many ======
// Employee.belongsToMany(Job, {
//   through: EmployeeJob,
//   foreignKey: "employee_id",
// });
// Job.belongsToMany(Employee, {
//   through: EmployeeJob,
//   foreignKey: "job_id",
// });
require("dotenv").config();
require("./util/db")();
require("./util/middleware&route")(app);
const path = require("path");

const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  winston.info(`Server is running at port ${PORT}`);
});
