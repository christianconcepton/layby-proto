import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default class UpperConditions extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Not Aligned teeth</Form.Label>
              <Form.Check type="radio" label="Yes" value="1" name="naa" />
              <Form.Check type="radio" label="No" value="0" name="naa" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Opposite</Form.Label>
              <Form.Check type="radio" label="Yes" value="1" name="opposite" />
              <Form.Check type="radio" label="No" value="0" name="opposite" />
            </Form.Group>

            <Form.Control type="hidden" name="position" value={this.props.state.position} />
            <Form.Control type="hidden" name="tl" value={this.props.state.tl} />
            <Form.Control type="hidden" name="ft" value={this.props.state.ft} />

            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}