import React, { useState } from "react";
import {
  Col,
  Row,
  Image,
  Button,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import ReverseGeocoding from "../CommonComponents/Search/GetCurrentPosition";
import Map from "../PlaceComponents/Map";

const SportObjectsAdmin = (props) => {
  const [location, setlocation] = useState();

  console.log(props.SportObjects);
  return (
    <>
      <Col>
        <Row>
          {props.SportObjects.map((object) => (
            <Col md={3} key={object._id}>
              <Row>
                <Col>
                  {" "}
                  <Image
                    className="places-photo"
                    src={"https://bit.ly/3ns4BtS"}
                    alt="Zdjęcie"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="admin-objects">{object.name}</Col>
              </Row>
              <Row>
                <Col>
                  <OverlayTrigger
                    trigger="click"
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                      <Popover id="popovermap">
                        <Popover.Content>
                          <Map {...object} />
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button
                      className="admin-objects-button"
                      variant="secondary"
                      onClick={() => setLocation()}
                    >
                      Pokaż Lokalizacje
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
};
export default SportObjectsAdmin;
