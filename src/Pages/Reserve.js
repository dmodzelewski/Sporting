import React, { useState } from "react";
import Search from "../Components/CommonComponents/Search/Search";
import { Row, Col, Container, Form } from "react-bootstrap";
import ReviewFilter from "../Components/ReserveComponents/Filter/ReviewFilter";
import Places from "../Components/ReserveComponents/Places";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import TypeFilter from "../Components/ReserveComponents/Filter/TypeFilter";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";
import FilterTag from "../Components/ReserveComponents/Filter/FilterTag";

const Reserve = (props) => {
  const types = gql`
    {
      gymTags {
        _id
        namePL
      }
    }
  `;
  const [opinion, setOpinion] = useState(0);
  const [price, setValue] = useState([0, 200]);
  const [type, settype] = useState();
  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };
  const FilterReview = (opinion) => {
    setOpinion(opinion);
  };
  const FilterType = (type) => {
    settype(type);
  };
  function valuetext(price) {
    return `${price}°C`;
  }
  const res = useQuery(types);
  if (res.loading) return <Skeleton variant="rect" width={800} height={118} />;
  if (res.error) return `Error! ${res.error.message} `;

  return (
    <>
      <Search />
      <Container className="reserve">
        <Row>
          <Col className="filter" md={3}>
            <Row>
              <Col className="filter-section-header">Udogodnienia</Col>
            </Row>
            <Row className="filters">
              <FilterTag />
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
              <Col className="filter-section-header">Typy</Col>
            </Row>
            <Col className="filters">
              <TypeFilter Type={FilterType} />
            </Col>
          </Col>
          <Col md={9}>
            <Places
              price={price}
              opinion={opinion}
              type={type}
              choosenType={props.location.state.passTag}
              other={props.location.state}
            />
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
