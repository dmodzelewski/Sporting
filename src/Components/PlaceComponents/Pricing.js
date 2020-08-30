import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Pricing = () => {
  const [price, setprice] = useState(10);
  const [hour, sethour] = useState(0);

  const subHour = () => {
    if (hour > 0) {
      sethour(hour - 1);
    }
  };
  return (
    <>
      <Col className="place-price">
        <Col className="place-price-value">Cena 30 zł/h</Col>

        <Col className="place-price-header center">Data</Col>

        <Col className="place-price-data">30.06.2018</Col>

        <Col className="place-price-header center">ilość godzin</Col>
        <Row>
          <RemoveIcon
            className="place-price-buttons"
            onClick={() => subHour()}
          />

          <Col className="price-text-hours">{hour}</Col>
          <AddIcon
            className="place-price-buttons"
            onClick={() => sethour(hour + 1)}
          />
        </Row>

        <Col className="place-price-result">Razem: {price * hour}zł</Col>
      </Col>
      <Button className="">Rezerwuj</Button>
    </>
  );
};
export default Pricing;
