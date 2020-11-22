/* eslint-disable no-undef */
import React, { useState } from 'react'
import { Col, Button } from 'react-bootstrap'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Input from '@material-ui/core/Input'
import AccountCircle from '@material-ui/icons/AccountCircle'
import TextField from '@material-ui/core/TextField'
import Rating from '@material-ui/lab/Rating'
import { gql, useMutation, useQuery } from '@apollo/client'
import Skeleton from '@material-ui/lab/Skeleton'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

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
  },
}))
const labels = {
  0.5: 'Żenada',
  1: 'Beznadziejnie',
  1.5: 'Okropnie',
  2: 'Słabo',
  2.5: 'Ok',
  3: 'Nawet dobrze',
  3.5: 'Dobrze',
  4: 'Bardzo dobrze',
  4.5: 'Wyśmienicie',
  5: 'Niesamowicie',
}
const Comments = ({ match }) => {
  const classes = useStyles()
  const [value, setValue] = useState(3)
  const [, setHover] = useState(-1)
  const [, setName] = useState('')
  const [Text, setText] = useState('')
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addOpinion = gql`
    mutation addReview(
      $user: ID
      $description: String
      $starRate: Float
      $gym: ID
    ) {
      addReview(
        user: $user
        description: $description
        starRate: $starRate
        gym: $gym
      ) {
        _id
      }
    }
  `
  const [addNewOpinion] = useMutation(addOpinion)
  const comments = gql`
    query gymById($gymId: ID) {
      gymById(gymId: $gymId) {
        reviews {
          _id
          starRate
          createdAt
          description
          user {
            _id
            lastName
            firstName
          }
        }
      }
    }
  `
  const user = gql`
    query userByEmail($loginEmail: String!) {
      userByEmail(loginEmail: $loginEmail) {
        lastName
        firstName
      }
    }
  `
  const res = useQuery(comments, {
    variables: {
      gymId: match.params.gymid,
    },
  })
  const secondRes = useQuery(user, {
    variables: {
      loginEmail: localStorage.getItem('email'),
    },
  })
  if (res.loading) return <Skeleton />
  if (res.error) return `Error! ${res.error.message} `
  res.startPolling(5000)
  const isLogged = () => {
    if (localStorage.getItem('token')) {
      return false
    }
    return true
  }
  const GetOpinionName = (name) => {
    return labels[name !== -1 ? name : value]
  }
  const GetDateAndTime = (date) => {
    const currentDate = date.split('T')[0]
    const currentTime = `${date.split('T')[1].split(':')[0]}:${
      date.split('T')[1].split(':')[1]
    }`
    const formatTime = `${currentDate} ${currentTime}`
    return formatTime
  }

  return (
    <>
      <Col className="place-comment no-padding">
        <Col className="place-text-header no-padding">Wszystkie Opinie</Col>
        <Col className="place-comment-review no-padding">
          <Col style={{ position: 'relative', padding: '0px' }}>
            <ul className="place-comment-scroll">
              {res.data.gymById.reviews.length === 0 ? (
                <h1>Brak Komentarzy</h1>
              ) : (
                res.data.gymById.reviews.map((item) => (
                  <li key={item._id} className=" no-padding">
                    <Col className="place-comment-reviewbox no-padding">
                      <Col className="place-comment-rev-up no-padding">
                        <Col className="place-comment-info no-padding">
                          {GetOpinionName(item.starRate)}{' '}
                          <span>{item.starRate}</span>
                        </Col>
                        <Col className="place-comment-date">
                          Dodano {GetDateAndTime(item.createdAt)}, autor:{' '}
                          {`${item.user.firstName} ${item.user.lastName}`}
                        </Col>
                      </Col>
                      <Col className="place-comment-rev-box-down">
                        <Col className="place-comment-rev-box">
                          <Col>
                            <Rating
                              readOnly
                              name="hover-feedback"
                              value={item.starRate}
                              size="large"
                              precision={0.5}
                            />
                          </Col>
                        </Col>
                        <Col className="place-comment-rev-textbox">
                          <p>{item.description}</p>
                        </Col>
                      </Col>
                    </Col>
                  </li>
                ))
              )}
            </ul>
          </Col>
        </Col>
        <Button disabled={isLogged()} onClick={handleOpen} className="button">
          Dodaj opinię
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
              <Col className="no-padding">
                <InputLabel
                  className="place-comment-label"
                  htmlFor="input-with-icon-adornment"
                >
                  Twoje imię
                </InputLabel>
                <Input
                  className="place-comment-input"
                  id="input-with-icon-adornment"
                  value={
                    isLogged()
                      ? null
                      : `${secondRes.data.userByEmail.firstName} ${secondRes.data.userByEmail.lastName}`
                  }
                  readOnly
                  onChange={(x) => setName(x.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
                <InputLabel
                  className="place-comment-label"
                  htmlFor="input-with-icon-adornment"
                >
                  Podaj ocenę w skali 1 do 5
                </InputLabel>
                <Rating
                  name="hover-feedback"
                  value={value}
                  size="large"
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue)
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover)
                  }}
                />
                <InputLabel
                  className="place-comment-label"
                  htmlFor="input-with-icon-adornment"
                >
                  Napisz co uważasz
                </InputLabel>
                <TextField
                  value={Text}
                  onChange={(x) => setText(x.target.value)}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover)
                  }}
                  className="place-comment-textfield"
                  placeholder="Twoja ocena..."
                  multiline
                  rows={2}
                  rowsMax={4}
                />

                <Col className="place-comment-button">
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      addNewOpinion({
                        variables: {
                          user: localStorage.getItem('userid'),
                          description: Text,
                          starRate: value,
                          gym: match.params.gymid,
                        },
                      })
                      handleClose()
                    }}
                  >
                    oceń
                  </Button>
                </Col>
              </Col>
            </Col>
          </Fade>
        </Modal>
      </Col>
    </>
  )
}
Comments.propTypes = {
  match: PropTypes.object.isRequired,
}
export default Comments
