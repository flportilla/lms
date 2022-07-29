const resultsRouter = require('express').Router()
const Results = require('../models/results')
const Test = require('../models/tests')
const User = require('../models/users')

resultsRouter.post('/', async (request, response) => {

    const { name, score, userId, examId } = request.body

    const result = new Results({
        name,
        score,
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
    const { userId } = req.body

    const { name, testsTaken } = await User.findById(userId).populate('testsTaken')

    const testInfo = testsTaken.map(test => {
        return {
            testName: test.name,
            testScore: test.score
        }
    })

    return res.json({
        name,
        testInfo
    })

})


module.exports = resultsRouter