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
import Skeleton from "@material-ui/lab/Skeleton";
const PlaceInfo = ({ match }) => {
  const building = gql`
  {
    sportObjectById(sportObjectId:"${match.params.buildingid}"){
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
    }
  }
`;
  const { loading, error, data } = useQuery(building);
  if (loading) return <Skeleton variant="rect" width={800} height={118} />;
  if (error) return `Error! ${error.message} `;
  console.log(data);
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
