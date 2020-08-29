import { Col, Row, Image, NavLink, Button, Container } from "react-bootstrap";
import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useHistory } from "react-router-dom";
const Place = () => {
  const history = useHistory();
  function InfoHandler() {
    history.push("placeinfo");
  }

  return (
    <>
      <Container className="places-object-main">
        <Row className="places-object ">
          <Col sm={12} md={4} className="no-padding">
            <Image
              className="places-photo "
              src="https://th.bing.com/th/id/OIP.X-wLrMQg9AqmTO7NkjBLagHaDe?pid=Api&rs=1"
              alt="Zdjęcie"
            />
          </Col>
          <Col sm={12} md={4} className="places-centerColumn no-padding">
            <Col className="places-name no-padding">Basen Jagiełło</Col>
            <Col className="no-padding">
              <Col className="places-assessment no-padding">
                <div className="places-score">
                  <StarRateIcon />
                  5.0
                </div>
                <div className="places-opinions">124 opinie</div>
              </Col>
              <Col className="places-tags-wrap">
                <Col className="places-tags no-padding">
                  <p className="tag">Basen </p>
                  <p className="tag">, Darmowy parking </p>
                  <p className="tag">, Prysznice </p>
                  <p className="tag">, Sprzęt ratowniczy</p>
                </Col>
              </Col>
            </Col>
            <Col className="places-localization no-padding">
              <NavLink
                className="places-localization-link no-padding"
                as={NavLink}
              >
                Położenie – pokaż na mapie
              </NavLink>
              <Col className="no-padding places-localization-place">Gdańsk</Col>
            </Col>
          </Col>
          <Col className="places-endColumn">
            <Col className="places-price no-padding">
              <Col className="places-stack ">25 zł/h</Col>
              <Button className="places-button" onClick={InfoHandler}>
                Wyświetl szczegóły
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Place;
