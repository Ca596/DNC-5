const bodyParser = require('body-parser');
const express = require('express');
const clienteRouter = require('./Router/ClientRouter');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/cliente', clienteRouter);

module.exports = app;