const express = require('express');
const Router = express.Router();
const clientController = require('./../controller/clientController');

Router.get('/', clientController.getClients);
Router.get('/:id', clientController.getOneClient);
Router.post('/',clientController.createClient);
Router.put('/:id',clientController.updateClient);
Router.delete('/:id',clientController.removeClient);


module.exports = Router;
