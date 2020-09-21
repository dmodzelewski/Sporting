import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Place from "./Place";
import PropTypes from "prop-types";

const Places = (props) => {
  let propsPlaces = {
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
    longitude: props.location.state.passLongitude,
    latitude: props.location.state.passLatitude,
    objectCity: props.location.state.passCity,
  };

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
      <Place {...propsPlaces} />
      <br />

      <Row>
        <Button className="places-show-more" onClick={() => showMore()}>
          Pokaz Więcej Wyników
        </Button>
      </Row>
    </>
  );
};
Places.propTypes = {
  location: PropTypes.object.isRequired,
};
export default Places;
