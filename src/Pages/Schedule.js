import React, { useState, useCallback, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  MonthView,
  ViewSwitcher,
  DayView,
  TodayButton,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Col, Container } from "react-bootstrap";
import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";
import moment from "moment";

export default () => {
  const [currentDate, setcurrentDate] = useState(new Date());
  const [data, setDate] = useState(appointmentData);
  const [currentView, setCurrentView] = useState("month");
  const [addedAppointment, setAddedAppointment] = useState({});
  const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] = useState(
    false
  );
  const [title, setTitle] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const appointments = gql`
    {
      reservations {
        _id
        startDateTime
        endDateTime
        title
      }
    }
  `;
  const createAppointment = gql`
    mutation {
      addReservation(
        title: "${title}"
        startDateTime: "${startDate}"
        endDateTime: "${endDate}"
        user: "5f857c8fd34e7f001feee2ca"
        gym: "5f8d821d8a04db24d58c88d3"
      ) {
        createdAt
        title
      }
    }
  `;
  const [CreateAppointment] = useMutation(createAppointment);
  useEffect(() => {
    CreateAppointment()
      .then(function (val) {
        console.log(val);
      })
      .catch(() => {
        console.log("Coś poszło nie tak");
      });
  }, [title]);
  const getTime = (date) => {
    const year = date.get("year");
    const month = date.get("month");
    const day = date.get("date");

    const hour = date.get("hour");
    const minute = date.get("minute");
    const second = date.get("second");
    const dateArr = new Date(year, month, day, hour, minute, second);
    return dateArr;
  };
  const onCommitChanges = useCallback(
    ({ added, changed, deleted }) => {
      if (added) {
        console.log(added);
        setTitle(added.title);
        setStartDate(added.startDate);
        setendDate(added.endDate);
      }
      if (changed) {
        setDate(
          data.map((appointment) =>
            changed[appointment.id]
              ? { ...appointment, ...changed[appointment.id] }
              : appointment
          )
        );
      }
      if (deleted !== undefined) {
        setDate(data.filter((appointment) => appointment.id !== deleted));
      }
      setIsAppointmentBeingCreated(false);
    },
    [setDate, setIsAppointmentBeingCreated, data]
  );
  const onAddedAppointmentChange = useCallback((appointment) => {
    setAddedAppointment(appointment);
    setIsAppointmentBeingCreated(true);
  });
  const res = useQuery(appointments);
  const appointmentData = [];
  if (res.loading) return <Skeleton />;
  if (res.error) return `Error! ${res.error.message} `;
  res.data.reservations.map((x) => {
    const Startdate = moment(x.startDateTime);
    const Enddate = moment(x.endDateTime);
    appointmentData.push({
      startDate: getTime(Startdate),
      endDate: getTime(Enddate),
      title: x.title,
      id: x._id,
    });
  });

  return (
    <>
      <Container>
        <Col>
          <Col>
            <h1>Wybierz dogodny dla Ciebie Termin</h1>
          </Col>{" "}
          <Paper>
            <Scheduler data={appointmentData} height={600}>
              <ViewState
                currentDate={currentDate}
                onCurrentDateChange={(x) => setcurrentDate(x)}
                currentViewName={currentView}
                onCurrentViewNameChange={(x) => setCurrentView(x)}
              />
              <EditingState
                onCommitChanges={onCommitChanges}
                addedAppointment={addedAppointment}
                onAddedAppointmentChange={onAddedAppointmentChange}
              />
              <IntegratedEditing />
              <DayView name="day" startDayHour={9} endDayHour={18} />

              <WeekView startDayHour={9} endDayHour={19} />
              <MonthView name="month" />

              <Toolbar />
              <ViewSwitcher />
              <DateNavigator />
              <TodayButton />
              <Appointments />
              <AppointmentTooltip showOpenButton />
              <AppointmentForm />
              <DragDropProvider />
            </Scheduler>
          </Paper>
        </Col>
      </Container>
    </>
  );
};
