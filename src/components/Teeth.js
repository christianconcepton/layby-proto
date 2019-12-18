import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default class Teeth extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Teeth Left</Form.Label>
              <Form.Control type="text" name="tl" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Firm Teeth</Form.Label>
              <Form.Control type="text" name="ft" />
            </Form.Group>
            
            <Form.Control type="hidden" name="position" value={this.props.state.position} />

            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}