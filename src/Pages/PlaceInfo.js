import React from "react";
import Header from "../Components/PlaceComponents/Header";
import Photos from "../Components/PlaceComponents/Gallery";
import { Col, Container, Button } from "react-bootstrap";
import Informations from "../Components/PlaceComponents/Informations";
import Comments from "../Components/PlaceComponents/Comments";
import Reservation from "../Components/PlaceComponents/Reservation";
import PropTypes from "prop-types";
import Login from "../Components/LoginComponents/Login";
import Popup from "reactjs-popup";
const PlaceInfo = ({ match }) => {
  const isLogged = () => {
    if (localStorage.getItem("token")) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <>
      <Container>
        <Header match={match} />
        <Photos match={match} />
        <Col className="place-middleColumn">
          <Col className="place-text">
            <Informations match={match} />
          </Col>
        </Col>
        <Col>
          <Reservation match={match} />
        </Col>
        <Col>
          <Comments match={match} />
        </Col>
        <Col className="loggin-place">
          <Col className="text-loggin-place">
            <p>
              Aby zarezerwować się do obiektu, lub by dodawać komentarze musisz
              być zalogowany!
            </p>
          </Col>
          <Col className="button-loggin-place">
            <Popup
              trigger={
                <Button
                  style={
                    isLogged()
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                  }
                >
                  Zaloguj Się
                </Button>
              }
              modal
            >
              <Login url={match.url} />
            </Popup>
          </Col>
        </Col>
      </Container>
    </>
  );
};
PlaceInfo.propTypes = {
  match: PropTypes.object.isRequired,
};
export default PlaceInfo;
