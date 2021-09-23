const mongoose = require('mongoose')

const QuoteSchema = mongoose.Schema({
    quote: {
        type: String, 
        required: true
    },
    credit: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Quote', QuoteSchema)