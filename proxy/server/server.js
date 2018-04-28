const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const request = require('request');
const axios = require('axios');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/product/:product_id', (req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(302);
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/reviews/:product_id', (req,res) => {
  const url = 'http://13.57.228.157:3005/reviews/' + req.params.product_id;
  axios.get(url)
  .then((response) => {
    res.status(200);
    res.send(response.data);
  })
  .catch((err) => {
    res.status(500);
    res.send(err);
  })
});

app.get('/productdetails/:productid', (req,res) => {
  const url = 'http://54.183.208.237:3003/product/' + req.params.productid;
  axios.get(url)
  .then((response) => {
    res.status(200);
    res.send(response.data);
  })
  .catch((err) => {
    res.status(500);
    res.send(err);
  })
});

app.get('/product/:productid/colors', (req,res) => {
  const url = 'http://54.183.208.237:3003/product/' + req.params.productid +'/colors';
  axios.get(url)
  .then((response) => {
    res.status(200);
    res.send(response.data);
  })
  .catch((err) => {
    res.status(500);
    res.send(err);
  })
});

app.get('/product/:productid/images', (req,res) => {
  const url = 'http://54.183.208.237:3003/product/' + req.params.productid +'/images';
  axios.get(url)
  .then((response) => {
    res.status(200);
    res.send(response.data);
  })
  .catch((err) => {
    res.status(500);
    res.send(err);
  })
});

app.get('/product/:productid/sizes_qtys', (req, res) => {
    const url = 'http://13.57.205.67:3001/product/' + req.params.productid + '/sizes_qtys';
  axios.get(url)
    .then((response) => {
      res.status(200);
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    })
});

app.get('/product/:productid/addtocart', (req, res) => {
  const url = 'http://13.57.205.67:3001/product/' + req.params.productid + '/addtocart';
  axios.get(url)
    .then(resp => res.status(200).send(resp.data))
    .catch(err => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`server running at: ${port}`);
});