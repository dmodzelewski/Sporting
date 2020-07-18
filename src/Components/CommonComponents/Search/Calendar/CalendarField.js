import React, { Component } from "react";
import { Col, Row, Form } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default class CalendarField extends Component {
  state = {
    isClicked: false,
    date: new Date(),
  };

  FormatDate = (dateToFormat) => {
    const BeginDate = new Intl.DateTimeFormat("pl", {
      day: "numeric",
      month: "short",
    }).format(dateToFormat[0]);
    const EndDate = new Intl.DateTimeFormat("pl", {
      day: "numeric",
      month: "short",
    }).format(dateToFormat[1]);
    if (BeginDate == EndDate) {
      return BeginDate;
    } else {
      const FullDate = BeginDate + " - " + EndDate;
      return FullDate;
    }
  };
  //Set Type of JS object
  toType = function (obj) {
    return {}.toString
      .call(obj)
      .match(/\s([a-zA-Z]+)/)[1]
      .toLowerCase();
  };

  Calendarhandler = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  HowMany = (dates) => {
    if (this.toType(dates)) {
      return this.FormatDate(dates);
    } else if (this.toType(dates)) {
      return this.FormatDate(dates);
    }
  };

  onChange = (date) => this.setState({ date });

  render() {
    return (
      <Col sm={4}>
        <Row>
          <Col className="search-filters-headers">Kalendarz</Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              plaintext
              placeholder="Podaj datę"
              onClick={this.Calendarhandler}
              defaultValue={this.HowMany(this.state.date)}
              value={this.HowMany(this.state.date)}
            />
            <Col
              className={
                this.state.isClicked
                  ? "search-calendarShow"
                  : "search-calendarHide"
              }
            >
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
                selectRange={true}
                showDoubleView={true}
              />
            </Col>
          </Col>
        </Row>
      </Col>
    );
  }
}
