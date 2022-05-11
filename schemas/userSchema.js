const Joi = require('joi')

const id = Joi.number().integer()
const firstName = Joi.string().min(3).max(32)
const lastName = Joi.string().min(3).max(32)
const email = Joi.string().email()
const password = Joi.string().min(8)
const roleId = Joi.string().min(5)
const birthDate = Joi.date().less('now')
const schoolId = Joi.number()

const createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  email: email.required(),
  roleId: roleId.required(),
  password: password.required(),
  birthDate,
  schoolId: schoolId.required()
})

const updateUserSchema = Joi.object({
  firstName,
  lastName,
  email,
  roleId,
  password,
  birthDate,
  schoolId,
})

const getUserSchema = Joi.object({
  id: id.required(),
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
