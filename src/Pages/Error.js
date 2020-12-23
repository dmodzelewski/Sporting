import React from 'react'
import { Nav, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <Container fluid className="error">
      <Col>
        <Row>
          <Col className="error-position">
            <Row>
              <Col>
                <h1 className="error-header">Error 404</h1>
              </Col>
            </Row>
            <Row>
              <Col className="error-subheader">
                <Row>
                  <p>Niestety wybrana przez Ciebie strona nie istnieje</p>
                </Row>
                <Row>
                  <Nav.Link className="error-link" as={NavLink} exact to="/">
                    Wróc do iSportio
                  </Nav.Link>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  )
}
export default Error
