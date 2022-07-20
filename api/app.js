require('dotenv').config()
require('express-async-errors')
const express = require('express')
const cors = require('cors')
const app = express()

const usersRouter = require('./controllers/user')
const loginRouter = require('./controllers/login')

const config = require('./utils/config')

const mongoose = require('mongoose')
mongoose.connect(`${config.MONGODB_URI}`)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app