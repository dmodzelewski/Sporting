/* eslint-disable no-undef */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton'
import UserReservations from '../Components/UserComponents/UserReservations'

const Profile = ({ location }) => {
  const userInfo = gql`
  query{
    userByEmail(loginEmail:"${
      localStorage.getItem('email') || location.state.passEmail
    }"){
      firstName
      lastName
      birthDate
      role
      registeredDate
    }
  }
`

  const { loading, error, data } = useQuery(userInfo)
  if (loading) return <Skeleton />
  if (error) return `Error! ${error.message} `

  console.log(
    `${data.userByEmail.firstName} ${data.userByEmail.lastName} ${data.userByEmail.birthDate} ${data.userByEmail.role} ${data.userByEmail.registeredDate}`,
  )

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col className="center">
                <h1>Twój Profil</h1>
              </Col>
            </Row>
            <Row>
              <Col className="center">
                <h1>
                  {' '}
                  Witaj{' '}
                  {`${data.userByEmail.firstName} ${data.userByEmail.lastName}`}{' '}
                </h1>
              </Col>
            </Row>
            <Col>
              <Col>
                <h2>Twoje Rezerwacje</h2>
              </Col>
              <Col>
                <UserReservations />
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  )
}
Profile.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Profile
