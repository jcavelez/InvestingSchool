const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string()
const countryId = Joi.number.integer()

const createProvinceSchema = Joi.object({
  name: name.required(),
  countryId: countryId.required()
})

const updateProvinceSchema = Joi.object({
  name: name,
  countryId: countryId
})

const getProvinceSchema = Joi.object({
  id: id.required()
})

module.exports = { createProvinceSchema, updateProvinceSchema, getProvinceSchema }
