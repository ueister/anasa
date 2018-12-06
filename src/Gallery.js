import React, { Component } from 'react';
import { Grid, Image, Row, Col, Modal, Button } from 'react-bootstrap';

export class Gallery extends Component {
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
      return (
<Grid>
  <Row>
    <Col xs={6} md={4} style={{paddingBottom:10}}>
      <Image src="https://images.unsplash.com/photo-1528113668843-f1bfaf2df681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" responsive onClick={this.handleShow} />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src="https://images.unsplash.com/photo-1528113668843-f1bfaf2df681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" responsive />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
    </Col>
    <Col xs={6} md={4} style={{paddingBottom:10}}>
      <Image src={require('./assets/images/raw/4.jpeg')} responsive />
    </Col>
    <Col xs={6} md={4} style={{paddingBottom:10}}>
      <Image src="https://images.unsplash.com/photo-1528113668843-f1bfaf2df681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb" responsive />
    </Col>
  </Row>
</Grid>
    );
    
  }
  
}