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
    <Container className="center">
      <Row>
        <Col className="place-price-value">Cena 30 zł/h</Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className="place-price-header center">Data</Col>
          </Row>
          <Row>
            <Col className="place-price-data">30.06.2018</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className="place-price-header center">ilość godzin</Col>
          </Row>
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
        </Col>
      </Row>
      <Row>
        <Col>Razem: {price * hour}zł</Col>
      </Row>
      <Button>Rezerwuj</Button>
    </Container>
  );
};
export default Pricing;
