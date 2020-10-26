import {
  Col,
  Row,
  Image,
  Popover,
  OverlayTrigger,
  Button,
  Container,
} from "react-bootstrap";
import React, { useState } from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import { Link } from "react-router-dom";
import Map from "../PlaceComponents/Map";
import PropTypes from "prop-types";

const Place = (item, building) => {
  // const [city] = useState(buildingInfo.address.city);

  return (
    <>
      <Container className="places-object-main">
        <Row className="places-object ">
          {console.log(building)}
          <Col sm={12} md={4} className="no-padding">
            <Image
              className="places-photo "
              src="https://th.bing.com/th/id/OIP.X-wLrMQg9AqmTO7NkjBLagHaDe?pid=Api&rs=1"
              alt="Zdjęcie"
            />
          </Col>
          <Col sm={12} md={4} className="places-centerColumn no-padding">
            <Col className="places-name no-padding">
              {/* {buildingInfo.name} */}
            </Col>
            <Col className="no-padding">
              <Col className="places-assessment no-padding">
                <div className="places-score">
                  <StarRateIcon />
                  {/* {buildingInfo.opinionValue} */}
                </div>
                <div className="places-opinions">
                  {/* {buildingInfo.numberOfOpinions} opinie */}
                </div>
              </Col>
              <Col className="places-tags-wrap">
                <Col className="places-tags no-padding">
                  {/* {buildingInfo.gyms.equipments} */}
                  {/* #TODO */}
                </Col>
              </Col>
            </Col>
            <Col className="places-localization no-padding">
              <OverlayTrigger
                trigger="click"
                key={"bottom"}
                placement={"bottom"}
                overlay={
                  <Popover id="popovermap">
                    <Popover.Content>
                      {/* <Map {...buildingInfo} /> */}
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button variant="secondary">Położenie – pokaż na mapie</Button>
              </OverlayTrigger>
              <Col className="no-padding places-localization-place">
                {/* {city} */}
              </Col>
            </Col>
          </Col>
          <Col className="places-endColumn">
            <Col className="places-price no-padding">
              <Col className="places-stack ">
                {/* {buildingInfo.priceValue} zł/h */}
              </Col>
              <Link className=".places-button" to={`/placeinfo/${item._id}`}>
                Wyśwetl Obiekt
              </Link>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
Place.propTypes = {
  name: PropTypes.string.isRequired,
  opinionValue: PropTypes.number.isRequired,
  numberOfOpinions: PropTypes.number.isRequired,
  extraOffers: PropTypes.array.isRequired,
  objectCity: PropTypes.string.isRequired,
  priceValue: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default Place;
