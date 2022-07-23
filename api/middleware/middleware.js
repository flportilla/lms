const jwt = require('jsonwebtoken')
const User = require('../models/users')
const config = require('../utils/config')

//Extracts the token from the header
const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  }

  else {
    console.clear()
    console.log('error, token is missing or incorrect')
  }

  next()
}

//Extracts the user from the request
const userExtractor = async (request, response, next) => {

  const decodedToken = jwt.verify(request.token, `${config.SECRET}`)
  const user = await User.findById(decodedToken.id)

  request.user = user
  next()
};

module.exports = {
  tokenExtractor,
  userExtractor
}