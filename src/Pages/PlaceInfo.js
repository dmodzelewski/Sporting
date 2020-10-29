import React from "react";
import Header from "../Components/PlaceComponents/Header";
import Photos from "../Components/PlaceComponents/Gallery";
import { Col, Container } from "react-bootstrap";
import Informations from "../Components/PlaceComponents/Informations";
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
            <Informations match={match} />
          </Col>
        </Col>
        <Col>
          <Reservation match={match} />
        </Col>
        <Col>
          <Comments match={match} />
        </Col>
       
      </Container>
    </>
  );
};
export default PlaceInfo;
