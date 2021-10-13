import React from 'react';
import img from '../../res/a.jpg';
import './Home.css';
const Home = () => {
	return (
		<div>
			<img src={img} alt={img} />
			<ul className="info">
				<li>Welcome to Sheild's Skrull database. </li>
				<li>People you are about to see they are not real.</li>
				<li>Click on Users to find a Random Skrull imposter.</li>
			</ul>
		</div>
	);
};

export default Home;
