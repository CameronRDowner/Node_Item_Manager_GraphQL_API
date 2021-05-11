const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    mainPhoto: {
        type: Boolean,
        required: false
    }
});

module.exports = mongoose.model('Photo', photoSchema);