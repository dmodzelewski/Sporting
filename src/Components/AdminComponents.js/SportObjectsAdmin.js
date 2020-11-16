import React, { useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import ReverseGeocoding from "../CommonComponents/Search/GetCurrentPosition";
import Map from "../PlaceComponents/Map";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));
const SportObjectsAdmin = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [location, setlocation] = useState();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
                  <Button
                    className="admin-objects-button"
                    aria-describedby={id}
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      handleClick(e);
                    }}
                  >
                    Pokaż Lokalizacje
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Map {...object} />
                  </Popover>
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
