const Joi = require("joi");

function validateUserDetail(userObject) {
  const schema = Joi.object({
    author_id: Joi.number().required(),
  });
  return schema.validate(userObject);
}

module.exports = validateUserDetail;
