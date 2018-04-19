import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/peony.svg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'

// ANIMATIONS
import '../styles/animations.css'

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
      <Navbar color="faded" light expand="sm" className="navbar" fixed="top">
        <Link className="brandLink" to="/">
          <img className="logo" src={Logo} alt="logo"/>
        </Link>
        {/* TOGGLE LINKS IN MOBILE SIZE */}
        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="navLinks">
              <Link to="/about">
                <NavLink>ABOUT</NavLink>
              </Link>
            </NavItem>
            <NavItem className="navLinks">
              <Link to="/reviews">
                <NavLink>REVIEWS</NavLink>
              </Link>
            </NavItem>
            <NavItem className="navLinks">
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