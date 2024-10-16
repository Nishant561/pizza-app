const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'config.env'})

const url = process.env.DATABASE_URL

const connectDatabase = async ()=>{
    await mongoose.connect(url)
}


module.exports = connectDatabase