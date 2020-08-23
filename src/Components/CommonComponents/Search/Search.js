import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { gql } from "@apollo/client";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import React, { useCallback, useState } from "react";
import CalendarField from "./Calendar/CalendarField";
import PeopleCounter from "./Quantity/PeopleCounter";

const Search = () => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState();
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

  // calendar part

  const SearchHandle = () => {
    history.push({
      pathname: "/reserve",
      state: { passCity: city, passDate: date, passQuantity: quantity },
    });
  };

  const whenis = useCallback(
    (date) => {
      setDate(date);
    },
    [date, setDate]
  );
  const howmany = useCallback(
    (count) => {
      setQuantity(count);
    },
    [quantity, setQuantity]
  );

  return (
    <Container fluid className="search-bg">
      <Row>
        <Col className="search-object">
          <Row>
            <Col sm={12} className="search-filters">
              <Row>
                <Col sm={3}>
                  <Row>
                    <Col className="search-filters-headers">Lokalizacja</Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        className="search-filter-city-form"
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
                <CalendarField getDate={whenis} />
                <PeopleCounter getQuantity={howmany} />
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
Search.propTypes = {
  getCity: PropTypes.func.isRequired,
};
