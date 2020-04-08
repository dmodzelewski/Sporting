import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getAllUsers = gql`
  {
    users{
      Name
      Surname
      Login
      Password
    }
  }
`;

function Reserve() {
  const { loading, error, data } = useQuery(getAllUsers);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.users.map(({ Name, Surname,Login,Password }) => (
    <div key={Name}>
      <p>
       Imię i nazwisko:  {Name} {Surname} login i hasło {Login} {Password} 
      </p>
    </div>
  ));
}


export default Reserve;
