const mongoose = require('mongoose');
const { PhotoSchema } = require('./photo');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number
    },
    thumbnail: {
        type: String
    },
    photos: {
        type: [PhotoSchema]
    }
});

module.exports = mongoose.model('Item', itemSchema);