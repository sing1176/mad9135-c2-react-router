import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { Card } from 'react-bootstrap';
import '../User/User.css';

const User = ({ findUser }) => {
	let { id } = useParams();
	let user = findUser(id);
	console.log(user);

	return (
		<>
			<div key={user.cell} className=" user">
				<Card key={user.cell} style={{ width: '20rem' }} className="mt-5">
					<Card.Img variant="top" src={user.picture.large} />
					<Card.Body>
						<Card.Title>{user.name.first}</Card.Title>
						<Card.Text>
							<p>
								{' '}
								<Icon.Phone /> {user.cell}
							</p>
							<p>
								{' '}
								<Icon.EnvelopeFill /> {user.email}
							</p>
							<p>
								{' '}
								<Icon.MapFill /> {user.nat}
							</p>
							<p>
								{' '}
								<Icon.GeoAlt /> {user.location.street.name} {user.location.city}{' '}
								{user.location.state} {user.location.country}{' '}
								{user.location.postcode}
							</p>
							<p>Age: {user.dob.age} years old </p>
							<p>Username: ${user.login.username}</p>
							<p>{`Password: ${user.login.password}`}</p>
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</>
	);
};

export default User;
