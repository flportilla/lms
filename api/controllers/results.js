const resultsRouter = require('express').Router()
const Results = require('../models/results')
const Test = require('../models/tests')
const User = require('../models/users')

resultsRouter.post('/', async (request, response) => {

    const { name, score, userId, examId, time } = request.body

    const result = new Results({
        name,
        score,
        time
    })
    const savedResult = await result.save()

    //Save result of the test to logged specific user
    const user = await User.findById(userId)
    user.testsTaken = user?.testsTaken.concat(savedResult.id)
    await user?.save()

    //Change the status of the test to unavailable to avoid take it again
    const exam = await Test.findById(examId)
    exam.selectedTest = false
    await exam.save()

    return response.json(exam)

})


resultsRouter.get('/', async (req, res) => {

    const users = await User
        .find().populate('testsTaken')

    const response = users.map(user => {
        return {
            name: user.name,
            tests: user.testsTaken,
            rol: user.rol,
        }
    }).filter(user => user.rol === 'Student')

    return res.json(response)
})

module.exports = resultsRouter