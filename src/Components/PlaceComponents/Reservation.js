/* eslint-disable no-undef */
import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Reservation = ({ match }) => {
  const isLogged = () => {
    if (localStorage.getItem('token')) {
      return false
    }
    return true
  }
  return (
    <>
      <Col className="place-comment no-padding">
        <Col className="place-text-header no-padding">Zarezerwuj trening</Col>
        <Col className="place-comment-login no-padding">
          <Col>
            <Link
              className={isLogged() ? 'disabled-link' : null}
              to={`/scheduler/${match.params.buildingid}/${
                match.params.gymid
              }/${localStorage.getItem('userid')}`}
            >
              Wyśwetl Obiekt
            </Link>
          </Col>
        </Col>
      </Col>
    </>
  )
}
Reservation.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Reservation
