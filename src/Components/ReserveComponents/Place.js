import { Row, Col, Image, Container, NavLink, Button } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";
import React from "react";
import { useHistory } from "react-router-dom";
const Place = () => {
  const history = useHistory();
  function InfoHandler() {
    history.push("placeinfo");
  }
  return (
    <Container className="places-object">
      <Row>
        <Col md={4} className="no-padding">
          <Image
            className="places-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg"
            fluid
          />
        </Col>
        <Col md={8} className="places-info">
          <Row>
            <Col className="places-section" md={12}>
              <Row>
                <Col className="places-name center" md={8}>
                  Basen Jagiełło
                </Col>
                <Col md={4} className="places-localization">
                  <Row>
                    {" "}
                    <Col className="no-padding center">
                      2.5 Km od twojej lokalizacji
                    </Col>
                  </Row>
                  <Row>
                    <Col className="no-padding center">
                      <NavLink as={NavLink}>zobacz maoę</NavLink>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col className="places-section" md={12}>
              <Row>
                <Col md={3} className="center">
                  <Row>
                    <Col className="places-text">liczba pomieszczeń</Col>
                  </Row>
                  <Row>
                    <Col className="">2</Col>
                  </Row>
                  <Row>
                    <Col className="places-text ceter">Max osób</Col>
                  </Row>
                  <Row>
                    <Col className="">40</Col>
                  </Row>
                </Col>
                {/* Zastosować map */}
                <Col md={3}>
                  <Row>
                    <Col md={1}>
                      <FaArrowAltCircleRight />
                    </Col>
                    <Col className="places-text"> Darmowy Parking</Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      <FaArrowAltCircleRight />
                    </Col>
                    <Col className="places-text"> Brodzik dla dzieci </Col>
                  </Row>

                  <Row>
                    <Col md={1}>
                      <FaArrowAltCircleRight />
                    </Col>
                    <Col className="places-text"> Prysznice</Col>
                  </Row>
                  <Row>
                    <Col md={1}>
                      <FaArrowAltCircleRight />
                    </Col>
                    <Col className="places-text"> Suszarki </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col className="places-section" md={12}>
              <Row>
                <Col className="center" md={1}>
                  <Row>
                    <Col className="places-rate center">2.8</Col>
                  </Row>
                </Col>
                <Col md={2}>
                  <Row>
                    <Col className="places-text">Średni</Col>
                  </Row>
                  <Row>
                    <Col className="places-text"> 1234 opinii</Col>
                  </Row>
                </Col>
                <Col>
                  <NavLink as={NavLink}>zobacz ceny</NavLink>
                </Col>
                <Col>
                  <Button className="places-button" onClick={InfoHandler}>
                    Wyświetl szczegóły
                  </Button>{" "}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Place;
