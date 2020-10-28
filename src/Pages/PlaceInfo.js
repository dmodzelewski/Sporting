import React from "react";
import Header from "../Components/PlaceComponents/Header";
import Photos from "../Components/PlaceComponents/Gallery";
import { Col, Container } from "react-bootstrap";
import Informations from "../Components/PlaceComponents/Informations";
import Pricing from "../Components/PlaceComponents/Pricing";
import Comments from "../Components/PlaceComponents/Comments";
import Reservation from "../Components/PlaceComponents/Reservation";

const PlaceInfo = ({ match }) => {
  return (
    <>
      <Container>
        <Header match={match} />
        <Photos match={match} />
        <Col className="place-middleColumn">
          <Col className="place-text">
            <Informations />
          </Col>
          <Col>
            <Pricing />
          </Col>
        </Col>
        <Col>
          <Reservation />
        </Col>
        <Col>
          <Comments />
        </Col>
      </Container>
    </>
  );
};
export default PlaceInfo;
