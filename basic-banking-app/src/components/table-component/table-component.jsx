import React from 'react'
import './table-component.scss'


const TableComponent = ({ myTable, heading, description, type }) => {
	const format = require('format-number');
	const myFormat = format({ prefix: ' L.E ' });
	const formattedNumber = (num) => myFormat(num, { noSeparator: false });


	return (
		<div className='table-container'>
			<div className='table-heading'>
				<h2 className='title'>{type ? 'Transactions' : 'customers'} page</h2>
				<p className='desc'>{type ? 'Last 10 Transactions' : 'Select Customer to transfer Money to !'}</p>
			</div>
		<table className='table'>
			<thead>
				<tr>
					<th>NO</th>
					{type ? null : (<th>ID</th>)}
					{type ? (<th>Sender</th>) : (<th>Name</th>)}
					{type ? (<th>Receiver</th>) : (<th>Email</th>)}
					{type ? (<th>Amount</th>) : (<th>Balance</th>)}
				</tr>
			</thead>
			<tbody>
				{
					myTable.map((row, i) => (
						<tr key={i+1} id={i+1} onClick={(e)=> console.log(e.currentTarget.id)}>
							<td>{row.no}</td>
							{type ? null : (<td>{i+1}</td>)}
							{type ? (<td>{row.sender}</td>) : (<td>{row.name}</td>)}
							{type ? (<td>{row.receiver}</td>) : (<td>{row.email}@centralbank.com</td>)}
							{type ? (<td>{formattedNumber(row.amount)}</td>) : (<td>{formattedNumber(row.balance)}</td>)}
						</tr>
					))
				}
			</tbody>
		</table>
		</div>

	)
}

export default TableComponent
