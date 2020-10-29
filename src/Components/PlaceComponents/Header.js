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
  const phone = gql`
  {
    gymById(gymId: "${props.match.params.gymid}") {
      phoneNumber
    }
  }
  `;
  const getPhoneNumber = (phone) => {
    if (phone == null) {
      return "Brak numeru telefonu";
    } else {
      return phone;
    }
  };
  const res = useQuery(address);
  const secondRes = useQuery(phone);
  if (res.loading) return <Skeleton variant="rect" width={800} height={118} />;
  if (res.error) return `Error! ${res.error.message} `;
  if (secondRes.loading)
    return <Skeleton variant="rect" width={800} height={118} />;
  if (secondRes.error) return `Error! ${res.error.message} `;
  return (
    <>
      <Col className="place-header no-padding">
        <h1 className="place-header-name no-padding">
          {res.data.sportObjectById.name}
        </h1>
        <Col className="no-padding">
          <a href="#map">
            <ExploreIcon className="place-header-street-icon " />
            <address className="place-header-link-address">
              <span itemProp="street">
                {res.data.sportObjectById.address.streetName}{" "}
                {res.data.sportObjectById.address.buildingNumber},{" "}
              </span>
              <span itemProp="postalCode">
                {res.data.sportObjectById.address.zipCode},{" "}
              </span>
              <span itemProp="cityLocalization">
                {res.data.sportObjectById.address.city},{" "}
              </span>
              <span itemProp="country">
                {res.data.sportObjectById.address.country.longname}
              </span>
            </address>
            {" | "}
          </a>
          <a className="place-header-link-address" href="tel:${phoneNumber}">
            {getPhoneNumber(secondRes.data.gymById.phoneNumber)}
          </a>
        </Col>
      </Col>
    </>
  );
};
export default Header;
Header.propTypes = {
  match: PropTypes.object.isRequired,
};
