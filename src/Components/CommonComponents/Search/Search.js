import { Container, Col, Row, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import React from "react";
import Localization from "./Localization/Localization";
import CalendarField from "./Calendar/CalendarField";
import PeopleCounter from "./Quantity/PeopleCounter";
export default function Search() {
  const history = useHistory();
  function SearchHandle() {
    history.push("reserve");
  }

  return (
    <Container fluid className="search-bg">
      <Row>
        <Col className="search-object">
          <Row>
            <Col sm={8} className="search-filters">
              <Row>
                <Localization />
                <hr className="search-line" />
                <CalendarField />
                <hr className="search-line" />
                <PeopleCounter />
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
