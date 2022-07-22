const questionRouter = require('express').Router()
const bcrypt = require('bcryptjs')
const Question = require('../models/questions')
const jwt = require('jsonwebtoken')

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

  const savedquestion = await question.save()
  return response.status(201).json(savedquestion)

})

module.exports = questionRouter