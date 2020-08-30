import React from "react";
import Header from "../Components/PlaceComponents/Header";
import Photos from "../Components/PlaceComponents/Gallery";
import { Col, Container } from "react-bootstrap";
import Informations from "../Components/PlaceComponents/Informations";
import Pricing from "../Components/PlaceComponents/Pricing";
import Comments from "../Components/PlaceComponents/Comments";
import Map from "../Components/PlaceComponents/Map";
const PlaceInfo = () => {
  let props = {
    name: "Basen Jagiełło",
    address: {
      streetAddress: "Grunwaldzka 12",
      postalCode: "80-232",
      cityLocalization: "Gdańsk, pomorskie",
      country: "Polska",
    },
    phoneNumber: "+48 234 454 556",
  };
  return (
    <>
      <Container>
        <Header {...props} />
        <Photos />
        <Col className="place-middleColumn">
          <Col className="place-text">
            <Informations />
          </Col>
          <Col>
            <Pricing />
          </Col>
        </Col>

        <Col>
          <Comments />
        </Col>
      </Container>
    </>
  );
};
export default PlaceInfo;
