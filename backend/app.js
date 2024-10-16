const express = require('express')
const {menuRouter} = require('./src/routes/MenuRoutes/menuRoute')
const cors = require('cors')
let app = express()


app.use(express.json())

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use('/',menuRouter)


module.exports = app