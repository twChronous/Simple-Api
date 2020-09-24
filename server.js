const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

//Express first config
const app = express();
app.use(express.json());

//Cors configs
var whitelist = ['http://localhost:3001', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));

//Database connection
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//Database SchemaLoader
require('./src/databse/schemas/options');
require('./src/databse/schemas/users');

//Express routing configs
app.use('/api', require('./src/routes'))

app.listen(3001);