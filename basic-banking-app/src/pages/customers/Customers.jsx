import React, {useState, useEffect} from 'react'
import TableComponent from '../../components/table-component/table-component'

import axios from 'axios'

const Customers = () => {
	
const [customerTable, setCustomerTable] = useState([])

useEffect(()=> {
	axios.get('http://localhost:8000/customers')
	  .then(function (response) {
		// handle success
		setCustomerTable(response.data)
	  })
	  .catch(function (error) {
		console.log(error);
	  })

},[customerTable])

  
	return <TableComponent myTable={customerTable} />
}

export default Customers
