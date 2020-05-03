import React, { Component } from "react";
import { Icon } from "@iconify/react";
import running from "@iconify/icons-mdi/run-fast";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default class NavigationBar extends Component {
  render() {
    const { isAuthenticatetd, logout } = this.props.auth;

    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="prime"
        variant="dark"
        className="navbar"
      >
        <Navbar.Brand as={Link} to="/">
          <Icon icon={running} className="nav-icon" />
          <text className="nav-text"> ISportio</text>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav-buttons">
            <Nav.Link
              as={NavLink}
              exact
              to="/reserve"
              className="nav-button-rent"
            >
              Wynajmij Obiekt
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              exact
              to="/about"
              className="nav-button-help"
            >
              Pomoc
            </Nav.Link>
          </Nav>

          <Nav>
            {isAuthenticatetd() ? (
              <Nav.Link as={NavLink} exact to="/profile">
                Profile
              </Nav.Link>
            ) : null}

            {isAuthenticatetd() ? (
              <NavLink as={NavLink} to="/">
                <div onClick={logout}>Log Out</div>
              </NavLink>
            ) : (
              <Nav.Link as={NavLink} to="/signin" className="nav-button-login">
                Zaloguj
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
