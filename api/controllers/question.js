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

  try {
    const savedQuestion = await question.save()
    return response.status(201).json(savedQuestion)
  } catch (error) {
    return response.json({
      msg: `Something went wrong ${error}`
    })
  }
})

questionRouter.put('/:id', tokenExtractor, userExtractor, async (request, response) => {

  try {

    const updatedQuestion = await Question.findByIdAndUpdate(request.params.id, request.body, { new: true })

    if (!updatedQuestion) {
      return response.status(400).json({
        msg: "The id is not valid or doesn't exist on DB"
      })
    }

    return response.json(updatedQuestion)

  } catch (error) {
    return response.json({
      msg: `Something went wrong ${error}`
    })
  }

})

questionRouter.get('/:id', tokenExtractor, userExtractor, async (request, response) => {
  const questionId = request.params.id

  if (!questionId) {
    return response.status(400).json({
      msg: 'The id is missing'
    })
  }

  try {
    const questionById = await Question.findById(questionId)
    if (!questionById) {
      return response.status(400).json({
        msg: "The id is not valid or doesn't exist on DB"
      })
    }
    return response.status(200).json(questionById)

  }
  catch (error) {
    return response.status(400).json({
      msg: `Something went wrong ${error}`
    })
  }
})

questionRouter.get('/', tokenExtractor, userExtractor, async (request, response) => {

  const { user } = request

  if (!user.rol) {
    return response.status(401).end()
  }

  try {
    if (user.rol !== 'Professor') {
      return response.status(401).end()
    }
    const questions = await Question.find({})
    return response.status(200).json(questions)

  } catch (error) {
    console.error(error)
  }
})

questionRouter.delete('/:id', tokenExtractor, userExtractor, async (request, response) => {

  try {
    const questionDeleted = await Question.findByIdAndRemove(request.params.id)

    return response.status(204).json(questionDeleted)

  }
  catch (error) {
    return response.status(400).json({
      msg: `Something went wrong: ${error}`
    })
  }

})

module.exports = questionRouter