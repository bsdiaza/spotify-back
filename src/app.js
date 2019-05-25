const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const app = express();

// connection to db
mongoose.connect('mongodb://localhost:27017/ubicaYcompra')
  .then(db => console.log('conexion exitosa'))
  .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/routes');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/', indexRoutes);

// server listening
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
