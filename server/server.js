const Axios = require('axios');

const express = require('express');
const morgan = require('morgan');

require('dotenv').config();
const API_KEY = process.env.MY_API_KEY;

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get(`/api/:city`, (req, res) => {
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&APPID=${API_KEY}`)
        .then(response => res.send(response.data))
        .catch(err => res.send(err.message))
})

module.exports = app;


