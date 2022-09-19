const express = require('express')
const { getAlljobs, getJob, deleteJob, updateJob, createJob } = require('../controllers/jobs')
const router = express.Router()

router.get('/', getAlljobs)
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)
router.post('/', createJob)

module.exports = router