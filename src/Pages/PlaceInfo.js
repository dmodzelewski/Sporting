import React from "react";
import Header from "../Components/PlaceComponents/Header";
import Photos from "../Components/PlaceComponents/Photos";
import { Row, Col } from "react-bootstrap";
import Informations from "../Components/PlaceComponents/Informations";
import Pricing from "../Components/PlaceComponents/Pricing";

export default function PlaceInfo() {
  return (
    <>
      <Header />
      <Photos />
      <Row>
        <Col md={7}>
          <Informations />
        </Col>
        <Col md={4}>
          
          <Pricing />
        </Col>
      </Row>
    </>
  );
}
