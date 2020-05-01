const express = require('express');

const app = express();
const path = require('path');
const db = require('../Db/index.js');

const port = 3001;

app.use(express.json());
app.use(express.static('public'));

app.get('/api/images/:id', (req, res) => {
  const id = Number(path.basename(req.url));
  db.getImages(id, (err, result) => {
    if (err) {
      res.sendStatus(500);
      res.end();
    }
    res.send(result).json();
    res.end();
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on http://localhost:${port}`);
});
