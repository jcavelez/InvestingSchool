const Joi = require('joi')

const id = Joi.number().integer()
const corpCod = Joi.string()
const fullName = Joi.string()
const shortName = Joi.string()
const logo = Joi.string().uri()
const cityId = Joi.number.integer()
const address = Joi.string()
const phoneNumber = Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`})
const sectorId = Joi.number().integer()
const CEOName = Joi.string()

const createCorporationSchema = Joi.object({
  corpCod: corpCod.required(),
  fullName: fullName.required(),
  shortName:shortName.required(),
  logo: logo,
  cityId: cityId.required(),
  address: address.required(),
  phoneNumber: phoneNumber.required(),
  sectorId: sectorId.required(),
  CEOName: CEOName,
})

const updateCorporationSchema = Joi.object({
  corpCod,
  fullName,
  shortName,
  logo,
  cityId,
  address,
  phoneNumber,
  sectorId,
  CEOName,
})

const getCorporationSchema = Joi.object({
  id: id.required()
})

module.exports = { createCorporationSchema, updateCorporationSchema, getCorporationSchema }
