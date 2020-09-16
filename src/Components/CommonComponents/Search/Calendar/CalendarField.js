import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PropTypes from "prop-types";
const CalendarField = () => {
  const [date, setDate] = useState(new Date());
  const [Clicked, setClicked] = useState(false);

  const FormatDate = (dateToFormat) => {
    const BeginDate = new Intl.DateTimeFormat("pl", {
      month: "short",
    }).format(dateToFormat[0]);
    console.log(dateToFormat);
    console.log(BeginDate);
    return BeginDate;
  };
  //Set Type of JS object
  const toType = (obj) => {
    return {}.toString
      .call(obj)
      .match(/\s([a-zA-Z]+)/)[1]
      .toLowerCase();
  };

  const Calendarhandler = () => {
    setClicked(!Clicked);
  };

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <Col sm={3}>
      <Row>
        <Col>
          <b>Kalendarz</b>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            plaintext
            placeholder="Podaj datę"
            onClick={() => Calendarhandler()}
            value={date}
            readOnly
          />
          <Col
            className={Clicked ? "search-calendarShow" : "search-calendarHide"}
          >
            <Calendar onChange={(x) => onChange(x)} value={date} />
          </Col>
        </Col>
      </Row>
    </Col>
  );
};

CalendarField.propTypes = {
  getDate: PropTypes.func.isRequired,
};

export default CalendarField;
