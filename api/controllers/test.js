const testRouter = require('express').Router()
const Question = require('../models/questions')

const middleware = require('../middleware/middleware')
const Test = require('../models/tests')
const userExtractor = middleware.userExtractor
const tokenExtractor = middleware.tokenExtractor

//Create a new test on DB
testRouter.post('/', tokenExtractor, userExtractor, async (request, response) => {

  const { questions, name } = request.body

  console.log(questions, name)

  const test = new Test({
    name,
    questions
  })

  await test.save()

  response.status(201).json(test)

})

//Fetch all tests from DB
testRouter.get('/', tokenExtractor, userExtractor, async (request, response) => {
  const test = await Test.find().populate('questions')
  response.status(200).json(test)
})

//Remove one test by id
testRouter.delete('/:id', tokenExtractor, userExtractor, async (request, response) => {
  await Test.findByIdAndRemove(request.params.id)
  return response.status(204).end()
})


module.exports = testRouter