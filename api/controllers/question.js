const questionRouter = require('express').Router()
const Question = require('../models/questions')

const middleware = require('../middleware/middleware')
const userExtractor = middleware.userExtractor
const tokenExtractor = middleware.tokenExtractor

questionRouter.post('/', tokenExtractor, userExtractor, async (request, response) => {

  const { statement, option1, option2, option3, option4, answer } = request.body
  const { user } = request

  const question = new Question({
    statement,
    option1,
    option2,
    option3,
    option4,
    answer,
  })

  if (user.rol !== 'Professor') {
    return response.status(401).end()
  }

  const savedQuestion = await question.save()
  return response.status(201).json(savedQuestion)

})
questionRouter.get('/:id', tokenExtractor, userExtractor, async (request, response) => {
  const questionId = request.params.id

  const questionById = await Question.findById(questionId)

  return response.status(200).json(questionById)
})

questionRouter.get('/', tokenExtractor, userExtractor, async (request, response) => {

  const { user } = request

  if (user.rol !== 'Professor') {
    return response.status(401).end()
  }

  const questions = await Question.find({})

  return response.status(200).json(questions)

})




module.exports = questionRouter