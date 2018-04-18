import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <h1 className="title">NAV</h1>
        <Button color="success">success</Button>{' '}
      </div>
    )
  }
}