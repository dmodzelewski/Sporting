import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import { Row, Col, Form } from "react-bootstrap";

const PriceFilter = ({ Costs }) => {
  const [price, setValue] = React.useState([0, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    Costs(newValue);
  };
  function valuetext(price) {
    return `${price}°C`;
  }

  return (
    <Row className="filters">
      <Col>
        <Form>
          <Typography id="range-slider" gutterBottom>
            Cena za godzinę
          </Typography>
          <Slider
            value={price}
            onChange={handleChange}
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
  );
};

export default PriceFilter;
