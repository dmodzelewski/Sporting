import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Place from "./Place";

const Places = () => {
  return (
    <>
      <Row>
        <Col className="places-header">Obiekty Sportowe</Col>
      </Row>
      <Row>
        <Col>12 z 123 obiektów</Col>
      </Row>
      <Place />
      <br />

      <Row>
        <Button className="places-show-more">Pokaz Więcej Wyników</Button>
      </Row>
    </>
  );
};
export default Places;
