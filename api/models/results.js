const mongoose = require('mongoose')
const { Schema, model } = mongoose

const resultSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    }
})

resultSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        const { _id, __v, ...rest } = returnedObject
        return { id: _id.toString(), ...rest }
    }
})

const Results = model('Results', resultSchema)

module.exports = Results