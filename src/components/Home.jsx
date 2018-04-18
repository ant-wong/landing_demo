import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Logo from '../img/cube.svg'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="landingImage">
          <Container fluid>
            <Row className="brand">
              <Col lg={{ size: 4, offset: 0 }}><h2>COMPANY VISION</h2></Col>
            </Row>
            <Row className="landingContent">
              <Col lg={{ size: 6, offset: 7 }}><h2>LEARN MORE</h2></Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)