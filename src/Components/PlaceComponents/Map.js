import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

const Map = () => {
  const [viewPort, setviewPort] = useState({
    latitude: 54.2774723,
    longitudee: 18.6196338,
    width: "40vh",
    height: "40vh",
    zoom: 13,
  });
  return (
    <ReactMapGl
      {...viewPort}
      mapboxApiAccessToken="pk.eyJ1IjoibW9kejNsMSIsImEiOiJja2Vwd3ZuZXYybHE0MzBwY3FnMmJoOWl3In0.gXqZXY5scsggIr2Vl05QOA"
      mapStyle="mapbox://styles/modz3l1/ckepxnbns4mdq19o2qqkxxqxi"
      onViewportChange={(x) => {
        setviewPort(x);
      }}
    ></ReactMapGl>
  );
};
export default Map;
