/* eslint-disable no-undef */
import React, { useState, useCallback, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from '@devexpress/dx-react-scheduler'
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
} from '@devexpress/dx-react-scheduler-material-ui'
import { Col, Container } from 'react-bootstrap'
import { gql, useMutation, useQuery } from '@apollo/client'
import Skeleton from '@material-ui/lab/Skeleton'
import moment from 'moment'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'

const Sched = ({ match }) => {
  const appointmentData = []

  const [currentDate, setcurrentDate] = useState(new Date())
  const [data, setDate] = useState(appointmentData)
  const [currentView, setCurrentView] = useState('month')
  const [addedAppointment, setAddedAppointment] = useState({})
  const [, setIsAppointmentBeingCreated] = useState(false)
  const [title, setTitle] = useState('Brak Tytułu')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())
  const [deleted, setDeleted] = useState('')
  const [updated, setUpdated] = useState('')
  const [updatedTitle, setupdatedTitle] = useState('')
  const [updatedStartDate, setupdatedStartDate] = useState('')
  const [updatedEndDate, setupdatedEndDate] = useState('')
  const appointments = gql`
    {
      userReservations(user:"${localStorage.getItem('userid')}") {
        _id
        startDateTime
        endDateTime
        title
      }
    }
  `

  const createAppointment = gql`
    mutation {
      addReservation(
        title: "${title}"
        startDateTime: "${startDate}"
        endDateTime: "${endDate}"
        user: "${localStorage.getItem('userid')}"
        gym: "${match.params.gymid}"
      ) {
        createdAt
        title
      }
    }
  `
  const updateAppointment = gql`
    mutation {
      updateReservationById(
        reservation: "${updated}"
        title: "${updatedTitle}"
        startDateTime: "${updatedStartDate}"
        endDateTime: "${updatedEndDate}"
        gym: "${match.params.gymid}"
      ) {
        title
        startDateTime
        endDateTime
        createdAt
      }
    }
  `
  const deleteAppointment = gql`
    mutation {
      delReservationById(reservation: "${deleted}") {
        title
        startDateTime
        endDateTime
        createdAt
      }
    }
  `

  const [CreateAppointment] = useMutation(createAppointment)
  const [UpdatedAppointment] = useMutation(updateAppointment)
  const [DeleteAppointment] = useMutation(deleteAppointment)

  useEffect(() => {
    if (title !== 'Brak Tytułu') {
      CreateAppointment()
        .then(function (val) {
          console.log(val)
        })
        .catch(() => {
          console.log('Coś poszło nie tak')
        })
    } else {
      console.log('Nie dodano')
    }
  }, [title])
  useEffect(() => {
    UpdatedAppointment()
      .then(function (val) {
        console.log(val)
      })
      .catch(() => {
        console.log('Nie udało się zaktualizować')
      })
  }, [updated])
  useEffect(() => {
    DeleteAppointment()
      .then(function (val) {
        console.log(val)
      })
      .catch(() => {
        console.log('Nie udało się usunąć')
      })
  }, [deleted])
  const getTime = (date) => {
    const year = date.get('year')
    const month = date.get('month')
    const day = date.get('date')

    const hour = date.get('hour')
    const minute = date.get('minute')
    const second = date.get('second')
    const dateArr = new Date(year, month, day, hour, minute, second)
    return dateArr
  }
  const OutDated = () => toast('Nie można dodać spotkania')

  const onCommitChanges = useCallback(
    ({ added, changed, deleted }) => {
      if (added) {
        if (added.startDate <= currentDate) {
          OutDated()
        } else {
          setTitle(added.title)
          setStartDate(added.startDate)
          setendDate(added.endDate)
        }
      }
      if (changed) {
        setUpdated(Object.keys(changed))
        Object.values(changed).map((x) => {
          console.log(added)

          setupdatedTitle(x.title)
          setupdatedStartDate(x.startDate)
          setupdatedEndDate(x.endDate)
        })
      }
      if (deleted !== undefined) {
        setDeleted(deleted)
      }
      setIsAppointmentBeingCreated(false)
    },
    [setDate, setIsAppointmentBeingCreated, data],
  )
  const onAddedAppointmentChange = useCallback((appointment) => {
    setAddedAppointment(appointment)
    setIsAppointmentBeingCreated(true)
  })
  const res = useQuery(appointments)
  if (res.loading) return <Skeleton />
  if (res.error) return `Error! ${res.error.message} `
  const GetData = () => {
    res.refetch()

    res.data.userReservations.map((x) => {
      const Startdate = moment(x.startDateTime)
      const Enddate = moment(x.endDateTime)
      appointmentData.push({
        startDate: getTime(Startdate),
        endDate: getTime(Enddate),
        title: x.title,
        id: x._id,
      })
    })
    return appointmentData
  }

  return (
    <>
      <Container>
        <Col>
          <Col className="scheduler-greetings">
            <h2>Wybierz dogodny dla Ciebie Termin</h2>
          </Col>
          <Paper>
            <Scheduler data={GetData()} height={700}>
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
            <ToastContainer />
          </Paper>
        </Col>
      </Container>
    </>
  )
}
Sched.propTypes = {
  match: PropTypes.object.isRequired,
}
export default Sched
