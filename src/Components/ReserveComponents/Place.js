import {
  Col,
  Row,
  Image,
  Popover,
  OverlayTrigger,
  Button,
  Container,
} from "react-bootstrap";
import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useHistory } from "react-router-dom";
import Map from "../PlaceComponents/Map";
import PropTypes from "prop-types";

const Place = (props) => {
  const history = useHistory();
  function InfoHandler() {
    history.push("placeinfo");
  }

  return (
    <>
      <Container className="places-object-main">
        <Row className="places-object ">
          <Col sm={12} md={4} className="no-padding">
            <Image
              className="places-photo "
              src="https://th.bing.com/th/id/OIP.X-wLrMQg9AqmTO7NkjBLagHaDe?pid=Api&rs=1"
              alt="Zdjęcie"
            />
          </Col>
          <Col sm={12} md={4} className="places-centerColumn no-padding">
            <Col className="places-name no-padding">{props.name}</Col>
            <Col className="no-padding">
              <Col className="places-assessment no-padding">
                <div className="places-score">
                  <StarRateIcon />
                  {props.opinionValue}
                </div>
                <div className="places-opinions">
                  {props.numberOfOpinions} opinie
                </div>
              </Col>
              <Col className="places-tags-wrap">
                <Col className="places-tags no-padding">
                  {props.extraOffers.map((x) => (
                    <p key={x} className="tag">
                      {x}
                      {","}
                      &nbsp;
                    </p>
                  ))}
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
                      <Map {...props} />
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button variant="secondary">Położenie – pokaż na mapie</Button>
              </OverlayTrigger>
              <Col className="no-padding places-localization-place">
                {props.objectCity}
              </Col>
            </Col>
          </Col>
          <Col className="places-endColumn">
            <Col className="places-price no-padding">
              <Col className="places-stack ">{props.priceValue} zł/h</Col>
              <Button className="places-button" onClick={InfoHandler}>
                Wyświetl szczegóły
              </Button>
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
};

export default Place;
