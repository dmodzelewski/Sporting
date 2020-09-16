import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { gql } from "@apollo/client";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import CalendarField from "./Calendar/CalendarField";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Plugins } from "@capacitor/core";

const { Geolocation } = Plugins;
let long = 0;
let lat = 0;
let currentCityLocation = "";
async function getCurrentPosition() {
  const coordinates = await Geolocation.getCurrentPosition(true);
  long = coordinates.coords.longitude;
  lat = coordinates.coords.latitude;
}
// do zrobienia
let abc = async () => {
  getCurrentPosition();
  const place =
    "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
    lat +
    "&lon=" +
    long;
  const response = await fetch(place);
  const JSONdata = await response.json();
  currentCityLocation = JSONdata.address.municipality;
  console.log(currentCityLocation);
};

const Search = () => {
  const [city, setCity] = useState("");
  const [quantity, setQuantity] = useState(1);

  const history = useHistory();
  // City filter part
  const cities = gql`
    query City($localization: String!) {
      cities(first: 5, filter: $localization) {
        NAZWA
        Wojewodztwo
        Gmina
      }
    }
  `;

  const SelectCityHandler = (e) => {
    const formatCity = e.target.innerHTML
      .toString()
      .split(",")[0]
      .split(":")[1];

    setCity(formatCity);
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
                key={NAZWA + Wojewodztwo + Gmina}
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
  try {
    abc();
  } catch (error) {
    console.log(error);
  }
  const CheckNegative = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const SearchHandle = () => {
    history.push({
      pathname: "/reserve",
      state: { passCity: city, passQuantity: quantity },
    });
  };

  return (
    <Container fluid className="search-bg">
      <Row>
        <Col className="search-object">
          <Row>
            <Col sm={12} className="search-filters">
              <Row>
                <Col sm={3}>
                  <Row>
                    <Col>
                      <b>Lokalizacja</b>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        plaintext
                        placeholder="Podaj miejscowość"
                        //Podać aktualną lokalizację
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                      />
                      {RenderData()}
                    </Col>
                  </Row>
                </Col>
                <CalendarField />
                <Col sm={3}>
                  <Row>
                    <Col>
                      <b> Liczba osób</b>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="search-filters-quantity">
                      <RemoveIcon onClick={() => CheckNegative()} />
                      {quantity}
                      <AddIcon onClick={() => setQuantity(quantity + 1)} />
                    </Col>
                  </Row>
                </Col>

                <Col>
                  <Button className="search-button" onClick={SearchHandle}>
                    <Row>
                      <Col sm={3}>
                        <FaSearch />
                      </Col>
                      <Col sm={{ span: 4, offset: 1 }}>Szukaj</Col>
                    </Row>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Search;
Search.propTypes = {
  cities: PropTypes.object.isRequired,
};

Search.defaultProps = {
  passCity: "Gdańsk",
  passDate: Date.now,
  passQuantity: 1,
};
