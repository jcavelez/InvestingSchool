const { User, UserSchema } = require('./useModel')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))

  User.associate(sequelize.models)
}

module.exports = setupModels
