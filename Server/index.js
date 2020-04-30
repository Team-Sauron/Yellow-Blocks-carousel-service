const express = require('express');
const app = express();
const db = require('../Db/index.js');
const port = 3001;

app.use(express.json());
app.use(express.static('public'));

app.get('/api/images', (err, res) => {
});


app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
