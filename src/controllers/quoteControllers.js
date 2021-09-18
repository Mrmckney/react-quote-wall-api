const Quote = require('../models/quoteModel') 

exports.createQuote = (req, res) => {
    new Quote(req.body)
    .save()
    .then(() => res.status(200).send({
        message: "Quote created"
    }))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}

exports.getAllQuotes = (req, res) => {
    Quote.find()
    .then(quotes => res.send(quotes))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}