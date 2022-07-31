const resultsRouter = require('express').Router()
const Results = require('../models/results')
const User = require('../models/users')

resultsRouter.post('/', async (request, response) => {

    const { name, score, userId } = request.body

    const result = new Results({
        name,
        score,
    })
    const savedResult = await result.save()

    const user = await User.findById(userId)
    user.testsTaken = user?.testsTaken.concat(savedResult.id)
    await user?.save()

    return response.json(savedResult)

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