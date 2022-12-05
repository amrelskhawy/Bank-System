import React from 'react'
import TableComponent from '../../components/table-component/table-component'
const transactionsTable = [
	{
		no: 1,
		sender: "Amr",
		receiver: "amreelsk",
		amount: 5000
	},
	{
		no: 7,
		sender: "Nada",
		receiver: "DoshaNada",
		amount: 298565
	},
	{
		no: 8,
		sender: "Alaa",
		receiver: "alaaSamy",
		amount: 88800
	}
]

const Transactions = () => {
	
	return (
		<div className='transactions-table'>
			<TableComponent type='transactions' myTable={transactionsTable} />
		</div>
	)
}

export default Transactions
