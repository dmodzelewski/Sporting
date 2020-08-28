import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Col,
  Button,
  Container,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import PropTypes from "prop-types";

export default class Signin extends Component {
  render() {
    const { isAuthenticateted, login } = this.props.auth;
    return (
      <Container fluid className="ContainerSingin">
        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }} lg={{ offset: 3, span: 6 }}>
            <Form className="singinForm">
              <Card style={{ width: "20rem" }} className="SigninCard">
                <Card.Body>
                  <Card.Title>Dołacz do Isportio!</Card.Title>
                  <Card.Text>
                    Chesz zaczac ćwiczyć, ale nie wiesz gdzie? Próbujesz
                    przekazać swoje umiejętności ale nie wiesz jak? A może
                    zdedydowałeś się na rozwój swojego biznesu?
                  </Card.Text>
                </Card.Body>
                <ListGroup>
                  <ListGroupItem>Dołącz do nas </ListGroupItem>
                  <ListGroupItem>Wystarczy założyć konto</ListGroupItem>
                  <ListGroupItem>i gotowe!</ListGroupItem>
                </ListGroup>
              </Card>
              <Form.Group as={Row}>
                <Col sm={{ span: 8, offset: 4 }}>
                  {isAuthenticateted() ? (
                    <Link to="/profile">Wyświetl Profil</Link>
                  ) : (
                    <Button onClick={login}>Wejdź do ISportio!</Button>
                  )}
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
Signin.propTypes = {
  auth: PropTypes.string.isRequired,
};
