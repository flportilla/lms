const testRouter = require('express').Router()
const Question = require('../models/questions')

const middleware = require('../middleware/middleware')
const Test = require('../models/tests')
const User = require('../models/users')
const userExtractor = middleware.userExtractor
const tokenExtractor = middleware.tokenExtractor

//Create a new test on DB
testRouter.post('/', tokenExtractor, userExtractor, async (request, response) => {

  const { questions, name } = request.body

  const test = new Test({
    name,
    questions
  })

  await test.save()
  response.status(201).json(test)
})

//Fetch all tests from DB
testRouter.get('/', tokenExtractor, userExtractor, async (request, response) => {

  const { id: userId } = request.user

  const { rol } = await User.findById(userId)


  if (rol === 'Professor') {
    const tests = await Test.find()
    return response.status(200).json(tests)
  }

  const { testsAssigned, name, id } = await User.findById(userId).populate('testsAssigned')

  const res = {
    id,
    name,
    testsAssigned
  }

  response.status(200).json(res)
})

//Fetch all tests from DB
testRouter.get('/:id', tokenExtractor, userExtractor, async (request, response) => {
  const test = await Test.findById(request.params.id).populate('questions')
  response.status(200).json(test)
})

//Remove one test by id
testRouter.delete('/:id', tokenExtractor, userExtractor, async (request, response) => {

  await Test.findByIdAndRemove(request.params.id)
  return response.status(204).end()
})

//Update one test by id
testRouter.put('/:id', tokenExtractor, userExtractor, async (request, response) => {

  const updatedTest = await Test.findByIdAndUpdate(request.params.id, request.body, { new: true })
  return response.send(updatedTest).end()
})

module.exports = testRouter