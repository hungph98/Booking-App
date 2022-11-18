require('../../constant')
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(MONGODB);
        console.log("Connect Successfully!")
    } catch (err) {
        console.log("Fail!", err)
    }
}

module.exports = { connect };