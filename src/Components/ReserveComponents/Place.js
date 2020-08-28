import { Col, Row, Image, NavLink, Button, Container } from "react-bootstrap";
import React from "react";
import { useHistory } from "react-router-dom";
const Place = () => {
  const history = useHistory();
  function InfoHandler() {
    history.push("placeinfo");
  }
  return (
    <>
      <Container className="places-object-main">
        <Row className="places-object">
          <Col className="no-padding">
            <Image
              className="places-photo "
              src="https://th.bing.com/th/id/OIP.X-wLrMQg9AqmTO7NkjBLagHaDe?pid=Api&rs=1"
              alt="Zdjęcie"
            />
          </Col>
          <Col className="places-centerColumn no-padding">
            <Col className="places-name no-padding">Basen Jagiełło</Col>
            <Row className="places-assessment">
              <Col>Ocena</Col>
              <Col>Liczba Opinii</Col>
            </Row>

            <Col>Cennik</Col>
          </Col>
          <Col>
            <NavLink as={NavLink}>zobacz ceny</NavLink>
            <Button onClick={InfoHandler}>Wyświetl szczegóły</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Place;
