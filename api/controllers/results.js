const resultsRouter = require('express').Router()
const { tokenExtractor, userExtractor } = require('../middleware/middleware')
const Results = require('../models/results')
const Test = require('../models/tests')
const User = require('../models/users')

resultsRouter.post('/', tokenExtractor, userExtractor, async (request, response) => {

    const { selectedQuestions, time, exanName, examId } = request.body
    const { id } = request.user

    if (!selectedQuestions) {
        return response.status(400).json({
            msg: 'Missing info'
        })
    }

    const { questions } = await Test.findById(examId).populate('questions')

    const correctAnswers = selectedQuestions.map((question, index) => {

        let correct = 0;
        if (question.answer === questions[index].answer) {
            correct++
        }
        return correct
    }).reduce((prev, curr) => prev + curr, 0)

    const score = ((correctAnswers / selectedQuestions.length) * 100).toFixed(1) + "%"

    const student = await User.findById(id)

    if (!student) {
        return response.status(400).json({
            msg: `The user with the id ${id} doesn't exist on the DB`
        })
    }

    const result = new Results({
        name: exanName,
        score,
        time
    })

    const savedResult = await result.save()

    //Save result of the test to logged specific user
    student.testsTaken = student?.testsTaken.concat(savedResult.id)
    await student?.save()

    return response.json({
        msg: 'Results saved'
    })

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