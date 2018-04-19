import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Map from './Map'

class Contact extends Component {
  render() {
    return(
      <Container className="mapPage" fluid>
        <Row>
          <Col lg={{ size: 6, offset: 0 }}>
            <div className="mapContainer">
              <Map />
            </div>
          </Col>
          <Col lg={{ size: 4, offset: 2 }}>
            <h1>GET IN TOUCH</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(Contact)