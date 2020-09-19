import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Place from "./Place";
const Places = (cords) => {
  let props = {
    name: "Basen Jagiełło",
    numberOfOpinions: 23,
    opinionValue: 5.0,
    priceValue: 25,
    extraOffers: [
      "Basen",
      "Darmowy parking",
      "Prysznice",
      "Sprzęt ratowniczy ",
    ],
    longitude: cords.location.state.passLongitude,
    latitude: cords.location.state.passLatitude,
    objectCity: cords.location.state.passCity,
  };

  const [count, setCount] = useState(0);

  const showMore = () => {};
  return (
    <>
      {console.log(cords.location.state.passLatitude)}
      <Row>
        <Col className="places-header">Obiekty Sportowe</Col>
      </Row>
      <Row>
        <Col className="places-counter no-padding">{count} z 0 obiektów</Col>
      </Row>
      <Place {...props} />
      <br />

      <Row>
        <Button className="places-show-more" onClick={() => showMore()}>
          Pokaz Więcej Wyników
        </Button>
      </Row>
    </>
  );
};
export default Places;
