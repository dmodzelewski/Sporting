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
            <Col>
              <Row className="places-assessment">
                <div className="places-score">9.0</div>
                <div className="places-opinions">124 opinie</div>
              </Row>
            </Col>
            <Col className="places-price">Cennik</Col>
          </Col>
          <Col className="places-endColumn">
            <Col className="places-map">
              <NavLink as={NavLink}>Pokaż na mapie</NavLink>
            </Col>
            <Col className="places-button">
              <Button onClick={InfoHandler}>Wyświetl szczegóły</Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Place;
