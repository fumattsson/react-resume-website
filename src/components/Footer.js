import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p calssName="footer-subscription-heading">
					Join our newsletter
				</p>
				<p className="footer-subsciption-text">
					You can't unsubscribe
				</p>
				<div className="input-areas">
					<form>
						<input type="email" name="email" placeholder="Email" className="footer-input" />
						<Button buttonStyle="btn--outline">Subscribe</Button>
					</form>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About me</h2>
						<Link to="/about-me">More</Link>						
						<Link to="/contact">How it works</Link>
					</div>
					<div className="footer-link-items">
						<h2>Social media</h2>
						<Link to="/">Instagram</Link>						
						<Link to="/">LinkedIn</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Info</h2>
						<Link to="/">About me</Link>						
						<Link to="/">What I do</Link>
					</div>
					<div className="footer-link-items">
						<h2>Contact</h2>
						<Link to="/">Email</Link>						
						<Link to="/">Telephone</Link>
					</div>
				</div>
				<section className="social-media">
					<div className="social-media-wrap">
						<div class="social-icons">
							<a 
								className="social-icon-link instagram" 
								href="https://www.instagram.com/fritttis/?hl=sv" 
								target="_blank" 
								aria-label="Instagram"
							>
								<i className="fab fa-instagram" />
							</a>
							<a 
								className="social-icon-link linkedin" 
								href="https://www.linkedin.com/in/fridamattsson/" 
								target="_blank" 
								aria-label="LinkedIn"
							>
								<i className="fab fa-linkedin" />
							</a>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Footer;