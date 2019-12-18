import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default class DenturePosition extends Component {
  constructor() {
    super();
  }

  render () {
    return(
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Do you need an upper or lower denture?</Form.Label>
              <Form.Check type="radio" label="Upper" value="upper" name="position" />
              <Form.Check type="radio" label="Lower" value="lower" name="position" />
            </Form.Group>

            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}