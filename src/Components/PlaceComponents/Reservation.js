import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Reservation = () => {
  const history = useHistory();
  const isLogged = () =>{
    if (localStorage.getItem('token')) {
      return false;
    } else {
      return true
    }
  }
  const handleReservation = () => {
    history.push("scheduler");
  };
  return (
    <>
      <Col className="place-comment no-padding">
        <Col className="place-text-header no-padding">Zarezerwuj trening</Col>
       <Col className="place-comment-login no-padding">
        <Col>
        <Button disabled={ isLogged()} className="" onClick={() => handleReservation()}>
          Rezerwuj
        </Button>
        </Col>
        <Col>
        <p>Aby zarezerwować się do obiektu musisz być zalogowany</p>
        </Col>
       </Col>
      </Col>
    </>
  );
};
export default Reservation;
