const config = require('./src/config/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.send( config)
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})