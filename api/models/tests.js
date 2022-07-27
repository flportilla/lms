const mongoose = require('mongoose')
const { Schema, model } = mongoose

const testSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Questions'
    }
  ],
  selectedTest: {
    type: Boolean,
    default: false
  }
})

testSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    const { _id, __v, ...rest } = returnedObject
    return { id: _id.toString(), ...rest }
  }
})

const Test = model('Test', testSchema)

module.exports = Test