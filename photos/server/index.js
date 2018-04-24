const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Photo = require('../mongo-dbase/Photo.js');

const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/foto', function(req, res) {
  Photo.find({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(data);
  });
});

app.listen(PORT, () => console.log(`listening: ${PORT}`));
