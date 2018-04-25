const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const photoSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  description: String,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
