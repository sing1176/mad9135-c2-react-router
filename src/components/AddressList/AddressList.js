import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
const AddressList = ({ users }) => {
	console.log(users);
	users.sort(function (a, b) {
		if (a.name.last < b.name.last) {
			return 1;
		}
		if (a.name.last > b.name.last) {
			return -1;
		}
		return 0;
	});

	return (
		<div>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Address</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr>
							<td>{users.indexOf(user) + 1}</td>
							<td>{user.name.first}</td>
							<td>{user.name.last}</td>
							<td>
								{user.location.street.name} {user.location.city}{' '}
								{user.location.state} {user.location.country}{' '}
								{user.location.postcode}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default AddressList;
