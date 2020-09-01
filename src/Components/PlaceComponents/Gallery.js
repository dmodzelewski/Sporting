import React from "react";
import { Col, Image } from "react-bootstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const Photos = () => {
  const changeTransition = () => {};
  return (
    <>
      <Col className="place-gallery no-padding">
        <section style={{ width: "100%" }}>
          <Col className="no-padding place-gallery-main">
            <a
              onClick={() => changeTransition()}
              className="place-gallery-main-arrow"
            >
              <ArrowBackIcon />
            </a>
            <Col className="no-padding place-gallery-main-placeholder">
              <Col>
                <Image
                  className="place-gallery-main-photo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg"
                />
              </Col>
            </Col>

            <a className="place-gallery-main-arrow">
              <ArrowForwardIcon />
            </a>
          </Col>
        </section>
      </Col>
    </>
  );
};
export default Photos;
