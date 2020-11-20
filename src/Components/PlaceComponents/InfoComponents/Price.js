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
  const price = gql`
    query gymById($gymId: ID) {
      gymById(gymId: $gymId) {
        description
        price
        availability
        maxAvailability
        equipments {
          name
          namePL
        }
      }
    }
  `;
  const res = useQuery(price, {
    variables: { gymId: props.match.match.params.gymid },
  });
  if (res.loading) return <Skeleton />;
  if (res.error) return `Error! ${res.error.message} `;

  return (
    <Col>
      <Col className="place-text-subheader no-padding">Cena</Col>
      <Col className="no-padding">
        <Col>{GetPrice(res.data.gymById.price)} za godzinę wynajęcia</Col>
      </Col>
    </Col>
  );
};
Price.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Price;
