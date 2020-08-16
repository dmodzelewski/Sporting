import React, { Component } from "react";
import { Col, Row, Form } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PropTypes from "prop-types";

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
      this.props.getDate(BeginDate);
      return BeginDate;
    } else {
      const FullDate = BeginDate + " - " + EndDate;
      this.props.getDate(FullDate);
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
              value={this.HowMany(this.state.date)}
              readOnly
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
                defaultValue={this.state.date}
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
CalendarField.propTypes = {
  getDate: PropTypes.func.isRequired,
};
