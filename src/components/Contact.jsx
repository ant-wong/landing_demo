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
            <div className="contactTitle">
              <h1>GET IN TOUCH</h1>
              <h3>We would love to hear from you.</h3>
            </div>
            <p className="contactInfo">
              #800 - 14 Street Location <br />
              Vancouver, BC. 1X4 6Y6 <br />
              (604) - 111 - 4444 <br />
              contactus@company.com
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(Contact)