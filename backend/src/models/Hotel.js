const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: { type: String, require: true},
    type: { type: String, require: true},
    city: { type: String, require: true},
    address: { type: String, require: true},
    distance: { type: String, require: true},
    photos: { type: [String]},
    title: { type: String, require: true},
    description: { type: String, require: true},
    rating: { type: Number, min: 1, max: 5},
    rooms: { type: [String]},
    cheapestPrice: { type: Number, require: true},
    featured: { type: Boolean, default: false},
})

module.exports = mongoose.model("Hotel", HotelSchema)