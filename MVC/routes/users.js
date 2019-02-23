const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

router.get('/', userController.getAll)
router.post('/', userController.createUser)

module.exports = router