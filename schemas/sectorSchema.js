const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(15)
const description = Joi.string().max(50)

const createSectorSchema = Joi.object({
  name: name.required(),
  description: description.required()
})

const updateSectorSchema = Joi.object({
  name,
  description
})

const getSectorSchema = Joi.object({
  id: id.required()
})

module.exports = { createSectorSchema, updateSectorSchema, getSectorSchema }
