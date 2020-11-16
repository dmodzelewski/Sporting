import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import RoomIcon from "@material-ui/icons/Room";
const Map = (props) => {
  const [show, setshow] = useState();
  const [viewPort, setviewPort] = useState({
    longitude: props.address.geoPoint[1],
    latitude: props.address.geoPoint[0],
    width: "40vh",
    height: "40vh",
    zoom: 13,
  });
  console.log(props);
  const fromCords = [props.address.geoPoint[1], props.address.geoPoint[0]];
  const destinationCords = [props.passLatitude, props.passLongitude];
  return (
    <>
      <ReactMapGl
        {...viewPort}
        mapboxApiAccessToken={
          "pk.eyJ1IjoibW9kejNsMSIsImEiOiJja2Vwd3ZuZXYybHE0MzBwY3FnMmJoOWl3In0.gXqZXY5scsggIr2Vl05QOA"
        }
        mapStyle="mapbox://styles/modz3l1/ckepxnbns4mdq19o2qqkxxqxi"
        onViewportChange={(x) => {
          setviewPort(x);
        }}
      >
        {
          <Marker
            key={destinationCords[0]}
            latitude={fromCords[1]}
            longitude={fromCords[0]}
          >
            <RoomIcon
              onClick={(e) => {
                e.preventDefault();
                setshow(props.address);
                console.log(show);
              }}
            />
          </Marker>
        }
        {show ? (
          <Popup
            latitude={show.geoPoint[0]}
            longitude={show.geoPoint[1]}
            onClose={() => {
              setshow(null);
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col>{show.city}</Col>
                </Row>
                <Row>
                  <Col>
                    ul. {show.streetName} {show.buildingNumber}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Popup>
        ) : null}
      </ReactMapGl>
    </>
  );
};

Map.propTypes = {
  address: PropTypes.object.isRequired,
};
export default Map;
