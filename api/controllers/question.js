const questionRouter = require('express').Router()
const Question = require('../models/questions')

const {
  userExtractor,
  tokenExtractor,
  fieldValidator,
  isValidQuestion,
  isProfessor } = require('../middleware/middleware')

questionRouter.post('/', [
  tokenExtractor,
  userExtractor,
  isProfessor,
  fieldValidator
], async (request, response) => {

  const { statement, option1, option2, option3, option4, answer } = request.body

  const question = new Question({
    statement,
    option1,
    option2,
    option3,
    option4,
    answer,
  })

  const savedQuestion = await question.save()
  return response.status(201).json(savedQuestion)

})

questionRouter.put('/:id', [
  tokenExtractor,
  userExtractor,
  isValidQuestion,
  isProfessor,
  fieldValidator
], async (request, response) => {

  const updatedQuestion = await Question.findByIdAndUpdate(request.params.id, request.body, { new: true })

  return response.json(updatedQuestion)

})

questionRouter.get('/:id', [
  tokenExtractor,
  userExtractor,
  isValidQuestion,
  isProfessor,
  fieldValidator
], async (request, response) => {

  const questionById = await Question.findById(request.params.id)
  return response.json(questionById)

})

questionRouter.get('/', [
  tokenExtractor,
  userExtractor,
  isProfessor,
  fieldValidator
], async (request, response) => {

  const questions = await Question.find({})
  return response.status(200).json(questions)

})

questionRouter.delete('/:id', [
  tokenExtractor,
  userExtractor,
  isValidQuestion,
  isProfessor,
  fieldValidator
], async (request, response) => {

  const questionDeleted = await Question.findByIdAndRemove(request.params.id)
  return response.status(204).json(questionDeleted)

})

module.exports = questionRouter