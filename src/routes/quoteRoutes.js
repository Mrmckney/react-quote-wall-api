const express = require('express')
const router = express.Router() 
const quoteController = require('../controllers/quoteControllers')

router.get('/getallquotes', quoteController.getAllQuotes)

router.post('/quote', quoteController.createQuote)

module.exports = router