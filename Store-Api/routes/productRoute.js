const express = require('express')
const { getAllProducts, getAllProductStatic } = require('../controllers/products')
const router = express.Router()

router.get('/', getAllProducts)
router.get('/static', getAllProductStatic)

module.exports = router