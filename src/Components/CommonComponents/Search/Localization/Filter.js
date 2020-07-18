import React from "react";
import { useQuery } from "@apollo/client";
import { Form } from "react-bootstrap";

export default function Filter(props) {
  const { loading, error, data } = useQuery(props.cities);

  function GetData() {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
      <>
        {data.cities.map(({ NAZWA }) => (
          <div key={NAZWA}>
            <p>{NAZWA}</p>
          </div>
        ))}
      </>
    );
  }
  return (
    <div>
      <Form.Control
        plaintext
        placeholder="Podaj datę"
        defaultValue=""
        onClick={GetData}
      />
    </div>
  );
}
