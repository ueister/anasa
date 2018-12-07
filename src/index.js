import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { Gallery } from './Gallery';

/*
Main file to call the header, gallery, and footer components.
*/

class Asana extends Component {
  render() {
    return (
    	<div>
			<Header />
			<Gallery />
			<Footer />
		</div>
	);
  }
}

ReactDOM.render(<Asana />, document.getElementById('root'));
