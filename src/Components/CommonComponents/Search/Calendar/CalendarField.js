import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PropTypes from "prop-types";
const CalendarField = (GetDate) => {
  const [date, setDate] = useState(new Date());
  const [Clicked, setClicked] = useState(false);

  const FormatDate = (dateToFormat) => {
    const BeginDate = new Intl.DateTimeFormat("pl", {
      day: "numeric",
      month: "short",
    }).format(dateToFormat[0]);
    GetDate = BeginDate;
    return BeginDate;
  };

  const Calendarhandler = () => {
    setClicked(!Clicked);
  };

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <Col className="search-calendar" sm={4}>
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
            value={FormatDate(date)}
            readOnly
          />
          <Col
            className={Clicked ? "search-calendarShow" : "search-calendarHide"}
          >
            <Calendar
              onChange={(x) => onChange(x)}
              value={date}
              selectRange={true}
            />
          </Col>
        </Col>
      </Row>
    </Col>
  );
};

export default CalendarField;
