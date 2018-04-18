import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class Footer extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="footer">
          <Col>
            <p>COPYRIGHT © 2018 COMPANY NAME</p>
          </Col>
        </Row>
      </Container>
    )
  }
}