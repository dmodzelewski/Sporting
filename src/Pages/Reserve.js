import React, { useState } from "react";
import Search from "../Components/CommonComponents/Search/Search";
import { Row, Col, Container, Form } from "react-bootstrap";
import ReviewFilter from "../Components/ReserveComponents/Filter/ReviewFilter";
import Places from "../Components/ReserveComponents/Places";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import TagFilter from "../Components/ReserveComponents/Filter/TagFilter";
const Reserve = (props) => {
  const [opinion, setOpinion] = useState(0);
  const [price, setValue] = useState([0, 200]);
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
  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };
  const FilterReview = (opinion) => {
    setOpinion(opinion);
  };
  function valuetext(price) {
    return `${price}°C`;
  }
  return (
    <>
      {/* {console.log(props.location.state.passTag)} */}
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
                    name="checkedParking"
                  />
                }
                label="Darmowy Parking"
              />
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={state.checkedFreeEntry}
                    onChange={handleChange}
                    name="checkedFreeEntry"
                  />
                }
                label="Dzieci - Wstęp Wolny"
              />

              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={state.checkedFreeAccessories}
                    onChange={handleChange}
                    name="checkedFreeAccessories"
                  />
                }
                label="Darmowe akcesoria"
              />
            </Row>
            <Row>
              <Col className="filter-section-header">Cena</Col>
            </Row>
            <Row className="filters">
              <Col>
                <Form>
                  <Typography id="range-slider" gutterBottom>
                    Cena za godzinę
                  </Typography>
                  <Slider
                    value={price}
                    onChange={handlePriceChange}
                    min={0}
                    max={200}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
                  <Row>
                    <Col className="filter-price">
                      <TextField
                        id="outlined-number"
                        label="Od"
                        type="number"
                        value={price[0]}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-number"
                        label="Do"
                        type="number"
                        value={price[1]}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col className="filter-section-header">Ocena</Col>
            </Row>
            <Col className="filters">
              <ReviewFilter Review={FilterReview} isReadOnly={false} />
            </Col>
            <Row>
              <Col className="filter-section-header">Tagi</Col>
            </Row>
            <Col className="filters">
              <TagFilter />
            </Col>
          </Col>
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
