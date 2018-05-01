import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'

class Home extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1200
    })
    AOS.refresh()
  }
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="brand">
            <Col 
              xs={{ size: 6, offset: 0}} 
              lg={{ size: 4, offset: 0 }}>
              <h1>C O M P A N Y -  N A M E</h1>
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
        <Container className="homeInfo" fluid>
          <Row>
            <Col lg={{ size: 8, offset: 3 }}>
              <Jumbotron className="jumboCards" data-aos="fade-left">
                <h1 className="display-3">Our product number 1.</h1>
                <p className="lead">
                  Pellentesque cursus libero eu urna ultricies imperdiet. 
                  Maecenas eu turpis suscipit ex fermentum euismod. 
                  Quisque congue leo quis orci fermentum, vitae luctus ex lacinia. 
                  Donec consectetur eleifend orci at posuere. Curabitur malesuada elementum massa quis pharetra. 
                  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                  Etiam vel nisi orci.
                </p>
                <hr className="my-2" />
                <p>Take a closer look at this product.</p>
                <p className="lead">
                  <Button color="secondary" size="lg">Learn More</Button>
                </p>
              </Jumbotron>
            </Col>
            <Col lg={{ size: 8, offset: 1 }}>
              <Jumbotron className="jumboCards" data-aos="fade-right">
                <h1 className="display-3">This is our second product.</h1>
                <p className="lead">
                  Pellentesque cursus libero eu urna ultricies imperdiet.
                  Maecenas eu turpis suscipit ex fermentum euismod.
                  Quisque congue leo quis orci fermentum, vitae luctus ex lacinia.
                  Donec consectetur eleifend orci at posuere. Curabitur malesuada elementum massa quis pharetra.
                  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Etiam vel nisi orci.
                </p>
                <hr className="my-2" />
                <p>Take a closer look at this product.</p>
                <p className="lead">
                  <Button color="secondary" size="lg">Learn More</Button>
                </p>
              </Jumbotron>
            </Col>
            <Col lg={{ size: 8, offset: 3 }}>
              <Jumbotron className="jumboCards" data-aos="fade-left">
                <h1 className="display-3">Check this one out as well!</h1>
                <p className="lead">
                  Pellentesque cursus libero eu urna ultricies imperdiet.
                  Maecenas eu turpis suscipit ex fermentum euismod.
                  Quisque congue leo quis orci fermentum, vitae luctus ex lacinia.
                  Donec consectetur eleifend orci at posuere. Curabitur malesuada elementum massa quis pharetra.
                  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Etiam vel nisi orci.
                </p>
                <hr className="my-2" />
                <p>Take a closer look at this product.</p>
                <p className="lead">
                  <Button color="secondary" size="lg">Learn More</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withRouter(Home)