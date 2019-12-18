import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class calculation extends Component {
  constructor( prop ) {
    super( prop );
  }

  render () {
    return(
      <>
        <Row className="justify-content-md-center">
          <Col xs={3}>
            <h2>Result:</h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={3}>Position:</Col>
          <Col xs={3}>{this.props.state.position}</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={3}>Full or partial?</Col>
          <Col xs={3}>{this.props.state.full ? `full` : `partial`}</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={3}>Teeth to extract</Col>
          <Col xs={3}>{this.props.state.tte}</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={3}>Extraction Cost</Col>
          <Col xs={3}>{this.props.state.eCost}</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={3}>Teeth to make in deture</Col>
          <Col xs={3}>{this.props.state.ttmid}</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={3}>Denture Cost</Col>
          <Col xs={3}>{this.props.state.dCost}</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={3}>Total</Col>
          <Col xs={3}>{this.props.state.dCost + this.props.state.eCost}</Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={3}><a href="/">Go Back</a></Col>
        </Row>
      </>
    );
  }
}