import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image from "../Image/tenor.gif";
const Error = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col className="center error text">
              <h1>Chyba się zgubiłeś</h1>
            </Col>
          </Row>
          <Row>
            <Col className="error-gif">
              <Image src={image} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Error;
