import React, { useState } from "react";
import { Icon } from "@iconify/react";
import running from "@iconify/icons-mdi/run-fast";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const NavigationBar = () => {
  const [isOpen, setisOpen] = useState(true);
  const handleToggle = () => {
    setisOpen(!isOpen);
  };
  const removeFromLocal = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    localStorage.removeItem("email");
  };

  const authToken = localStorage.getItem("token");

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={isOpen ? "nabar-toogle" : "navbar"}
    >
      <Navbar.Brand as={Link} to="/">
        <Icon icon={running} className="nav-icon" />
        <h1 className="nav-text"> iSportio</h1>
      </Navbar.Brand>
      <Navbar.Toggle onClick={handleToggle} />

      <Navbar.Collapse>
        <Nav className="nav-buttons">
          {authToken ? (
            <Nav.Link
              as={NavLink}
              exact
              to="/adminpanel"
              className="nav-button hvr-float-shadow"
            >
              Panel Administracyjny
            </Nav.Link>
          ) : null}
          {authToken ? (
            <Nav.Link
              as={NavLink}
              exact
              to="/profile"
              className="nav-button hvr-float-shadow"
            >
              Profil
            </Nav.Link>
          ) : null}

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
              className="nav-button hvr-float-shadow"
              to="/login"
              onClick={() => removeFromLocal()}
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
};

NavigationBar.propTypes = {
  auth: PropTypes.object,
};
export default NavigationBar;
