/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import ExploreIcon from '@material-ui/icons/Explore'
import { gql, useQuery } from '@apollo/client'
import Skeleton from '@material-ui/lab/Skeleton'

const Header = ({ match }) => {
  const address = gql`
  {
  sportObjectById(sportObjectId:"${match.params.buildingid}") {
          name
          address{
            streetName
            buildingNumber
            flatNumber
            city
            zipCode
            country{
              longName
              code
            }
            geoPoint
          }
        }      
      }
`
  const phone = gql`
    query gymById($gymId: ID) {
      gymById(gymId: $gymId) {
        name
        phoneNumber
      }
    }
  `

  const getPhoneNumber = (phoneNumber) => {
    if (phoneNumber == null) {
      return 'Brak numeru telefonu'
    }
    return phoneNumber
  }
  const res = useQuery(address)
  const secondRes = useQuery(phone, {
    variables: { gymId: match.params.gymid },
  })
  if (res.loading) return <Skeleton variant="rect" width={800} height={118} />
  if (res.error) return `Error! ${res.error.message} `

  if (secondRes.loading)
    return <Skeleton variant="rect" width={800} height={118} />
  if (secondRes.error) return `Error! ${res.error.message} `

  return (
    <>
      <Col className="place-header no-padding">
        <h1 className="place-header-name no-padding">
          {res.data.sportObjectById.name} {secondRes.data.gymById.name}
        </h1>
        <Col className="no-padding">
          <a href="#map">
            <ExploreIcon className="place-header-street-icon " />
            <address className="place-header-link-address">
              <span itemProp="street">
                {res.data.sportObjectById.address.streetName}{' '}
                {res.data.sportObjectById.address.buildingNumber},{' '}
              </span>
              <span itemProp="postalCode">
                {res.data.sportObjectById.address.zipCode},{' '}
              </span>
              <span itemProp="cityLocalization">
                {res.data.sportObjectById.address.city},{' '}
              </span>
              <span itemProp="country">
                {res.data.sportObjectById.address.country.longname}
              </span>
            </address>
            {' | '}
          </a>
          <a className="place-header-link-address">
            {getPhoneNumber(secondRes.data.gymById.phoneNumber)}
          </a>
        </Col>
      </Col>
    </>
  )
}
export default Header
Header.propTypes = {
  match: PropTypes.object.isRequired,
}
