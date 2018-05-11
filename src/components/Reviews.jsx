import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  CardImg, 
  CardTitle, 
  CardSubtitle,
  CardText, 
  CardBody } from 'reactstrap'
import axios from 'axios'

class Reviews extends Component {
  state = {
    reviews: []
  }

  componentWillMount() {
    axios.get('http://localhost:6060/')
      .then((res) => {
        this.setState({
          reviews: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state.reviews)
    const reviewsJSX = this.state.reviews.map((post, i) => {
      return <Col 
               className="userReview"
               key={post.id}
               xs={{ size: 6, offset: 0}}
               lg={{ size: 4, offset: 0}}>
                <Card>
                  <CardImg top width="20%" src={post.user.image_url} alt="user profile pic" />
                  <CardBody>
                    <CardTitle>{post.user.name}</CardTitle>
                    <CardSubtitle>{post.rating} / 5</CardSubtitle>
                    <CardText>{post.text}</CardText>
                  </CardBody>
                </Card>
             </Col>
    })

    return (
      <div>
        <Container fluid>
          <div className="reviewTitle">
            <h1>Reviews</h1>
            <p>Hear from the best!</p>
          </div>
          <Row className="reviews">
            {reviewsJSX}
          </Row>
        </Container>
      </div>
    )
  }
}

export default withRouter(Reviews)