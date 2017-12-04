'use strict';

require('dotenv').config();

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chalk = require('chalk');
const axios = require('axios');

// Scaffold Express
const app = express();
app.server = http.createServer(app);
app.use(bodyParser.json());

// Configure CORS
const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};
app.use(cors(corsOptions));

// GET TMDb API Key
const apiKey = process.env.TMDB_API_KEY;

// GET Discovery
app.get('/discover', function(req, res) {
  const url = 'https://api.themoviedb.org/3/discover/movie';
  axios.get(url, {
    params: {
      api_key: apiKey,
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page: 1
    }
  })
    .then(function(response) {
      res.set({
        'Cache-Control': response.headers['cache-control'],
        'ETag': response.headers.etag
      })
      res.send(response.data)
    })
    .catch(function(error) {
      res.sendStatus(500);
      console.log(error);
    })
});

// GET Movie Details
app.get('/movie/:id', function(req, res) {
  if (!req.params.id) {
    res.sendStatus(404);
  }

  const id = req.params.id;
  const url = `https://api.themoviedb.org/3/movie/${id}`;

  axios.get(url, {
    params: {
      api_key: apiKey,
      language: 'en-US'
    }
  })
    .then(function(response) {
      res.set({
        'Cache-Control': response.headers['cache-control'],
        'ETag': response.headers.etag
      })
      res.send(response.data);
    })
    .catch(function(error) {
      res.sendStatus(500);
      console.log(error);
    })
});

// Start Express Server
app.server.listen(process.env.PORT || 8080, () => {
  console.log(chalk.cyan(`Listening on port ${app.server.address().port}\n`));
});