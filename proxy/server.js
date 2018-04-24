const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
const Reviews = require('../reviews/database/Review.js');
const Photo = require('../photos/mongo-dbase/Photo.js');

app.get('/:product_id', (req, res) => {
    res.sendFile(path.join(__dirname + '/../proxy/public/index.html'));
});

app.get('/reviews/:product_id', (req, res) => {
    Reviews.find({
        product_id: parseInt(req.params.product_id)
    }, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log(results);
            res.send(results);
        }
    });
});

app.get('/api/foto', function(req, res) {
    Photo.find({}, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.send(data);
    });
  });