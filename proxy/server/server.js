const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/product/:product_id', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());