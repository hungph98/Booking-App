require('../../.env')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config()

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connect Successfully!")
    } catch (err) {
        console.log("Fail!", err)
    }
}

module.exports = { connect };