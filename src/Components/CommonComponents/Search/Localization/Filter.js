import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";

export default function Filter({ cities }) {
  const [city, setcity] = useState("");

  function RenderData() {
    const { loading, error, data } = useQuery(cities, {
      variables: { localization: city },
      pollInterval: 500,
    });
    if (loading) return <p className="search-filter-city">Loading...</p>;
    if (error) return `Error! ${error.message} `;
    if (city === "") return "";
    return (
      <>
        <div className="search-filter-city">
          <ul>
            {data.cities.map(({ NAZWA }) => (
              <li key={NAZWA}>{NAZWA}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
  return (
    <>
      <Form.Control
        className="search-filter-city-form"
        plaintext
        placeholder="Podaj miejscowość"
        //Podać aktualną lokalizację
        onChange={(e) => setcity(e.target.value)}
        value={city}
      />

      {RenderData()}
    </>
  );
}
Filter.propTypes = {
  cities: PropTypes.object.isRequired,
};
Filter.defaultProps = {
  cities: "",
};
