import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";

export default function Localization() {
  const [search, setSearch] = useState("");

  

  return (
    <Col>
      <Row>
        <Col className="search-filters-headers">Lokalizacja</Col>
      </Row>
      <Row>
        <Col>
     
          <Form.Control
            plaintext
            placeholder="Gdańsk"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>
    </Col>
  );
}
