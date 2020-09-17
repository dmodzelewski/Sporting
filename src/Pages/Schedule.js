import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  MonthView,
  ViewSwitcher,
  ConfirmationDialog,
  AppointmentTooltip,
  Appointments,
  AppointmentForm,
  DayView,
  EditRecurrenceMenu,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Col, Container } from "react-bootstrap";

const schedulerData = [
  {
    startDate: "2020-09-17T09:45",
    endDate: "2020-09-17T11:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
];

const Schedule = () => {
  const [currentDate, setcurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("day");
  const currentDateChange = (date) => {
    setcurrentDate(date);
  };
  const currentViewChange = (name) => {
    setCurrentView(name);
  };
  return (
    <>
      <Container>
        <Col>
          <Col>
            <h1>Wybierz dogodny dla Ciebie Termin</h1>
          </Col>

          <Paper>
            <Scheduler data={schedulerData}>
              <ViewState
                currentDate={currentDate}
                onCurrentDateChange={(x) => currentDateChange(x.target)}
                currentViewName={currentView}
                onCurrentViewNameChange={(x) => currentViewChange(x.target)}
              />

              <DayView name="day" startDayHour={9} endDayHour={18} />
              <WeekView startDayHour={9} endDayHour={19} />
              <MonthView name="month" />
              <Toolbar />
              <ViewSwitcher />
              <DateNavigator />
              <TodayButton />
              <Appointments />
              <AppointmentTooltip showCloseButton showOpenButton />
              <AppointmentForm />
            </Scheduler>
          </Paper>
        </Col>
      </Container>
    </>
  );
};
export default Schedule;
