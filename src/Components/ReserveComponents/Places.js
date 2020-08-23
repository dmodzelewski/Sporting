import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Place from "./Place";

const Places = () => {
  return (
    <>
      <Row>
        <Col className="places-header">Obiekty Sportowe</Col>
      </Row>
      <Row>
        <Col className="places-counter">12 z 123 obiektów</Col>
      </Row>

      <Place className="place" />
      <br />

      <Row>
        <Col className="places-show-more center">Pokaz Więcej Wyników</Col>
      </Row>
    </>
  );
};
export default Places;
