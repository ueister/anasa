import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import dogs from './dogs.json';
import Thumbnails from './Thumbnails';

const data = dogs;

export class Gallery extends Component {
  render() {
      return (
		<Grid>
			<Row class="row-eq-height">
				{data.dogs.map(function(images, index){
					return (<Thumbnails gallery={images.image} />);
				})}
			</Row>
		</Grid>
    );
  }
}