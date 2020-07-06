import React, { Component } from "react";
import { Col, Row, Form } from "react-bootstrap";

import CalendarFunction from "./CalendarFunction";

export default class CalendarField extends Component {
  state = {
    isClicked: false,
  };
  Calendarhandler = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };
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
              placeholder={"sdsd"}
              onClick={this.Calendarhandler}
            />
            <Col
              className={
                this.state.isClicked
                  ? "search-calendarShow"
                  : "search-calendarHide"
              }
            >
             
              <CalendarFunction />
            </Col>
          </Col>
        </Row>
      </Col>
    );
  }
}
