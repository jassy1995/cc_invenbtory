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
  const { error, value } = AuthorIdValidator({
    author_id: req.body.author_id,
  });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const author = await Author.findOne({
    where: { id: req.body.author_id },
  });
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
    where: { marketplace: 1 },
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
    where: { occupied: 1 },
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
    { marketplace: 0 },
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

exports.setPropertyAsOccupy = async (req, res, next) => {
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

exports.filterInventory = async (req, res, next) => {
  //filter by room number
  if (req.body.no_of_rooms) {
    const inventory = await Inventory.findAll({
      where: { no_of_rooms: req.body.no_of_rooms },
      include: [
        {
          model: Author,
          required: true,
        },
      ],
    });
    return res.status(200).json({ message: "created", data: inventory });
  }

  // filter by house type
  if (req.body.house_type) {
    const inventory = await Inventory.findAll({
      where: { house_type: req.body.house_type },
      include: [
        {
          model: Author,
          required: true,
        },
      ],
    });
    return res.status(200).json({ message: "created", data: inventory });
  }

  //filter by amount
  if (req.body.amount_min && req.body.amount_max) {
    const inventory = await Inventory.findAll({
      where: {
        monthly_rate: {
          [Op.between]: [req.body.amount_min, req.body.amount_max],
        },
      },
      include: [
        {
          model: Author,
          required: true,
        },
      ],
    });
    return res.status(200).json({ message: "created", data: inventory });
  }
  //filter by country
  if (req.body.country) {
    const inventory = await Inventory.findAll({
      where: { country: req.body.country },
      include: [
        {
          model: Author,
          required: true,
        },
      ],
    });
    return res.status(200).json({ message: "created", data: inventory });
  }
  //filter by state
  if (req.body.state) {
    const inventory = await Inventory.findAll({
      where: { state: req.body.state },
      include: [
        {
          model: Author,
          required: true,
        },
      ],
    });
    return res.status(200).json({ message: "created", data: inventory });
  }
  //filter by local government
  if (req.body.lga) {
    const inventory = await Inventory.findAll({
      where: { lga: req.body.lga },
      include: [
        {
          model: Author,
          required: true,
        },
      ],
    });
    return res.status(200).json({ message: "created", data: inventory });
  }
};

exports.createRequest = async (req, res, next) => {
  const request = await Request.create(req.body);
  return res.status(200).json({ message: "created", data: request });
};

exports.getRequest = async (req, res, next) => {
  const request = await Request.findAll();
  return res.status(200).json({ message: "created", data: request });
};
