const Joi = require('joi')

const id = Joi.number().integer()
const schoolCode = Joi.string()
const name = Joi.string()
const cityId = Joi.number.integer()
const address = Joi.string()
const phoneNumber = Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`})

const createSchoolSchema = Joi.object({
  schoolCode: schoolCode.required(),
  name: name.required(),
  cityId: cityId.required(),
  address: address,
  phoneNumber: phoneNumber,
})

const updateSchoolSchema = Joi.object({
  schoolCode,
  name,
  cityId,
  address,
  phoneNumber,
})

const getSchoolSchema = Joi.object({
  id: id.required()
})

module.exports = { createSchoolSchema, updateSchoolSchema, getSchoolSchema }
