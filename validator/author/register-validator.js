const Joi = require("joi");

function validateUserDetail(userObject) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().trim().email().required(),
    // last_name: Joi.string().min(3).required(),
    // phone: Joi.string().min(3).required(),
    // city: Joi.string().required(),
    // states: Joi.string().required(),
    // password: Joi.string().min(3).max(80).required(),
    // address: Joi.string().min(3).required(),
    // role: Joi.boolean().required(),
  });
  return schema.validate(userObject);
}

module.exports = validateUserDetail;
