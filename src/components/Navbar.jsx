import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'

export default class NavBar extends Component {
  state = {
    isOpen: false
  }

  // TOGGLE NAV ITEMS
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Navbar color="light" light expand="md" className="navbar" fixed="top">
        <Link className="brandLink" to="/">
          <NavbarBrand>BRAND</NavbarBrand>
        </Link>
        {/* TOGGLE LINKS IN MOBILE SIZE */}
        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/about">
                <NavLink>ABOUT</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/reviews">
                <NavLink>REVIEWS</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">
                <NavLink>CONTACT</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}