const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(15)
const description = Joi.string().max(50)

const createRoleSchema = Joi.object({
  name: name.required(),
  description: description.required()
})

const updateRoleSchema = Joi.object({
  name,
  description
})

const getRoleSchema = Joi.object({
  id: id.required()
})

module.exports = { createRoleSchema, updateRoleSchema, getRoleSchema }
