import React, { Component } from "react";
import { Icon } from "@iconify/react";
import running from "@iconify/icons-mdi/run-fast";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

export default class NavigationBar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { isAuthenticateted, logout } = this.props.auth;

    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className={this.state.isOpen ? "nabar-toogle" : "navbar"}
      >
        {console.log(this.state.isOpen)}
        <Navbar.Brand as={Link} to="/">
          <Icon icon={running} className="nav-icon" />
          <h1 className="nav-text"> iSportio</h1>
        </Navbar.Brand>
        <Navbar.Toggle onClick={this.handleToggle} />

        <Navbar.Collapse>
          <Nav className="nav-buttons">
            <Nav.Link
              as={NavLink}
              exact
              to="/reserve"
              className="nav-button hvr-float-shadow"
            >
              Wynajmij Obiekt
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              exact
              to="/about"
              className="nav-button hvr-float-shadow"
            >
              Pomoc
            </Nav.Link>

            {isAuthenticateted() ? (
              <Nav.Link as={NavLink} exact to="/profile">
                Profile
              </Nav.Link>
            ) : null}

            {isAuthenticateted() ? (
              <NavLink as={NavLink} to="/">
                <div onClick={logout}>Log Out</div>
              </NavLink>
            ) : (
              <Nav.Link
                as={NavLink}
                to="/signin"
                className="nav-button hvr-float-shadow"
              >
                Zaloguj
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.bool
}
