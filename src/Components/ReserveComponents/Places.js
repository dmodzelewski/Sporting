import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Place from "./Place";
import PropTypes from "prop-types";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

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

  const places = gql`
    {
      sportObjects {
        name
        address {
          streetName
          buildingNumber
          flatNumber
          city
          zipCode
          country {
            longName
            code
          }
          geoPoint
        }
        gyms {
          gymType {
            name
            namePL
          }
          name
          description
          availability
          maxAvailability
          gymTags {
            name
            namePL
          }
          equipments {
            name
            namePL
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(places);
  if (loading) return <p className="search-filter-city">Loading...</p>;
  if (error) return `Error! ${error.message} `;
  const HowManyGyms = data.sportObjects.length;
  const showMore = () => {};
  return (
    <>
      <Row>
        <Col className="places-header"></Col>
      </Row>
      <Row>
        <Col className="places-counter no-padding">
          {HowManyGyms} z {HowManyGyms} obiektów
        </Col>
      </Row>
      {
      data.places.map
      }
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
