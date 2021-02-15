import React from 'react'
import { Row, Col, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    // <Col className="footer">
    //   <Row className="footer-headers">
    //     <Col>Informacje</Col>
    //     <Col>Dla właścicieli obiektów sportowych </Col>
    //     <Col>Kariera</Col>
    //     <Col>Support</Col>
    //   </Row>
    //   <Row className="footer-body">
    //     <Col>
    //       <Row>O nas</Row>
    //       <Row>Zasady dostępności</Row>
    //       <Row>Zasady bezpieczeństwa</Row>
    //       <Row>Newsletter</Row>
    //     </Col>
    //     <Col>
    //       <Row>Wynajmuj z nami</Row>
    //       <Row>Panel administracyjny</Row>
    //       <Row>Zasady wynajmu</Row>
    //       <Row>Często zadawane pytania</Row>
    //     </Col>
    //     <Col>
    //       <Row>Oferty pracy</Row>
    //       <Row>Poleć znajomego</Row>
    //     </Col>
    //     <Col>
    //       <Row>Centrum pomocy</Row>
    //     </Col>
    //   </Row>
    // </Col>
    <Col className="mainfooter footer">
      <Col className="footer-middle">
        <Container>
          <Row>
            <Col sm={6} md={3}>
              <Col className="footer-pad">
                <h4>Informacje</h4>
                <ul className="list-unstyled">
                  <li>
                    <Nav.Link as={NavLink} exact to="/#">
                      O nas
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={NavLink} exact to="/#">
                      Zasady dostępności
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={NavLink} exact to="/#">
                      Zasady bezpieczeństwa
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={NavLink} exact to="/#">
                      Newsletter
                    </Nav.Link>
                  </li>
                </ul>
              </Col>
            </Col>{' '}
            <Col sm={6} md={3}>
              <Col className="footer-pad">
                <h4>Dla właścicieli obiektów sportowych</h4>
                <ul className="list-unstyled">
                  <li>
                    <Nav.Link as={NavLink} exact to="/#">
                      Wynajmuj z nami
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={NavLink} exact to="/#">
                      Panel administracyjny
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={NavLink} exact to="/#">
                      Zasady wynajmu
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={NavLink} exact to="/#">
                      Często zadawane pytania
                    </Nav.Link>
                  </li>
                </ul>
              </Col>
            </Col>{' '}
            <Col sm={6} md={3}>
              <Col className="footer-pad">
                <h4>Kariera</h4>
                <ul className="list-unstyled">
                  <li>
                    <Nav.Link as={NavLink} exact to="/#">
                      Oferty pracy
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={NavLink} exact to="/#">
                      Poleć znajomego
                    </Nav.Link>
                  </li>
                </ul>
              </Col>
            </Col>
            <Col md={3}>
              <h4>Support</h4>
              <ul className="list-unstyled">
                <li>
                  <Nav.Link as={NavLink} exact to="/#">
                    Oferty pracy
                  </Nav.Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Col>
    </Col>
  )
}
export default Footer
