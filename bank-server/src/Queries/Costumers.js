
const {connect} = require('../database/database')

const getCustomers = (_request, response) => {
    connect.query('SELECT * FROM customers;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


module.exports = {
    getCustomers
}