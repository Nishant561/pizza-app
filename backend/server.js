
const app = require('./app')
const dotenv = require('dotenv')

const connectDatabase = require('./src/db/databaseConn')
require('./src/db/databaseConn')
dotenv.config({
    path:'./config.env'
})

const PORT = process.env.PORT || 3000



connectDatabase()
.then(()=>{
    console.log('Database has been connected successfully.')
    app.listen(PORT, (request , response)=>{
        console.log(`Server has been started on port ${PORT}`)
    })
})
.catch((error)=>{
    console.log("Something went wrong." + error.message)
})


