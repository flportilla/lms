const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  "username": {
    type: String,
    required: true
  },
  "name": {
    type: String,
    required: true
  },
  "passwordHash": {
    type: String,
    required: true
  },
  "rol": {
    type: String,
    required: true
  }
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    const { _id, __v, ...rest } = returnedObject
    return { id: _id.toString(), ...rest }
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User