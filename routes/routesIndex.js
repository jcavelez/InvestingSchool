const express = require('express')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  //add here more routes
  router.use('/users', usersRouter)
}

module.exports = routerApi;
