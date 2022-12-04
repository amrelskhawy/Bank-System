import React from 'react'
import './customers.scss'
const myTable = [
	{
		no: 1,
		id: 1,
		name: "Amr",
		email: "amreelsk",
		balance: 5000
	},
	{
		no: 2,
		id: 2,
		name: "Mora",
		email: "medoo",
		balance: 8000
	}, {
		no: 3,
		id: 3,
		name: "hema",
		email: "hema7070",
		balance: 350640
	},
	{
		no: 4,
		id: 4,
		name: "hossam",
		email: "hossam210",
		balance: 65400
	}, {
		no: 5,
		id: 5,
		name: "Dalia",
		email: "dodo35",
		balance: 3500
	},
	{
		no: 6,
		id: 6,
		name: "Sara",
		email: "soso57s",
		balance: 65800
	},
	{
		no: 7,
		id: 7,
		name: "Nada",
		email: "DoshaNada",
		balance: 298565
	},
	{
		no: 8,
		id: 8,
		name: "Alaa11",
		email: "alaaSamy",
		balance: 88800
	},
	{
		no: 9,
		id: 9,
		name: "Mahmoud",
		email: "Mpdy357",
		balance: 10000
	},
	{
		no: 10,
		id: 10,
		name: "Norhan",
		email: "Nory3540",
		balance: 652451
	},
]

const Customers = () => {
	const format = require('format-number');
	const myFormat = format({ prefix: ' L.E ' });
	const formattedNumber = (num) => myFormat(num, { noSeparator: false });
	return (
		<div className='customers-table-container'>
			<div className='customers-table-heading'>
				<h2 className='title'>customers page</h2>
				<p className='desc'>Select Customer to transfer Money to !</p>
			</div>
			<table className='customers-table'>
				<thead>
					<tr>
						<th>NO</th>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Balance</th>
					</tr>
				</thead>
				<tbody>
					{
						myTable.map(row => (
							<tr key={row.id}>
								<td>{row.no}</td>
								<td>{row.id}</td>
								<td>{row.name}</td>
								<td>{row.email}@centralbank.com</td>
								<td>{formattedNumber(row.balance)}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}

export default Customers
