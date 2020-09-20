import React, { useCallback, useState } from "react";
import Search from "../Components/CommonComponents/Search/Search";
import { Row, Col, Container } from "react-bootstrap";
import PriceFilter from "../Components/ReserveComponents/Filter/PriceFilter";
import ReviewFilter from "../Components/ReserveComponents/Filter/ReviewFilter";
import Places from "../Components/ReserveComponents/Places";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Reserve = (props) => {
  let filterProps = {
    price: [],
  };
  const [state, setState] = useState({
    checkedParking: false,
    checkedFreeEntry: false,
    checkedFreeAccessories: false,
  });
  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const FilterCosts = (c) => {
    filterProps.price = c;
  };
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
            <Row>
              <Col className="filter-section-header">Udogodnienia</Col>
            </Row>
            <Row className="filters">
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={state.checkedParking}
                    onChange={handleChange}
                    name="checkedA"
                  />
                }
                label="Darmowy Parking"
              />
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={state.checkedFreeEntry}
                    onChange={handleChange}
                    name="checkedB"
                  />
                }
                label="Dzieci - Wstęp Wolny"
              />
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={state.checkedFreeAccessories}
                    onChange={handleChange}
                    name="checkedC"
                  />
                }
                label="Darmowe akcesoria"
              />
            </Row>
            <Row>
              <Col className="filter-section-header">Cena</Col>
            </Row>
            <PriceFilter Costs={FilterCosts} />
            <Row>
              <Col className="filter-section-header">Ocena</Col>
            </Row>
            <Col className="filters">
              <ReviewFilter isReadOnly={false} />
            </Col>
          </Col>
          {console.log(filterProps)}
          <Col md={9}>
            <Places {...props} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
Reserve.propTypes = {
  location: PropTypes.object.isRequired,
};
export default Reserve;
