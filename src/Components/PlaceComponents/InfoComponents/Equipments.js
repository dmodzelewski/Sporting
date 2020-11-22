import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Skeleton from '@material-ui/lab/Skeleton'
import { Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Equipments = ({ match }) => {
  const GetEqupment = (items) => {
    const equipments = []
    if (items.length === 0) {
      equipments.push('Brak')
      return equipments
    }
    items.map((x) => {
      return equipments.push(x.namePL)
    })
    return equipments
  }

  const equip = gql`
    query gymById($gymId: ID) {
      gymById(gymId: $gymId) {
        description
        price
        availability
        maxAvailability
        equipments {
          name
          namePL
        }
      }
    }
  `
  const { loading, error, data } = useQuery(equip, {
    variables: { gymId: match.match.params.gymid },
  })
  if (loading) return <Skeleton />
  if (error) return `Error! ${error.message} `

  return (
    <Col>
      <Col className="place-text-subheader no-padding">Wyposażenie </Col>
      <Col className="no-padding">
        <Col>
          <ul>
            {GetEqupment(data.gymById.equipments).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Col>
      </Col>
    </Col>
  )
}
Equipments.propTypes = {
  match: PropTypes.object.isRequired,
}
export default Equipments
