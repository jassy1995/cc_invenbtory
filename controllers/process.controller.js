const { Request, Author, Inventory, Sequelize, Op } = require("../models");
const validator = require("../validator/author/register-validator");
const AuthorIdValidator = require("../validator/author/author-id");

exports.registerAuthor = async (req, res, next) => {
  const { error, value } = validator(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const author = await Author.create(req.body);
  return res.status(200).json({ message: "created", data: author });
};

exports.Authors = async (req, res, next) => {
  const authors = await Author.findAll();
  return res.status(200).json({ message: "success", data: authors });
};

exports.updateAuthor = async (req, res, next) => {
  let { author_id, ...others } = req.body;
  await Author.update(others, {
    where: { id: author_id },
  });
  const authors = await Author.findOne({
    where: { id: author_id },
  });

  return res.status(200).json({ message: "success", data: authors });
};

exports.createInventory = async (req, res, next) => {
  const { error, value } = AuthorIdValidator({ author_id: req.body.author_id });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const author = await Author.findOne({ where: { id: req.body.author_id } });
  if (!author) {
    return res
      .status(400)
      .json({ message: `author with id ${req.body.author_id} does not exist` });
  }

  req.body.shelf = 1;
  const inventory = await author.createInventory(req.body);
  return res.status(200).json({ message: "created", data: inventory });
};

exports.Inventory = async (req, res, next) => {
  const result = await Inventory.findAll({
    include: [
      {
        model: Author,
        required: true,
      },
    ],
  });
  return res.status(200).json({ message: "success", data: result });
};

exports.updateInventory = async (req, res, next) => {
  let { property_id, ...others } = req.body;
  await Inventory.update(others, {
    where: { id: property_id },
  });
  const inventory = await Inventory.findOne({
    where: { id: property_id },
  });

  return res.status(200).json({ message: "success", data: inventory });
};

exports.inventoryInStore = async (req, res, next) => {
  const result = await Inventory.findAll({
    where: { shelf: 1 },
    include: [
      {
        model: Author,
        required: true,
      },
    ],
  });
  return res.status(200).json({ message: "success", data: result });
};

exports.inventoryInMarket = async (req, res, next) => {
  const result = await Inventory.findAll({
    where: { shelf: 1, marketplace: 1, occupied: 0 },
    include: [
      {
        model: Author,
        required: true,
      },
    ],
  });
  return res.status(200).json({ message: "success", data: result });
};

exports.occupiedInventory = async (req, res, next) => {
  const result = await Inventory.findAll({
    where: { shelf: 1, marketplace: 1, occupied: 1 },
    include: [
      {
        model: Author,
        required: true,
      },
    ],
  });
  return res.status(200).json({ message: "success", data: result });
};

exports.moveInventoryToMarket = async (req, res, next) => {
  await Inventory.update(
    { marketplace: 1 },
    {
      where: { id: property_id },
    }
  );
  const result = await Inventory.findOne({
    where: { id: property_id },
    include: [
      {
        model: Author,
        required: true,
      },
    ],
  });
  return res.status(200).json({ message: "success", data: result });
};

exports.removeInventoryFromMarket = async (req, res, next) => {
  await Inventory.update(
    { occupied: 1 },
    {
      where: { id: property_id },
    }
  );
  const result = await Inventory.findOne({
    where: { id: property_id },
    include: [
      {
        model: Author,
        required: true,
      },
    ],
  });
  return res.status(200).json({ message: "success", data: result });
};

exports.createRequest = async (req, res, next) => {
  const request = await Request.create(req.body);
  return res.status(200).json({ message: "created", data: request });
};

exports.getRequest = async (req, res, next) => {
  const request = await Request.findAll();
  return res.status(200).json({ message: "created", data: request });
};
