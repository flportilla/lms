const { validationResult } = require("express-validator")
const { Types } = require("mongoose")
const jwt = require('jsonwebtoken')

const Questions = require("../models/questions")
const User = require('../models/users')

const config = require('../utils/config')

//Extracts the token from the header
const tokenExtractor = (request, response, next) => {

  try {

    const authorization = request.get('authorization')

    request.token = authorization.substring(7)
    next()

  } catch (error) {

    return response.status(401).json({
      msg: 'The token is invalid or missing'
    })
  }
}

//Extracts the user from the request
const userExtractor = async (request, response, next) => {

  try {
    const decodedToken = jwt.verify(request.token, `${config.SECRET}`)
    const user = await User.findById(decodedToken.id)

    request.user = user
    next()
  } catch (error) {

    return response.status(401).json({
      msg: 'The token is invalid or missing'
    })

  }
};

//Validates the id. If is a valid mongo ID and if the question exists on the DB
const isValidQuestion = async (request, response, next) => {

  if (!Types.ObjectId.isValid(request.params.id)) {
    return response.status(400).json({
      msg: `The id ${request.params.id} is not a valid mongoose ID`
    })
  }

  const question = await Questions.findById(request.params.id)
  if (!question) {
    return response.status(400).json({
      msg: `The question with the id ${request.params.id} doesn't exist on the db`
    })
  }
  next()
}

//Validates the role. If user added in the token above has a role and if that role is a professor
const isProfessor = async (req, res, next) => {
  const { user } = req;

  if (!user.rol) {
    return res.status(400).json({
      msg: 'You must be logged to see this content'
    })
  }

  if (user.rol !== 'Professor') {
    return res.status(401).json({
      msg: 'To see the content of this page you must be a professor'
    })
  }

  next();
}

//If there was an error above, this compiles all of them and sends a response without crashing the entire server
const fieldValidator = (req, res, next) => {

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }
  next();
}


module.exports = {
  tokenExtractor,
  userExtractor,
  fieldValidator,
  isValidQuestion,
  isProfessor
}