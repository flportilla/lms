require('dotenv').config()
const app = require('./app') // the actual Express application
const http = require('http') // local
const config = require('./utils/config')

const server = http.createServer(app)

app.listen(`${config.PORT}`, () => {
  console.log(`Server running on port ${config.PORT}`)
})