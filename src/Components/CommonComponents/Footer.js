import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <Col className="footer">
      <Row className="footer-headers">
        <Col>Informacje</Col>
        <Col>Dla właścicieli obiektów sportowych </Col>
        <Col>Kariera</Col>
        <Col>Support</Col>
      </Row>
      <Row className="footer-body">
        <Col>
          <Row>O nas</Row>
          <Row>Zasady dostępności</Row>
          <Row>Zasady bezpieczeństwa</Row>
          <Row>Newsletter</Row>
        </Col>
        <Col>
          <Row>Wynajmuj z nami</Row>
          <Row>Panel administracyjny</Row>
          <Row>Zasady wynajmu</Row>
          <Row>Często zadawane pytania</Row>
        </Col>
        <Col>
          <Row>Oferty pracy</Row>
          <Row>Poleć znajomego</Row>
        </Col>
        <Col>
          <Row>Centrum pomocy</Row>
        </Col>
      </Row>
    </Col>
  )
}
export default Footer
