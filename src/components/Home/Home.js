import React from 'react';
import img from '../../res/a.jpg';
import './Home.css';
const Home = () => {
	return (
		<div>
			<img src={img} alt={img} />
			<div className="info">
				<p>Welcome to Sheild's Skrull database. </p>
				<p>People you are about to see they are not real.</p>
				<p>Click on Users to find a Random Skrull list.</p>
			</div>
		</div>
	);
};

export default Home;
