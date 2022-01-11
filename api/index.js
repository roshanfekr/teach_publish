require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const job  = require('./_helpers/job')


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




var routes = require('./routes')

app.use(routes)


module.exports = app

