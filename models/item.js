const mongoose = require('mongoose');

class Photo {
    constructor(input){
        this.url = input.url ? input.url : null;
        this.mainPhoto = input.mainPhoto ? input.mainPhoto : false;
    }
}

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
        type: [Photo]
    }
});

module.exports = mongoose.model('Item', itemSchema);