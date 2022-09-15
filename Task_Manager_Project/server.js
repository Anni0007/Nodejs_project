const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connection = require('./db/connectDb')
require('dotenv').config()

// middleware
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send("welcome to my homepage")
})
app.use('/api/v1/tasks', tasks)

const port = 3000

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