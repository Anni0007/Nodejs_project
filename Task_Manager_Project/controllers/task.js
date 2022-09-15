const Task = require("../models/Task")

const getAllTasks =  (req,res) => {
    res.send('all item')
}

const createTask = async (req,res)=> {
   const task = await Task.create(req.body)
   res.status(201).json({task})
}

const getTask = (req,res)=>{
    res.send('get one task')
}

const updateTask = (req,res)=>{
    res.send('one task')
}

const deleteTask = (req,res)=>{
    res.send('delete single task')
}

const deleteAllTask = (req,res)=>{
    res.send('delete All task')
}
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTask
}