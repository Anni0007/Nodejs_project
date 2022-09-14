const getAllTasks =  (req,res) => {
    res.send('all item')
}

const createTask = (req,res)=> {
    res.send('create task')
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