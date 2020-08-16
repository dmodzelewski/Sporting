import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  FaSwimmingPool,
  FaBasketballBall,
  FaFutbol,
  FaDumbbell,
  FaQuidditch,
} from "react-icons/fa";
import { IoMdTennisball } from "react-icons/io";

export default class Choice extends Component {
  render() {
    return (
      <Container fluid className="choice">
        <Row>
          <Col className="choice-object">
            <Row>
              <Col className="choice-header">
                Wybierz interesujący Cię sport
              </Col>
            </Row>
            <Row className="choice-sports">
              <Col
                className="choice-sports-objects"
                style={{ background: "#819ABE" }}
              >
                <Row>
                  <Col className="choice-sports-body swimming">
                    <FaSwimmingPool className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Pływanie</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#CBA967" }}
              >
                <Row>
                  <Col className="choice-sports-body basketball">
                    <FaBasketballBall className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Koszykówka</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#CECECE" }}
              >
                <Row>
                  <Col className="choice-sports-body football">
                    <FaFutbol className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Piłka nożna</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#B4C084" }}
              >
                <Row>
                  <Col className="choice-sports-body tennis">
                    <IoMdTennisball className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Tenis</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#CDB8D4" }}
              >
                <Row>
                  <Col className="choice-sports-body yoga">
                    <FaSwimmingPool className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Yoga</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#CA6D6D" }}
              >
                <Row>
                  <Col className="choice-sports-body gym">
                    <FaDumbbell className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Siłownia</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#AB9382" }}
              >
                <Row>
                  <Col className="choice-sports-body quidditch">
                    <FaQuidditch className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Quidditch</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#DABB6C" }}
              >
                <Row>
                  <Col className="choice-sports-body fight">
                    <FaSwimmingPool className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Sporty walki</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
