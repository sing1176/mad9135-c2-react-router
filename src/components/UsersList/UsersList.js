import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Button, Row , Col, Container} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './UsersList.css'
const UsersList = () => {
	async function fetchUsers() {
		let url =
			'https://randomuser.me/api/?results=24&seed=sing1176&nat=au,ca,nz,gb,us';
		let res = await fetch(url);
		let data = await res.json();
		setUsers(data.results);
	}

	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers();
	}, []);

	console.log(users);
	return (
		<>
			<Container >
				<h2 className="text-danger ">NOT REAL USERS </h2>
				<Row xs={1} md={3} lg={4} className="g-3">
					{users.map((user) => (
						<Col>
							<Card style={{ width: '20rem' }} className="mt-5">
								<Card.Img variant="top" src={user.picture.large} />
								<Card.Body>
									<Card.Title>
										{user.name.first} {user.name.last}
									</Card.Title>
									<Card.Text>
										<p>
											{' '}
											<Icon.Phone /> {user.cell}
										</p>
										<p>
											{' '}
											<Icon.EnvelopeFill /> {user.email}
										</p>
									</Card.Text>
									<Button variant="primary">More info</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default UsersList;
