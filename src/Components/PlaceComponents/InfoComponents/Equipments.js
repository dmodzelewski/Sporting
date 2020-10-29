import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

const Equipments = (props) => {
  const GetEqupment = (items) => {
    const equipments = [];
    if (items.length == 0) {
      return "Brak wyposażenia";
    } else {
      items.map((x) => {
        equipments.push(x.namePL);
      });
      return equipments;
    }
  };

  const equip = gql`
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
  const { loading, error, data } = useQuery(equip);
  if (loading) return <Skeleton />;
  if (error) return `Error! ${error.message} `;

  return (
    <Col>
      <Col className="place-text-subheader no-padding">Wyposażenie </Col>
      <Col className="no-padding">
        <Col>
          <ul>
            {GetEqupment(data.gymById.equipments).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Col>
      </Col>
    </Col>
  );
};
Equipments.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Equipments;
