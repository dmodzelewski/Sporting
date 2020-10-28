import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ExploreIcon from "@material-ui/icons/Explore";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";
const Header = (props) => {
  const address = gql`
  {
    sportObjectById(sportObjectId:"${props.match.params.buildingid}") {
          name
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
  const { loading, error, data } = useQuery(address);
  if (loading) return <Skeleton variant="rect" width={800} height={118} />;
  if (error) return `Error! ${error.message} `;
  return (
    <>
      <Col className="place-header no-padding">
        <h1 className="place-header-name no-padding">
          {data.sportObjectById.name}
        </h1>
        {console.log(data)}
        <Col className="no-padding">
          <a href="#map">
            <ExploreIcon className="place-header-street-icon " />
            <address className="place-header-link-address">
              <span itemProp="street">
                {data.sportObjectById.address.streetName}{" "}
                {data.sportObjectById.address.buildingNumber},{" "}
              </span>
              <span itemProp="postalCode">
                {data.sportObjectById.address.zipCode},{" "}
              </span>
              <span itemProp="cityLocalization">
                {data.sportObjectById.address.city},{" "}
              </span>
              <span itemProp="country">
                {data.sportObjectById.address.country.longname}
              </span>
            </address>
            {" | "}
          </a>
          <a className="place-header-link-address" href="tel:${phoneNumber}">
            {/* {props.phoneNumber} */}
          </a>
        </Col>
      </Col>
    </>
  );
};
export default Header;
Header.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};
