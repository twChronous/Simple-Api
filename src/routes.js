const express = require('express');
const routes = express.Router();

const OptionsController = require('./controllers/OptionsController')
const UsersController = require('./controllers/UsersController')


//options routing config
routes.get('/options', OptionsController.index)
routes.get('/options/:id', OptionsController.show)
routes.post('/options', OptionsController.store)
routes.put('/options/:id', OptionsController.update)
routes.delete('/options/:id', OptionsController.destroy)

//Users routing config
routes.get('/users', UsersController.index)
routes.get('/users/:id', UsersController.show)
routes.post('/users', UsersController.store)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.destroy)

module.exports = routes