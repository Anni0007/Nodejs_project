const express = require('express')
const { dashboard, login } = require('../controllers/main')
const authentication = require('../middleware/auth')
const router = express.Router()

router.get('/dashboard', authentication, dashboard)
router.post('/login',  login)

module.exports = router