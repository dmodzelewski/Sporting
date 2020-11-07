import React, { useState, useMutation } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const appointments = gql`
{
  userReservations(user:"${localStorage.getItem("userid")}") {
    gym{
      _id
      name   
      sportObject{
        _id
      }
    }
    user{
      _id
    }
    _id
    title
    startDateTime
  }
}
`;

const rows = [].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function DenseTable() {
  const classes = useStyles();
  const res = useQuery(appointments);
  if (res.loading) return <Skeleton />;
  if (res.error) return `Error! ${res.error.message} `;

  res.data.userReservations.map((x) => {
    console.log(x._id);
    rows.push({
      ids: x._id,
      name: x.title,
      dateAndHour: x.startDateTime,
      place: x.gym.name,
      linkToSchedule:
        x.gym.sportObject._id + "/" + x.gym._id + "/" + x.user._id,
    });
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nazwa spotkania</TableCell>
            <TableCell align="right">Data i godzina</TableCell>
            <TableCell align="right">Miejsce</TableCell>
            <TableCell align="right">Link do kalendarza</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dateAndHour}</TableCell>
              <TableCell align="right">{row.place}</TableCell>
              <TableCell align="right">
                {" "}
                <Link to={`/scheduler/${row.linkToSchedule}`}> Elo </Link>
              </TableCell>
              <TableCell align="right">
                {" "}
                <Button onClick={() => DelAppointment(row.ids)}> Usuń </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
