const Task = require("../models/Task")

const getAllTasks =  async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res)=> {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})  
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getTask = async (req,res) =>{
    try {
        const {id:taskId} = req.params
        const task = await Task.findOne({_id:taskId})
    if(!task){
        return res.status(404).json({msg:`No task with id : ${taskId}`})
    }
        res.status(200).json({task})  
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateTask = async (req,res)=>{
    try {
        const {id:taskId} = req.params
        const task = await Task.findByIdAndUpdate({_id:taskId}, req.body)
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskId}`})
        }
        res.status(200).json({task})  
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req,res)=>{
    try {
        const {id:taskId} = req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskId}`})
        }
        res.status(200).json({status:"success"})  
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteAllTask = async (req,res)=>{
    try {
        const task = await Task.deleteMany({})
        if(task.deletedCount === 0){
            return res.status(404).json({msg:`there is no item to delete`})
        }
        res.status(200).json({task})  
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTask
}