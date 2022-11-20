const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    title: { type: String, require: true},
    price: { type: Number, require: true},
    description: { type: String, require: true},
    maxPeople: { type: Number, require: true},
    roomNumber: [{
        number: Number,
        unavailableDates: { type: [Date]}
    }],
})

module.exports = mongoose.model("Room", RoomSchema)