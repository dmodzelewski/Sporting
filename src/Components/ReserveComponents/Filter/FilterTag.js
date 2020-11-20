import React, { useEffect, useState } from "react";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

const FilterTag = (props) => {
  const [tag, settag] = useState({});

  const handleChange = (event) => {
    settag({
      ...tag,
      [event.target.name]: event.target.checked,
    });
    props.items(tag);
  };

  const checkboxes = [
    {
      id: "5f8d715427ca0312196cbbef",
      name: "Darmowy parking",
      key: "checkBox1",
      label: "Check Box 1",
    },
    {
      id: "5fa6acd28d95f64e423c23c9",
      name: "Zniżki dla seniorów",
      key: "checkBox2",
      label: "Check Box 2",
    },
  ];

  return (
    <div>
      <lable>Checked item name : {tag["check-box-1"]} </lable> <br />
      {checkboxes.map((item) => (
        <label key={item.key}>
          {item.name}
          <Checkbox
            name={item.id}
            checked={tag[item.id]}
            onChange={handleCheckboxChange}
          />
        </label>
      ))}
    </div>
  );
};
export default FilterTag;
