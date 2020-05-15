const express = require('express');
const compression = require('compression');

const app = express();
const path = require('path');

// const port = 3001;
const bodyParser = require('body-parser');
const db = require('../Db/index.js');

app.use(compression());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/api/images/:id', (req, res) => {
  let id = Number(path.basename(req.url));
  if (id > 100 || id < 1) {
    id = 1;
  }
  db.getImages(id, (err, result) => {
    if (err) {
      res.sendStatus(400);
      res.end();
    }
    res.body = result;
    res.send(result);
  });
});

module.exports = app;
