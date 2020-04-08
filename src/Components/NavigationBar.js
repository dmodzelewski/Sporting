import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="prime" variant="dark">
        <Navbar.Brand as={Link} to="/">
          ISportio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} exact to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} exact to="/reserve">
              Reserve
            </Nav.Link>
            <Nav.Link as={NavLink} exact to="/about">
              About
            </Nav.Link>
            <NavDropdown title="More Options" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#option/1">Need to</NavDropdown.Item>
              <NavDropdown.Item href="#option/2">Think</NavDropdown.Item>
              <NavDropdown.Item href="#option/3">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#option/4">This</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signin">
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
