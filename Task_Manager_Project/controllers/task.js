const { createCustomError } = require("../errors/customError")
const asyncWrapper = require("../middleware/async")
const Task = require("../models/Task")

const getAllTasks = asyncWrapper(async (req,res) => {
        const tasks = await Task.find({})
        res.status(200).json({tasks})  
})

const createTask = asyncWrapper( async (req,res)=> {
        const task = await Task.create(req.body)
        res.status(201).json({task})  
})

const getTask = asyncWrapper (async (req,res,next) =>{
    const {id:taskId} = req.params
    const task = await Task.findOne({_id:taskId})
    console.log(task);
    if(!task){
        console.log(taskId);
        return next(createCustomError(`No task with id : ${taskId}`,404))
    }
    res.status(200).json({task})  
    
})

const updateTask = asyncWrapper(async (req,res)=>{
    const {id:taskId} = req.params
    const task = await Task.findByIdAndUpdate({_id:taskId}, req.body , {new:true, runValidators:true})
    if(!task){
        return next(createCustomError(`No task with id : ${taskId}`,404))
    }
    res.status(200).json({task})  
})

const deleteTask = asyncWrapper( async (req,res)=>{
    const {id:taskId} = req.params
    const task = await Task.findOneAndDelete({_id:taskId})
    if(!task){
        return next(createCustomError(`No task with id : ${taskId}`,404))
    }
    res.status(200).json({status:"success"})  
})

const deleteAllTask = asyncWrapper( async (req,res)=>{
    const task = await Task.deleteMany({})
    if(task.deletedCount === 0){
        return next(createCustomError('There is no item to delete',404))

    }
    res.status(200).json({task})   
})

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTask
}