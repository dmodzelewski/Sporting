import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const getAllUsers = gql`
  {
    users {
      firstName
      lastName
      loginEmail
      password
    }
  }
`;

function Reserve() {
  const { loading, error, data } = useQuery(getAllUsers);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.users.map(({ firstName, lastName, loginEmail, password }) => (
    <div key={loginEmail}>
      <p>
        Imię i nazwisko: {firstName} {lastName} login i hasło {loginEmail}{" "}
        {password}
      </p>
    </div>
  ));
}

export default Reserve;
