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

const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
];

const Schedule = () => {
  const [currentDate, setcurrentDate] = useState("2018-11-01");
  const [currentView, setCurrentView] = useState("day");
  const currentDateChange = (date) => {
    setcurrentDate(date);
  };
  const currentViewChange = (name) => {
    setCurrentView(name);
  };
  return (
    <>
      <Paper>
        <Scheduler data={schedulerData}>
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={(x) => currentDateChange(x.target)}
            currentViewName={currentView}
            onCurrentViewNameChange={(x) => currentViewChange(x.target)}
          />
          <EditingState
            onCommitChanges={this.commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={this.changeEditingAppointment}
          />

          <DayView name="day" startDayHour={9} endDayHour={18} />
          <WeekView startDayHour={9} endDayHour={19} />
          <MonthView name="month" />
          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <TodayButton />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip showCloseButton showOpenButton />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    </>
  );
};
export default Schedule;
