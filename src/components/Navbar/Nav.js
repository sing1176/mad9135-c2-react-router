import { NavLink } from 'react-router-dom'
import '../Navbar/Nav.css'
const Nav = () => {
   return (
	   <>
		<div className="navbar">
				<NavLink activeClassName="active" to="/" exact>
					Home
				</NavLink>
				<NavLink activeClassName="active" to="/usersList">
					Users
				</NavLink>
				<NavLink activeClassName="active" to="/addressList">
					Address
				</NavLink>
		</div>
	</>
		);
}

export default Nav

