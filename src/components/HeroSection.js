import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
 
function HeroSection() {
	return (
		<div className="hero-container">
			<h1>WELCOME</h1>
			<p>This is me.</p>
			<div className="hero-btns">
				<Button 
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					GET TO KNOW ME
				</Button>
			</div>
		</div>
	)
}

export default HeroSection;