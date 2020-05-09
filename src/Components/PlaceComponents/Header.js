import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <Container className="place-header no-padding" fluid>
      <Row>
        <Col className="center place-header-name">Basen Jagiełło</Col>
      </Row>
      <Row>
        <Col className="center place-header-street">
          Ul.Grunwaldzka 12, Gdańsk
        </Col>
      </Row>
    </Container>
  );
}
