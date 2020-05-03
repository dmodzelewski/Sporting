import React, { Component } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { FaSwimmingPool } from "react-icons/fa";

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
                  <Col className="choice-sports-body">
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
                  <Col className="choice-sports-body">
                    <FaSwimmingPool className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Pływanie</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#CECECE" }}
              >
               <Row>
                  <Col className="choice-sports-body">
                    <FaSwimmingPool className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Pływanie</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#B4C084" }}
              >
               <Row>
                  <Col className="choice-sports-body">
                    <FaSwimmingPool className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Pływanie</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#CDB8D4" }}
              >
               <Row>
                  <Col className="choice-sports-body">
                    <FaSwimmingPool className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Pływanie</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#CA6D6D" }}
              >
               <Row>
                  <Col className="choice-sports-body">
                    <FaSwimmingPool className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Pływanie</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#AB9382" }}
              >
               <Row>
                  <Col className="choice-sports-body">
                    <FaSwimmingPool className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Pływanie</Col>
                </Row>
              </Col>
              <Col
                className="choice-sports-objects"
                style={{ background: "#DABB6C" }}
              >
              <Row>
                  <Col className="choice-sports-body">
                    <FaSwimmingPool className="choice-sports-icons" />
                  </Col>
                </Row>
                <Row>
                  <Col className="choice-sports-text">Pływanie</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
