import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import StarRateIcon from "@material-ui/icons/StarRate";
import { Link } from "react-router-dom";
import Map from "../PlaceComponents/Map";
import { Image, Popover, OverlayTrigger, Container } from "react-bootstrap";
import Skeleton from "@material-ui/lab/Skeleton";

const Places = () => {
  const places = gql`
    {
      sportObjects {
        name
        _id
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
          _id
          gymType {
            name
            namePL
          }
          name
          mainPhoto
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
          reviews {
            starRate
            description
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(places);
  if (loading) return <Skeleton variant="rect" width={800} height={118} />;
  if (error) return `Error! ${error.message} `;
  const HowManyGyms = () => {
    let length = 0;
    data.sportObjects.map((item) => {
      length += item.gyms.length;
    });
    return length;
  };
  const HowManyOpininons = (opinions) => {
    if (opinions == 0) {
      return "Brak Opinii";
    } else if (opinions == 1) {
      return "1 Opinia";
    } else {
      return `${opinions} Opinie`;
    }
  };
  const CalculateOpionions = (opinions) => {
    let suma = 0;
    if (opinions == undefined || opinions.length == 0) {
      return 0;
    } else {
      opinions.map((x) => {
        suma += x.starRate;
      });
      let wynik = suma / opinions.length;
      return wynik.toFixed(2);
    }
  };
  const getEqupment = (listOfEquipments) => {
    let equipments = [];
    if (listOfEquipments.length == 0) {
      return "Brak wyposażenia";
    } else {
      listOfEquipments.map((x) => {
        equipments.push(x.namePL);
      });
      return equipments;
    }
  };
  const showMore = () => {};
  return (
    <>
      <Row>
        <Col className="places-header"></Col>
      </Row>
      <Row>
        <Col className="places-counter no-padding">
          {HowManyGyms()} z {HowManyGyms()} obiektów
        </Col>
      </Row>

      {data.sportObjects.map((building) =>
        building.gyms.map((item) => (
          <>
            <li key={item._id} style={{ "list-style-type": "none" }}>
              {loading ? (
                <Skeleton variant="rect" width={800} height={118} />
              ) : (
                <Container className="places-object-main">
                  <Row className="places-object ">
                    <Col sm={12} md={4} className="no-padding">
                      <Image
                        className="places-photo"
                        src={item.mainPhoto}
                        alt="Zdjęcie"
                      />
                    </Col>
                    <Col
                      sm={12}
                      md={4}
                      className="places-centerColumn no-padding"
                    >
                      <Col className="places-name no-padding">
                        {building.name}
                        <br />
                        {item.name}
                      </Col>
                      <Col className="no-padding">
                        <Col className="places-assessment no-padding">
                          <div className="places-score">
                            <StarRateIcon />
                            {/* Nie działa */}
                            {CalculateOpionions(item.reviews)}
                          </div>
                          <div className="places-opinions">
                            {HowManyOpininons(item.reviews.length)}
                          </div>
                        </Col>
                        <Col className="places-tags-wrap">
                          <Col className="places-tags no-padding">
                            {getEqupment(item.equipments)}
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
                                <Map {...building} />
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          <Button variant="secondary">
                            Położenie – pokaż na mapie
                          </Button>
                        </OverlayTrigger>
                        <Col className="no-padding places-localization-place">
                          {building.address.city}
                        </Col>
                      </Col>
                    </Col>
                    <Col className="places-endColumn">
                      <Col className="places-price no-padding">
                        <Col className="places-stack ">
                          {/* {buildingInfo.priceValue} zł/h */}
                        </Col>
                        <Link
                          className="places-button"
                          to={`/placeinfo/${building._id}/${item._id}`}
                        >
                          Wyśwetl Obiekt
                        </Link>
                      </Col>
                    </Col>
                  </Row>
                </Container>
              )}
            </li>
            <br />
          </>
        ))
      )}

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
