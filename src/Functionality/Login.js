import React from "react";
import { Form, Col, Button, Container, Row } from "react-bootstrap";

export default function Login() {
  return (
    <Container>
      <Row>
        <Col sm={{ span: 7, offset: 3 }}>
          <Form>
            <Form.Group controlId="FormLoginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="email@example.com" />
            </Form.Group>

            <Form.Group controlId="FormLoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Row}>
                <Col sm={{ span: 4, offset: 2 }}>
                  <Button type="submit">Login</Button>
                </Col>
                <Col sm={{ span: 6 }}>
                  <Button type="submit">Register</Button>
                </Col>
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
