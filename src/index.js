import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './Header';
import { Footer } from './Footer';

class Asana extends React.Component {
  render() {
    return (
    	<div>
			<Header />
			<Footer />
		</div>
	);
  }
};

ReactDOM.render(<Asana />, document.getElementById('root'));
