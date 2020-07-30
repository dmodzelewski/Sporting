import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Form } from "react-bootstrap";

export default function Filter() {
  const cities = gql`
    query City($localization: String!) {
      cities(first: 10, filter: $localization) {
        NAZWA
      }
    }
  `;

  function GetData(loc) {
    const { loading, error, data } = useQuery(cities, {
      variables: { localization: loc },
      pollInterval: 500,
    });
    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error.message} `;
    return (
      <>
        <div className="lol">
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
        plaintext
        placeholder="Podaj miejscowość"
        //Podać aktualną lokalizację
        defaultValue=""
        onChange={(e) => GetData()}
      />
      {/* tu możesz narazie zmieniać */}
      {GetData("Gdańs")}
      {/* 
      <Row>
        <Col className="lol">
          <ul>
            {props.cities.map((city) => (
              <li>{city}</li>
            ))}
          </ul>
        </Col>
      </Row> */}
    </>
  );
}