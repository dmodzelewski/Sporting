import Search from "../Components/CommonComponents/Search/Search";
import { Row, Col, Container } from "react-bootstrap";
import React, { Component } from "react";
import Filter from "../Components/ReserveComponents/Filter/Filter";
import Places from "../Components/ReserveComponents/Places";
import PropTypes from "prop-types";

export default class Reserve extends Component {
  render() {
    return (
      <>
        {/* {console.log(this.props.location.state.passQuantity)}
        {console.log(this.props.location.state.passDate)}
        {console.log(this.props.location.state.passCity)}
        {console.log(this.props.location.state.passLongitude)}
        {console.log(this.props.location.state.passLatitude)} */}
        <Search />
        <Container className="reserve">
          <Row>
            <Col className="filter" md={3}>
              <Filter />
            </Col>
            <Col md={9}>
              <Places {...this.props} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
Reserve.propTypes = {
  location: PropTypes.object.isRequired,
};
