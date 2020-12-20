import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import 'react-calendar/dist/Calendar.css'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

const CalendarField = ({ GetDate }) => {
  const [date, setDate] = useState(new Date())

  const onChange = (dateToChange) => {
    setDate(dateToChange)

    GetDate(dateToChange)
  }

  return (
    <>
      <Col>
        <b>Wybierz date</b>
      </Col>

      <Col>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            format="dd/MM/yyyy"
            value={date}
            onChange={(x) => onChange(x)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </Col>
    </>
  )
}
CalendarField.propTypes = {
  GetDate: PropTypes.func,
}
CalendarField.defaultProps = {
  GetDate: new Date(),
}
export default CalendarField
