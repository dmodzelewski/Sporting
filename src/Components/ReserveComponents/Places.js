import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import StarRateIcon from "@material-ui/icons/StarRate";
import { Link } from "react-router-dom";
import Map from "../PlaceComponents/Map";
import { Image, Container } from "react-bootstrap";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const Places = (price) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const SetType = (type) => {
    if (type) {
      return type;
    } else if (price.choosenType) {
      return price.choosenType;
    } else {
      return null;
    }
  };
  const SetOpinion = (opinion) => {
    if (opinion == 0) {
      return null;
    } else {
      return opinion;
    }
  };
  const places = gql`
  {
    sportObjects{
       
            name
            _id
            address{
              streetName
              buildingNumber
              flatNumber
              city
              zipCode
              country{
                longName
                code
              }
              geoPoint
            }
      gymsFilter(gymType:${SetType(price.type)},minPrice:${
    price.price[0]
  },maxPrice:${price.price[1]},starRate:${SetOpinion(price.opinion)}){
              _id
              gymType{
                name
                namePL
              }
              name
              mainPhoto
              price
              description
              availability
              maxAvailability
              gymTags{
                name
                namePL
              }
              equipments{
                name
                namePL
              }
              reviews{
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
      length += item.gymsFilter.length;
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
        building.gymsFilter.map((gym) => (
          <>
            <li key={gym._id} style={{ listStyleType: "none" }}>
              {loading ? (
                <Skeleton variant="rect" width={800} height={118} />
              ) : (
                <Container className="places-object-main">
                  <Row className="places-object ">
                    <Col sm={12} md={4} className="no-padding">
                      <Image
                        className="places-photo"
                        src={gym.mainPhoto}
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
                        {gym.name}
                      </Col>
                      <Col className="no-padding">
                        <Col className="places-assessment no-padding">
                          <div className="places-score">
                            <StarRateIcon />

                            {CalculateOpionions(gym.reviews)}
                          </div>
                          <div className="places-opinions">
                            {HowManyOpininons(gym.reviews.length)}
                          </div>
                        </Col>
                        <Col className="places-tags-wrap">
                          <Col className="places-tags no-padding">
                            {getEqupment(gym.equipments)}
                          </Col>
                        </Col>
                      </Col>
                      <Col className="places-localization no-padding">
                        <Button
                          aria-describedby={id}
                          variant="contained"
                          color="primary"
                          onClick={handleClick}
                        >
                          Położenie – pokaż na mapie
                        </Button>
                        <Popover
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                        >
                          <Map {...building} {...price.other} />
                        </Popover>
                        <Col className="no-padding places-localization-place">
                          {building.address.city}
                        </Col>
                      </Col>
                    </Col>
                    <Col sm={12} md={4} className="places-endColumn">
                      <Col className="places-price no-padding">
                        <Col className="places-stack ">{gym.price} zł/h</Col>
                        <Link
                          className="places-button"
                          to={`/placeinfo/${building._id}/${gym._id}`}
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
        <Button
          className="places-show-more"
          variant="contained"
          onClick={() => showMore()}
        >
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
