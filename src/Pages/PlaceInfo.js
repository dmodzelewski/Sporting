import React from "react";
import Header from "../Components/PlaceComponents/Header";
import Photos from "../Components/PlaceComponents/Gallery";
import { Col, Container } from "react-bootstrap";
import Informations from "../Components/PlaceComponents/Informations";
import Pricing from "../Components/PlaceComponents/Pricing";
import Comments from "../Components/PlaceComponents/Comments";
import Reservation from "../Components/PlaceComponents/Reservation";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
const PlaceInfo = ({ match }) => {
  const gyms = gql`
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
  const { loading, error, data } = useQuery(gyms);
  if (loading) return <p className="search-filter-city">Loading...</p>;
  if (error) return `Error! ${error.message} `;
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
      s{" "}
      <Container>
        {console.log(match)}
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
