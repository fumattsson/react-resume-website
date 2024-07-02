import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className="cards">
			<h1>Check this out</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem 
							src="images/img-9.jpg"
							text="Explore the hidden waterfall"
							label="Adventure"
							path="/contact"
						/>
						<CardItem 
							src="images/img-2.jpg"
							text="Travel through the islands of Bali"
							label="Beach"
							path="/about-me"
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cards;