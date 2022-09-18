require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const connectDb = require('./db/connect')
const errorHandlerMiddleware = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')

const productRoutes = require('./routes/productRoute')
//middleware
app.use(express.json())

//Routes 
app.get('/', (req,res)=>{
    res.send("<h1> Store api </h1>")
})

//product route
app.use('/api/v1/products', productRoutes)
app.use(notFound)
app.use(errorHandlerMiddleware)


//port
const port = process.env.PORT || 3000

const start = async() => {
    try {
        //Connection
        await connectDb(process.env.DB_URI)
        app.listen(port, console.log(`Server is listening on port no. ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()