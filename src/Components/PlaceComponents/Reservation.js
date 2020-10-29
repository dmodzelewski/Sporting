import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Reservation = (props) => {
  const isLogged = () => {
    if (localStorage.getItem("token")) {
      return false;
    } else {
      return true;
    }
  };
  console.log(props.match.params);
  return (
    <>
      <Col className="place-comment no-padding">
        <Col className="place-text-header no-padding">Zarezerwuj trening</Col>
        <Col className="place-comment-login no-padding">
          <Col>
            <Link
              className={isLogged() ? "disabled-link" : null}
              to={`/scheduler/${props.match.params.buildingid}/${
                props.match.params.gymid
              }/${localStorage.getItem("userid")}`}
            >
              Wyśwetl Obiekt
            </Link>
          </Col>
        </Col>
      </Col>
    </>
  );
};
export default Reservation;
