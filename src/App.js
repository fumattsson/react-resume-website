import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
	    <Router>
	    	<Navbar />
	    	<Switch>
	      		<Route path="/" exact component={Home} />
	      		<Route path="/about-me" component={AboutMe} />
	      		<Route path="/contact" component={Contact} />
	    	</Switch>
	    </Router>
    </>
  );
}

export default App;
