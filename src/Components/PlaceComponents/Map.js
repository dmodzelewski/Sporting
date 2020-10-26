import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
import PropTypes from "prop-types";

const Map = (props) => {
  const [viewPort, setviewPort] = useState({
    latitude: props.address.geoPoint[0],
    longitude: props.address.geoPoint[1],
    width: "40vh",
    height: "40vh",
    zoom: 13,
  });

  return (
    <>
      <ReactMapGl
        {...viewPort}
        mapboxApiAccessToken="pk.eyJ1IjoibW9kejNsMSIsImEiOiJja2Vwd3ZuZXYybHE0MzBwY3FnMmJoOWl3In0.gXqZXY5scsggIr2Vl05QOA"
        mapStyle="mapbox://styles/modz3l1/ckepxnbns4mdq19o2qqkxxqxi"
        onViewportChange={(x) => {
          setviewPort(x);
        }}
      ></ReactMapGl>
    </>
  );
};

Map.propTypes = {
  address: PropTypes.object.isRequired,
};
export default Map;
