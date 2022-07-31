const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  "statement": {
    type: String,
    required: true
  },
  "option1": {
    type: String,
    required: true
  },
  "option2": {
    type: String,
    required: true
  },
  "option3": {
    type: String,
    required: true
  },
  "option4": {
    type: String,
    required: true
  },
  "answer": {
    type: String,
    required: true
  },
  test: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test'
  }
})

questionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    const { _id, __v, ...rest } = returnedObject
    return { id: _id.toString(), ...rest }
  }
})

const Questions = mongoose.model('Questions', questionSchema)

module.exports = Questions