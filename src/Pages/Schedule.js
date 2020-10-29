import React, { useState, useCallback } from "react";
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

const appointments = [
  {
    startDate: new Date(2020, 28, 10, 10, 35),
    endDate: new Date(2020, 28, 10, 13, 30),
  },
  {
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 17, 0),
  },
];

export default () => {
  const [currentDate, setcurrentDate] = useState(new Date());
  const [data, setDate] = useState(appointments);
  const [currentView, setCurrentView] = useState("month");
  const [addedAppointment, setAddedAppointment] = useState({});
  const [isAppointmentBeingCreated, setIsAppointmentBeingCreated] = useState(
    false
  );

  const onCommitChanges = useCallback(
    ({ added, changed, deleted }) => {
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        setDate([...data, { id: startingAddedId, ...added }]);
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

  return (
    <>
      <Container>
        <Col>
          <Col>
            <h1>Wybierz dogodny dla Ciebie Termin</h1>
          </Col>{" "}
          <Paper>
            <Scheduler data={data} height={600}>
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
