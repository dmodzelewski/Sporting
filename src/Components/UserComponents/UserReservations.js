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
import DeleteUserApp from "./DeleteUserApp";
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
    endDateTime
  }
}
`;

const rows = [].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function DenseTable() {
  const classes = useStyles();
  const res = useQuery(appointments, {
    pollInterval: 500,
  });
  if (res.loading) return <Skeleton />;
  if (res.error) return `Error! ${res.error.message} `;

  res.data.userReservations.map((x) => {
    rows.push({
      ids: x._id,
      name: x.title,
      dateAndHour: x.startDateTime,
      place: x.gym.name,
      linkToSchedule:
        x.gym.sportObject._id + "/" + x.gym._id + "/" + x.user._id,
    });
  });
  const GetDateAndTime = (date) => {
    const currentDate = date.split("T")[0];
    const currentTime =
      date.split("T")[1].split(":")[0] + ":" + date.split("T")[1].split(":")[1];
    const formatTime = currentDate + " " + currentTime;
    return formatTime;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>UI mnie działa</TableCell>
            <TableCell align="right">Trening zaczyna się</TableCell>
            <TableCell align="right">Trening kończy się</TableCell>
            <TableCell align="right">Miejsce</TableCell>
            <TableCell align="right">Link do kalendarza</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {res.data.userReservations.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                {GetDateAndTime(row.startDateTime)}
              </TableCell>
              <TableCell align="right">
                {GetDateAndTime(row.endDateTime)}
              </TableCell>
              <TableCell align="right">{row.gym.name}</TableCell>
              <TableCell align="right">
                <Link
                  to={`/scheduler/${
                    row.gym.sportObject._id +
                    "/" +
                    row.gym._id +
                    "/" +
                    row.user._id
                  }`}
                >
                  Przejdź
                </Link>
              </TableCell>
              <TableCell align="right">
                <DeleteUserApp id={row._id} res={res.refetch} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
