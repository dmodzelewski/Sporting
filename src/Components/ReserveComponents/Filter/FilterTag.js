import React, { useState } from "react";
import { FormControlLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";

export const FilterTag = (props) => {
  const [check, setCheck] = useState(props.array);

  const handleChange = (event) => {
    let items = [...check];
    let item = { ...items[0] };
    item.isChecked = !item.isChecked;
    items[0] = item;
    setCheck(items);
    console.log(check);
  };

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  return (
    <>
      {check.map((x) => (
        <FormControlLabel
          key={x.id}
          control={
            <GreenCheckbox
              checked={x.isChecked}
              onChange={handleChange}
              name={x.id}
            />
          }
          label={x.name}
        />
      ))}
    </>
  );
};
