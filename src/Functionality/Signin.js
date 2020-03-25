import React from 'react'
import { Form, Col, Button, Container, Row } from 'react-bootstrap'


export default function Signin() {
  return (
    <Container>
      <Row>
        <Col sm={{ span: 3, offset: 0 }} md={{ offset: 1 }} >
          Witaj w ISportio
      </Col>

        <Col sm={9} md={{ span: 7, offset: 1 }} >
          <Form>
            <Form.Group controlId="FormEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="email@example.com" />
            </Form.Group>

            <Form.Group controlId="FormPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="FormRepeatPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control type="password" placeholder="Repat Password" />
            </Form.Group>

            <Form.Row>

              <Form.Group as={Col} controlId="FormProvince">
                <Form.Label>Province</Form.Label>
                <Form.Control as="select" value="Choose...">
                  <option>Choose</option>
                  <option>Gdańsk...Itd</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="FormCity">
                <Form.Label>City</Form.Label>
                <Form.Control as="select" value="Choose...">
                  <option>Choose</option>
                  <option>Pomorskie...itd</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>

              <Form.Group as={Col} sm={5} controlId="FormAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Grunwaldzka Street" />
              </Form.Group>

              <Form.Group as={Col} xs={4} sm={3} controlId="FormNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control placeholder="12 or 12/6" />
              </Form.Group>

              <Form.Group as={Col} xs={4} controlId="FormZipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control placeholder="83-123" />
              </Form.Group>
            </Form.Row>
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign in</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
