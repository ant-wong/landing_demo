import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

class Reviews extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="reviewTitle">
            <h1>Reviews</h1>
            <p>Hear from the best!</p>
          </div>
          <Row className="reviews">
            <Col 
              xs={{ size: 6, offset: 0 }}
              lg={{ size: 3, offset: 0 }}>
              <h1>CONTENT</h1>
            </Col>
            <Col 
              xs={{ size: 6, offset: 0 }}
              lg={{ size: 3, offset: 0}}>
              <h1>CONTENT</h1>
            </Col>
            <Col 
              xs={{ size: 6, offset: 0 }}
              lg={{ size: 3, offset: 0 }}>
              <h1>CONTENT</h1>
            </Col>
            <Col 
              xs={{ size: 6, offset: 0 }}
              lg={{ size: 3, offset: 0}}>
              <h1>CONTENT</h1>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withRouter(Reviews)