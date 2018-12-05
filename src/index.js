import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './Header';
import { Footer } from './Footer';
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
      return (<div>{images.image}</div>);
    });

    return (
    	<div>
			<Header />
			<Dogs gallery={gallery} />
/*
			<div>{gallery}</div>
*/
			<Footer />
		</div>
	);
  }
}

ReactDOM.render(<Asana />, document.getElementById('root'));
