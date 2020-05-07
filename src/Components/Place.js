import React, { Component } from "react";
import { Row, Col, Image, Container, NavLink, Button } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";
export default class Place extends Component {
  render() {
    return (
      <Container className="place-object">
        <Row>
          <Col md={4} className="no-padding">
            <Image
              className="place-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg"
              fluid
            />
          </Col>
          <Col md={8} className="place-info">
            <Row>
              <Col className="place-section" md={12}>
                <Row>
                  <Col className="place-name center" md={8}>
                    Basen Jagiełło
                  </Col>
                  <Col md={4} className="place-localization">
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
              <Col className="place-section" md={12}>
                <Row>
                  <Col md={3} className="center">
                    <Row>
                      <Col className="place-text">liczba pomieszczeń</Col>
                    </Row>
                    <Row>
                      <Col className="">2</Col>
                    </Row>
                    <Row>
                      <Col className="place-text ceter">Max osób</Col>
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
                      <Col className="place-text"> Darmowy Parking</Col>
                    </Row>
                    <Row>
                      <Col md={1}>
                        <FaArrowAltCircleRight />
                      </Col>
                      <Col className="place-text"> Brodzik dla dzieci </Col>
                    </Row>

                    <Row>
                      <Col md={1}>
                        <FaArrowAltCircleRight />
                      </Col>
                      <Col className="place-text"> Prysznice</Col>
                    </Row>
                    <Row>
                      <Col md={1}>
                        <FaArrowAltCircleRight />
                      </Col>
                      <Col className="place-text"> Suszarki </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              {" "}
              <Col className="place-section" md={12}>
                <Row>
                  <Col className="center" md={1}>
                    <Row>
                      <Col className="place-rate center">2.8</Col>
                    </Row>
                  </Col>
                  <Col md={2}>
                    <Row>
                      <Col className="place-text">Średni</Col>
                    </Row>
                    <Row>
                      <Col className="place-text"> 1234 opinii</Col>
                    </Row>
                  </Col>
                  <Col>
                    <NavLink as={NavLink}>zobacz ceny</NavLink>
                  </Col>
                  <Col>
                    <Button className="place-button">Wyświetl szczegóły</Button>{" "}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
