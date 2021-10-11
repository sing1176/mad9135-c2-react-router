import React from 'react';
import img from '../../res/a.jpg';
import './Home.css';
const Home = () => {
	return (
		<div>
			<img src={img} alt={img} />
			<div className="info">
				<h3>Welcome to Sheild's Skrull database. </h3>
				<h4>People you are about to see they are not real.</h4>
				<h4>Click on Users to find a Random Skrull list.</h4>
			</div>
		</div>
	);
};

export default Home;
