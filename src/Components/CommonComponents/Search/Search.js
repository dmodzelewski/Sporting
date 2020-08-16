import { Container, Col, Row, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import React, { useCallback, useState } from "react";
import Localization from "./Localization/Localization";
import CalendarField from "./Calendar/CalendarField";
import PeopleCounter from "./Quantity/PeopleCounter";

export default function Search() {
  const [city, setCity] = useState("");
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
            <Col sm={12} className="search-filters">
              <Row>
                <Localization getCity={whereis} />
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
}
