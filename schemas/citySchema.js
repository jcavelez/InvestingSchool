const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string()
const provinceId = Joi.number.integer()

const createCitySchema = Joi.object({
  name: name.required(),
  provinceId: provinceId.required()
})

const updateCitySchema = Joi.object({
  name: name,
  provinceId: provinceId
})

const getCitySchema = Joi.object({
  id: id.required()
})

module.exports = { createCitySchema, updateCitySchema, getCitySchema }
