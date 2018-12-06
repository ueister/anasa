import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { Gallery } from './Gallery';
import dogs from './dogs.json';

const data = dogs;

class Dogs extends React.Component {
  render() {
    return (
		<p>{this.props.gallery}</p>
	);
  }
}

class Asana extends React.Component {
  render() {
  	let gallery = data.dogs.map(function(images){
  		var path = require('.'+images.image);
      return (<img src={path} alt="{images.source}" />);
    });

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
