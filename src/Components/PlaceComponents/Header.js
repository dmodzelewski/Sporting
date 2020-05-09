import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <Container>
      <Row>
        <Col className="center">Basen Jagiełło</Col>
      </Row>
      <Row>
        <Col className="center">Ul.Grunwaldzka 12, Gdańsk</Col>
      </Row>
    </Container>
  );
}
