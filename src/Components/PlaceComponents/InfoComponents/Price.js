import React from "react";
import { Col } from "react-bootstrap";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";
import PropTypes from "prop-types";

const Price = (props) => {
  const GetPrice = (price) => {
    if (price == null) {
      return "brak ceny";
    } else {
      return `${price} zł/h`;
    }
  };
  const descryption = gql`
    {
      gymById(gymId: "${props.match.match.params.gymid}") {
            description
            price
            availability
            maxAvailability
            equipments{
              name
              namePL
            }
          }
        }
    `;
  const { loading, error, data } = useQuery(descryption);
  if (loading) return <Skeleton />;
  if (error) return `Error! ${error.message} `;

  return (
    <Col>
      <Col className="place-text-subheader no-padding">Cena</Col>
      <Col className="no-padding">
        <Col>{GetPrice(data.gymById.price)} za godzinę wynajęcia</Col>
      </Col>
    </Col>
  );
};
Price.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Price;
