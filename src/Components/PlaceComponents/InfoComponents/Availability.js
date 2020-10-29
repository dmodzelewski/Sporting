import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

const Availability = (props) => {
  const GetMaxPlaces = (maxAvailability) => {
    if (maxAvailability == null) {
      return "Brak informacji";
    } else {
      return `${maxAvailability}`;
    }
  };
  const GetAvailablePlaces = (availability) => {
    if (availability == null) {
      return "Brak dostępnych miejsc";
      //na obecną godzinę
    } else {
      return `${availability}`;
    }
  };
  const availability = gql`
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
  const { loading, error, data } = useQuery(availability);
  if (loading) return <Skeleton />;
  if (error) return `Error! ${error.message} `;

  return (
    <Col>
      <Col className="place-text-subheader no-padding">Dostępne Miejsca</Col>
      <Col className="no-padding">
        <Col>Ilość miejsc: {GetMaxPlaces(data.gymById.maxAvailability)}</Col>

        <Col>
          Ilość dostepnych miejsc:
          {" " + GetAvailablePlaces(data.gymById.availability)}
        </Col>
      </Col>
    </Col>
  );
};
Availability.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Availability;
