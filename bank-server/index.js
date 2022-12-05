
const customers = require('./src/Queries/Costumers')
const transactions = require('./src/Queries/Transactions')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var cors = require('cors');
const port = 8000



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
  )
  
app.use(cors());
app.get('/customers',customers.getCustomers)
app.get('/transactions',transactions.getTransactions)


app.get('/', (request, response) => {
  response.send('Hello World !!')
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})