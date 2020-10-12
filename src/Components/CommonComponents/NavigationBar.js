import React, { Component } from "react";
import { Icon } from "@iconify/react";
import running from "@iconify/icons-mdi/run-fast";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { AUTH_TOKEN } from "../LoginComponents/constants";

export default class NavigationBar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className={this.state.isOpen ? "nabar-toogle" : "navbar"}
      >
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
              to="/profile"
              className="nav-button hvr-float-shadow"
            >
              Profil
            </Nav.Link>
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
            {authToken ? (
              <Nav.Link
                as={NavLink}
                to="/"
                onClick={localStorage.removeItem(AUTH_TOKEN)}
              >
                Wyloguj
              </Nav.Link>
            ) : (
              <Nav.Link
                as={NavLink}
                to="/login"
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
  auth: PropTypes.object,
};
