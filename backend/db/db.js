const mongoose = require('mongoose');
require('dotenv').config()
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL,{user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true , useUnifiedTopology: true })
        console.log('Db Connected')
    } catch (error) {
        console.log(error.message);
    }
} 

module.exports = {db} 