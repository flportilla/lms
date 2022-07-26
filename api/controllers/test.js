const testRouter = require('express').Router()
const Question = require('../models/questions')

const middleware = require('../middleware/middleware')
const Test = require('../models/tests')
const userExtractor = middleware.userExtractor
const tokenExtractor = middleware.tokenExtractor

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

testRouter.get('/', tokenExtractor, userExtractor, async (request, response) => {

  const test = await Test.find().populate('questions')
  response.status(200).json(test)

})


module.exports = testRouter