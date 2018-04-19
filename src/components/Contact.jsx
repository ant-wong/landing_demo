import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Map from './Map'

class Contact extends Component {
  render() {
    return(
      <Container className="mapPage">
        <Row>
          <Col lg={{ size: 6, offset: 0 }}>
            <Map />
          </Col>
          <Col lg={{ size: 4, offset: 2 }}>
            <h1>We would love to hear from you!</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(Contact)