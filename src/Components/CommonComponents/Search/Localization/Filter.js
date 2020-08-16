import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";

const Filter = ({ cities, getCity }) => {
  const [city, setcity] = useState("");

  const SelectCityHandler = (e) => {
    const formatCity = e.target.innerHTML
      .toString()
      .split(",")[0]
      .split(":")[1];

    setcity(formatCity);
    getCity(formatCity);
  };

  const { loading, error, data } = useQuery(cities, {
    variables: { localization: city },
    pollInterval: 500,
  });

  const RenderData = () => {
    if (loading) return <p className="search-filter-city">Loading...</p>;
    if (error) return `Error! ${error.message} `;
    if (city === "") return "";

    return (
      <>
        <div className="search-filter-city">
          <ul role="listbox">
            {data.cities.map(({ NAZWA, Wojewodztwo, Gmina }) => (
              <li
                key={NAZWA + Wojewodztwo}
                onClick={SelectCityHandler.bind(this)}
              >
                Miasto: {NAZWA}, Województwo: {Wojewodztwo}, Gmina : {Gmina}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

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
};
Filter.propTypes = {
  cities: PropTypes.object.isRequired,
};
Filter.propTypes = {
  getCity: PropTypes.func.isRequired,
};
Filter.defaultProps = {
  cities: "",
};

export default Filter;
