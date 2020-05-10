import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import React from "react";

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
                <Col>
                  <Row>
                    <Col className="search-filters-headers">Lokalizacja</Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control plaintext placeholder="Gdańsk" />
                    </Col>
                  </Row>
                </Col>
                <hr className="search-line" />
                <Col>
                  <Row>
                    <Col className="search-filters-headers">Kalendarz</Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        plaintext
                        placeholder="Zarezerwuj obiekt lub sale treningową"
                      />
                    </Col>
                  </Row>
                </Col>
                <hr className="search-line" />
                <Col>
                  <Row>
                    <Col className="search-filters-headers">Liczba osób</Col>
                  </Row>
                  <Row>
                    <Col>
                      {" "}
                      <Form.Control plaintext placeholder="Wpisz liczbę osób" />
                    </Col>
                  </Row>
                </Col>
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
