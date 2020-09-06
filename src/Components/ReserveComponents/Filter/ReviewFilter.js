import { Form } from "react-bootstrap";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  0.5: "Żenada",
  1: "Beznadziejnie",
  1.5: "Okropnie",
  2: "Słabo",
  2.5: "Ok",
  3: "Nawet dobrze",
  3.5: "Dobrze",
  4: "Bardzo dobrze",
  4.5: "Wyśmienicie",
  5: "Niesamowicie",
};

const ReviewFilter = () => {
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
  return (
    <Form className="center">
      <div>
        <Rating
          name="hover-feedback"
          value={value}
          size="large"
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
      </div>
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Form>
  );
};

export default ReviewFilter;
