import './App.css';
import Nav from '../Navbar/Nav';
import Home from '../Home/Home';
import UsersList from '../UsersList/UsersList';
import AddressList from '../AddressList/AddressList';
import Not from '../404/Not';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<header>
				<Nav />
			</header>
			<main>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/usersList">
						<UsersList />
					</Route>
					<Route path="/addressList">
						<AddressList />
					</Route>
					<Route path="/404">
						<Not />
					</Route>
					<Redirect to="/404" />
				</Switch>
			</main>
		</div>
	);
}

export default App;
