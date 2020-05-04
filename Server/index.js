const express = require('express');

const port = 3001;
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
const db = require('../Db/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/api/images/:id', (req, res) => {
  const id = Number(path.basename(req.url));
  db.getImages(id, (err, result) => {
    if (err) {
      res.sendStatus(400);
      res.end();
    }
    res.body = result;
    res.send(result);
  });
});


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on http://localhost:${port}`);
});

module.exports = app;
