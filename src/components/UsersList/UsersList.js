import React from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const UsersList = ({ users }) => {
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
		<Container>
			<Row xs={1} md={2} lg={4}>
				{users.map((user) => (
					<Col>
						<div key={user.cell}>
							<Card key={user.cell} style={{ width: '20rem' }} className="mt-5">
								<Card.Img variant="top" src={user.picture.large} />
								<Card.Body>
									<Card.Title>
										{user.name.first} {user.name.last}{' '}
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
									<NavLink activeClassName="active" to={`/user/${user.cell}`}>
										<Button variant="primary">More info</Button>
									</NavLink>
								</Card.Body>
							</Card>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default UsersList;
