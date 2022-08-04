const usersRouter = require('express').Router()
const User = require('../models/users')
const bcrypt = require('bcryptjs');
const { tokenExtractor, userExtractor, isProfessor } = require('../middleware/middleware');

usersRouter.post('/', async (request, response) => {

  const {
    rol,
    username,
    name,
    password
  } = request.body

  const existingUser = await User.findOne({ username })
  if (existingUser) {
    return response.status(400).json({
      error: 'username must be unique'
    })
  }
  if (!username || !password) {
    'Username or password is missing'
    return response.status(400).json({
      error: 'username or password is missing'
    })
  }
  if (username.length < 3 || password.length < 3) {
    error: 'Username and password must be longer that 3 characters'
    return response.status(400).json({
      error: 'username and password must be longer that 3 characters'
    })
  }
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    rol,
    username,
    name,
    passwordHash
  })

  const savedUser = await user.save()
  return response.status(201).send(savedUser)

})

usersRouter.get('/', tokenExtractor, userExtractor, isProfessor, async (request, response) => {

  const students = await User.find({ rol: 'Student' })

  const res = students.map(({ name, id }) => {
    return { name, id }
  })

  response.json(res)
})

usersRouter.put('/', tokenExtractor, userExtractor, async (request, response) => {

  const { studentId, testIds } = request.body

  const updatedUser = await User
    .findByIdAndUpdate(
      studentId,
      { testsAssigned: testIds },
      { new: true }
    )
    .populate('testsAssigned')

  response.json({
    updatedUser
  })

})

module.exports = usersRouter