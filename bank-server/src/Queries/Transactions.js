
const pool = require('../database/database')

const getTransactions = (request, response) => {
    pool.query('SELECT * FROM transactions;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createTransaction = (request, response) => {
    const { sender, reciever } = request.body

    pool.query('INSERT INTO transactions (sender, reciever) VALUES ($1, $2) RETURNING *', [sender, reciever], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Tranaction added with ID: ${results.rows[0].id}`)
    })
}


module.exports = {
    getTransactions,
    createTransaction
}