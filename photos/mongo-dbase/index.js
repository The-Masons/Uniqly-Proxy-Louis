const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/photos';
const db = mongoose.connect(mongoUri);

module.exports = db;
