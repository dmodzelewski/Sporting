import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
import PropTypes from "prop-types";
import DrawLine from "./drawLine";

const Map = (props) => {
  const [viewPort, setviewPort] = useState({
    latitude: props.passLatitude,
    longitude: props.passLongitude,
    width: "40vh",
    height: "40vh",
    zoom: 13,
  });
  const fromCords = [props.address.geoPoint[0], props.address.geoPoint[1]];
  const destinationCords = [props.passLongitude, props.passLatitude];
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
        {console.log(fromCords)}
        <DrawLine from={fromCords} to={destinationCords} />
      </ReactMapGl>
    </>
  );
};

Map.propTypes = {
  address: PropTypes.object.isRequired,
};
export default Map;
