const { Request, Author, Inventory, Sequelize, Op } = require("../models");
const validator = require("../validator/author/register-validator");

exports.registerAuthor = async (req, res, next) => {
  const { error, value } = validator(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const author = await Author.create(req.body);
  return res.status(200).json({ message: "created", data: author });
};

exports.createInventory = async (req, res, next) => {
  // const author = await Author.findOne({ where: { id: req.body.author_id } });
  // const inventory = await author.createInventory(req.body);
  const inventory = await Inventory.findOne({ where: { id: 1 } });
  return res.status(200).json({ message: "created", data: inventory });
};