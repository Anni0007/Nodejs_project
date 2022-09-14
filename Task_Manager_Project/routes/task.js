const express = require('express')
const { getAllTasks, createTask, getTask, updateTask, deleteTask, deleteAllTask } = require('../controllers/task')
const router = express.Router()

router.get('/', getAllTasks)

router.post('/', createTask)
router.get('/:id', getTask)
router.put('/:id',updateTask)
router.delete('/:id', deleteTask)
router.delete('/', deleteAllTask)

module.exports = router