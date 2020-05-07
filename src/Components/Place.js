import React, { Component } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

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
          <Col md={8} className="two">
            <Row>
              <Col md={12}>
                <Row>
                  <Col className="center" md={1}>
                    <Row>
                      <Col className="place-rate center">2.8</Col>
                    </Row>
                  </Col>
                  <Col md={2}>
                    <Row>
                      <Col className="place-rate-text">Średni</Col>
                    </Row>
                    <Row>
                      <Col className="place-rate-text"> 1234 opinii</Col>
                    </Row>
                  </Col>
                  <Col className="place-name" md={4}>
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
                      <Col className="no-padding center">zobacz maoę</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              {" "}
              <Col md={12}></Col>
            </Row>
            <Row>
              {" "}
              <Col md={12}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
