import './App.css';
import Nav from '../Navbar/Nav';
import Home from '../Home/Home';
import UsersList from '../UsersList/UsersList';
import AddressList from '../AddressList/AddressList';
import Not from '../404/Not';
import User from '../User/User';

import { Route, Redirect, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
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

	function findUser(id) {
		return users.find((el) => el.cell === id);
	}

	return (
		<div className="App">
			<Nav />

			{/* // Routing */}
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/usersList">
					<UsersList users={users} />
				</Route>
				<Route path="/addressList">
					<AddressList />
				</Route>
				<Route path="/404">
					<Not />
				</Route>
				<Route path="/user/:id">
					<User findUser={findUser} />
				</Route>
				<Redirect to="/404" />
			</Switch>
		</div>
	);
}

export default App;
