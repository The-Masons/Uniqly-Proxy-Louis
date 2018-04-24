const mongoose = require('mongoose');
const db = require('./index.js');

const reviewSchema = new mongoose.Schema({
	product_id: Number,
	nickname: String,
	from: String,
	size_purchased: String,
	height: String,
	age: String,
	gender: String,
	received_free_product: Boolean,
	chest_size: Number,
	waist_size: Number,
	hips_size: Number,
	product_fit: Number,
	product_length: Number,
	product_quality: Number,
	date: String,
	rating: Number,
	review_title: String,
	review_body: String,
	recommended: Boolean,
	helpful: Number,
	from_uk: Boolean,
	verified_purchaser: Boolean,
	employee: Boolean
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;