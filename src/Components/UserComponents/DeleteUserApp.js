import { gql, useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const DeleteUserApp = (props) => {
  const [deleted, setdeleted] = useState("");
  const deleteAppointment = gql`
    mutation {
      delReservationById(reservation: "${deleted}") {
        title
        startDateTime
        endDateTime
        createdAt
      }
    }
  `;
  const [DeleteAppointment] = useMutation(deleteAppointment);
  useEffect(() => {
    DeleteAppointment()
      .then(function (val) {
        console.log(val);
        props.res();
      })
      .catch(() => {
        console.log("Nie udało się usunąć");
      });
  }, [deleted]);
  return <Button onClick={() => setdeleted(props.id)}> Usuń </Button>;
};
export default DeleteUserApp;
