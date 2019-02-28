const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
//login refrest get route
router.get('/token', authController.isAuthenticated, authController.getAuthStatus)
//login in the user
router.post('/token', authController.login)

module.exports = router