const loginRouter = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/users')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

loginRouter.post('/', async (request, response) => {

  const { username, password, rol } = request.body

  const user = await User.findOne({ username })

  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash ? user.passwordHash : '')

  if (!rol) {
    return response.status(401).json({
      error: 'Please select a rol'
    })
  }

  if (user?.rol !== rol) {
    return response.status(401).json({
      error: 'Please select your rol'
    })
  }

  if (!(user && passwordCorrect)) {

    return response.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user.id
  }

  const token = jwt.sign(userForToken, `${config.SECRET}`)

  return response
    .status(200)
    .send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter