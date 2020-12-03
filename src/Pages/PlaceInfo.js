/* eslint-disable no-undef */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Col, Container, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Skeleton from '@material-ui/lab/Skeleton'
import { gql, useQuery } from '@apollo/client'
import Backdrop from '@material-ui/core/Backdrop'
import Header from '../Components/PlaceComponents/Header'
import Photos from '../Components/PlaceComponents/Gallery'
import Informations from '../Components/PlaceComponents/Informations'
import Comments from '../Components/PlaceComponents/Comments'
import Reservation from '../Components/PlaceComponents/Reservation'
import Login from '../Components/LoginComponents/Login'

const availability = gql`
  query gymById($gymId: ID) {
    gymById(gymId: $gymId) {
      maxAvailability
      availability
    }
  }
`

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: '10px 50px',
  },
}))
const PlaceInfo = ({ match }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const isLogged = () => {
    if (localStorage.getItem('token')) {
      return false
    }
    return true
  }
  const res = useQuery(availability, {
    variables: { gymId: match.params.gymid },
    pollInterval: 500,
  })
  if (res.loading) return <Skeleton />
  if (res.error) return `Error! ${res2.error.message} `
  return (
    <>
      <Container>
        <Header match={match} />
        <Photos match={match} />
        <Col className="place-middleColumn">
          <Col className="place-text">
            <Informations match={match} />
          </Col>
        </Col>
        <Col>
          <Reservation
            match={match}
            remainingReservation={res.data.gymById.availability}
          />
        </Col>
        <Col>
          <Comments match={match} />
        </Col>
        <Col className="loggin-place">
          <Col className="text-loggin-place">
            <p>
              Aby zarezerwować się do obiektu, lub by dodawać komentarze musisz
              być zalogowany!
            </p>
          </Col>
          <Col className="button-loggin-place">
            <Button
              onClick={handleOpen}
              style={
                isLogged()
                  ? { visibility: 'visible' }
                  : { visibility: 'hidden' }
              }
            >
              Zaloguj Się
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Col className={classes.paper}>
                  <Login url={match.url} />
                </Col>
              </Fade>
            </Modal>
          </Col>
        </Col>
      </Container>
    </>
  )
}
PlaceInfo.propTypes = {
  match: PropTypes.object.isRequired,
}
export default PlaceInfo
