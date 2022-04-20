require("express-async-errors");
const express = require("express");
const cors = require("cors");
const patientRoute = require("../routes/patient.route");
const processRoute = require("../routes/process.route");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static("public")); //give access to static files
  // app.use("/api/v2", patientRoute);
  app.use("/api", processRoute);

  app.use(error);
};
