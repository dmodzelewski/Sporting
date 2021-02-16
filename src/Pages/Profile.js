/* eslint-disable no-undef */
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton'
import UserReservations from '../Components/UserComponents/UserReservations'

const Profile = ({ location }) => {
  const userInfo = gql`
    query userByEmail($loginEmail: String!) {
      userByEmail(loginEmail: $loginEmail) {
        firstName
        lastName
        birthDate
        role
        registeredDate
      }
    }
  `

  const { loading, error, data } = useQuery(userInfo, {
    errorPolicy: 'all',
    variables: {
      loginEmail: localStorage.getItem('email'),
    },
  })
  if (loading) return <Skeleton />

  console.log(
    `${data.userByEmail.firstName} ${data.userByEmail.lastName} ${data.userByEmail.birthDate} ${data.userByEmail.role} ${data.userByEmail.registeredDate}`,
  )

  return (
    <>
      <Container style={{ paddingBottom: '212px' }}>
        <Row>
          <Col>
            <Row>
              <Col className="center profile-info">
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
