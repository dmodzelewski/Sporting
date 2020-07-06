import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useMediaQuery } from "react-responsive";

export default function CalendarFunction() {
  const [value, onChange] = useState(new Date());
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  return (
    <>
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={true}
        showDoubleView={isDesktopOrLaptop}
      />
    </>
  );
}
