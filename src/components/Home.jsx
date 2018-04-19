import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="brand">
            <Col 
              xs={{ size: 6, offset: 0}} 
              lg={{ size: 4, offset: 0 }}>
              <h2>COMPANY NAME HERE</h2>
            </Col>
          </Row>
          <Row>
            <Col 
              className="landingContent" 
              xs={{ size: 6, offset: 6 }} 
              lg={{ size: 4, offset: 7 }}>
              <h2 className="learnMore">OUR VISION</h2>
              <p className="vision">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et molestie nulla. 
                Quisque semper sollicitudin dignissim. Nulla facilisi. Sed et turpis erat. 
              </p>
              <p className="vision">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce quis euismod mi. 
                Vestibulum commodo id urna eu vestibulum.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withRouter(Home)