import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Place from "./Place";

const Places = () => {
  const [count, setCount] = useState(0);
  const showMore = () => {};
  return (
    <>
      <Row>
        <Col className="places-header">Obiekty Sportowe</Col>
      </Row>
      <Row>
        <Col className="places-counter no-padding">{count} z 0 obiektów</Col>
      </Row>
      <Place />
      <br />

      <Row>
        <Button className="places-show-more" onClick={(x) => showMore()}>
          Pokaz Więcej Wyników
        </Button>
      </Row>
    </>
  );
};
export default Places;
