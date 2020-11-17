import React, { useState } from "react";
import { FormControlLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";

export const FilterTag = (Tag) => {
  const [check, setCheck] = useState(Tag.array);

  const handleChange = (event) => {
    let items = [...check];
    let index = event.target.name;
    let item = { ...items[index] };
    item.isChecked = !item.isChecked;
    items[index] = item;
    setCheck(items);
    const who = [];
    check.filter((c) => {
      if (c.isChecked === true) {
        who.push(c.id);
      }
    });
    Tag.tags(check);
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
              name={x.index}
            />
          }
          label={x.name}
        />
      ))}
    </>
  );
};
