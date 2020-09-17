import React from "react";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ExploreIcon from "@material-ui/icons/Explore";

const Header = (props) => {
  return (
    <>
      <Col className="place-header no-padding">
        <h1 className="place-header-name no-padding">{props.name}</h1>
        <Col className="no-padding">
          <a href="#map">
            <ExploreIcon className="place-header-street-icon " />
            <address className="place-header-link-address">
              <span itemProp="street">{props.address.streetAddress}, </span>
              <span itemProp="postalCode">{props.address.postalCode}, </span>
              <span itemProp="cityLocalization">
                {props.address.cityLocalization},{" "}
              </span>
              <span itemProp="country">{props.address.country}</span>
            </address>
            {" | "}
          </a>
          <a className="place-header-link-address" href="tel:${phoneNumber}">
            {props.phoneNumber}
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
