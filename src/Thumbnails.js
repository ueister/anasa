import React, { Component } from 'react';
import { Col, Modal, Image } from 'react-bootstrap';

class Thumbnails extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
	var path = require('.'+this.props.gallery);
      return (
		<Col xs={6} md={2} className="text-center" style={{paddingBottom:30}}>
			<Image src={path} responsive onClick={this.handleShow} style={{maxHeight:85,margin:"auto"}} />
			<Modal show={this.state.show} onHide={this.handleClose}>
				<Modal.Header closeButton style={{border:'none'}}>
				</Modal.Header>
				<Modal.Body>
					<Image src={path} responsive />
				</Modal.Body>
			</Modal>
		</Col>
    );
  }
}

export default Thumbnails;