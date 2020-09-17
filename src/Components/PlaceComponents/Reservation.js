import React from "react";
import { Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Reservation = () => {
  const history = useHistory();
  const handleReservation = () => {
    history.push("scheduler");
  };
  return (
    <>
      <Col className="place-comment no-padding">
        <Col className="place-text-header no-padding">Zarezerwuj trening</Col>
        <Button className="" onClick={() => handleReservation()}>
          Rezerwuj
        </Button>
      </Col>
    </>
  );
};
export default Reservation;
