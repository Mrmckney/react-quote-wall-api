const User = require('../models/userModel')

exports.createUser = (req, res) => {
    new User(req.body)
    .save()
    .then(user => {
        res.send({
            message: "User created successfully",
            status: 200,
            user
        })
    })
    .catch(err => res.status(500).send({
        message: "Missing email or password",
        status: 500
    }))
}

exports.loginUser = (req, res ) => {
    User.findOne({ email: req.body.email})
    .then(user => {
        if (!user || user.password !== req.body.password) {
            res.send({
                message: 'Login Attempt Failed',
                status: 401
            })
            return
        }
        if (user && user.password === req.body.password) {
          res.status(200).send({
            message: "User login successful",
            status: 200,
            user
          })
            return
        } 
      })
      .catch(err => res.status(500).send({
          message: "Missing email or password",
          status: 500
      }))
}