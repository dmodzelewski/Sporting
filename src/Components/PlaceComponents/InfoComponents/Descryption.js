import React from "react";
import { Col } from "react-bootstrap";
import ShowMoreText from "react-show-more-text";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";

const Descryption = (props) => {
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
      <Col className="place-text-subheader no-padding">Opis</Col>
      <Col className="no-padding">
        <Col>
          <ShowMoreText
            className="place-text"
            lines={8}
            more="Show more"
            less="Show less"
            anchorClass=""
            expanded={false}
          >
            {data.gymById.description}
          </ShowMoreText>
        </Col>
      </Col>
    </Col>
  );
};
export default Descryption;
