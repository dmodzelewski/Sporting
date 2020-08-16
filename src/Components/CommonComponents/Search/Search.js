import { Container, Col, Row, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import React, { useCallback, useState } from "react";
import Localization from "./Localization/Localization";
import CalendarField from "./Calendar/CalendarField";
import PeopleCounter from "./Quantity/PeopleCounter";
import getCurrentPosition from "./Geo";
export default function Search() {
  const [city, setCity] = useState();
  const [date, setDate] = useState();
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  function SearchHandle() {
    history.push({
      pathname: "/reserve",
      state: { passCity: city, passDate: date, passQuantity: quantity },
    });
  }

  const whereis = useCallback(
    (place) => {
      setCity(place);
    },
    [city, setCity]
  );

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
            <Col sm={8} className="search-filters">
              <Row>
                <Localization getCity={whereis} />
                <hr className="search-line" />
                <CalendarField getDate={whenis} />
                <hr className="search-line" />
                <PeopleCounter getQuantity={howmany} />
                {console.log(quantity)}
              </Row>
            </Col>
            <Col sm={4}>
              <Button className="search-button">
                <Row>
                  <Col sm={3}>
                    <FaSearch />
                  </Col>
                  <Col sm={{ span: 4, offset: 1 }} onClick={SearchHandle}>
                    Szukaj
                  </Col>
                </Row>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
