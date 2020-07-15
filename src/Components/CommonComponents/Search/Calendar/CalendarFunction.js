import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default class CalendarFunction extends Component {
  state = {
    date: new Date(),
  };
  returnDateToInput = () => {
    this.props.callbackFromCallendar(this.state.date);
  };
  onChange = (date) => this.setState({ date });
  render() {
    return (
      <>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          selectRange={true}
          showDoubleView={true}
        />
      </>
    );
  }
}
