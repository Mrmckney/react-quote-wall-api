const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')


const app = express()
const router = express.Router()
app.use(cors())
app.use(express.json())
app.use("/", router)

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen('5000', () => {
      console.log('our app is listening on port 5000')
    })
  })
  .catch(err => console.log(err))

const quoteRoute = require('./src/routes/quoteRoutes')
app.use(quoteRoute)

const userRoute = require('./src/routes/userRoutes')
app.use(userRoute)