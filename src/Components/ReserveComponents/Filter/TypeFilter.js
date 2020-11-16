import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";
const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});
const gymType = gql`
  {
    gymTypes {
      _id
      name
      namePL
    }
  }
`;

const TypeFilter = ({ Type }) => {
  const [changeType, setchangeType] = useState("");
  const { loading, error, data } = useQuery(gymType);
  if (loading) return <Skeleton />;
  if (error) return `Error! ${error.message} `;

  const handleChange = (event) => {
    setchangeType(event.target.value);
    console.log(typeof event.target.value);
    Type(event.target.value);
  };
  // Inspired by blueprintjs
  const StyledRadio = (props) => {
    const classes = useStyles();
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="green"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  };
  return (
    <FormControl component="fieldset">
      <RadioGroup
        defaultValue="Basen"
        aria-label="Wybór Tagu"
        name="customized-radios"
      >
        {data.gymTypes.map((x) => (
          <FormControlLabel
            key={x._id}
            value={x._id}
            control={<StyledRadio />}
            label={x.namePL}
            onChange={(x) => handleChange(x)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default TypeFilter;
