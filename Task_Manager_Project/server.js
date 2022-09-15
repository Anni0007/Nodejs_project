const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connection = require('./db/connectDb')
const notFound = require('./middleware/notFound')
require('dotenv').config()
const errorHandlerMiddleware = require('./middleware/errorHandler')

// middleware
app.use(express.json())
app.use(express.static('./public'))

//routes
app.get('/',(req,res)=>{
    res.send("welcome to my homepage")
})
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 5000

const start = async  () => {
    try {
        await connection(process.env.CONNECTIONURI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()
// app.listen(port, console.log(`Server is listening on port ${port}`))