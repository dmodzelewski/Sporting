import React from 'react'
import { Col } from 'react-bootstrap'
import ShowMoreText from 'react-show-more-text'
import { gql, useQuery } from '@apollo/client'
import Skeleton from '@material-ui/lab/Skeleton'
import PropTypes from 'prop-types'

const Descryption = ({ match }) => {
  const descryption = gql`
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
  const { loading, error, data } = useQuery(descryption, {
    variables: { gymId: match.match.params.gymid },
  })
  if (loading) return <Skeleton />
  if (error) return `Error! ${error.message} `

  return (
    <Col>
      <Col className="place-text-subheader no-padding">Opis</Col>
      <Col className="no-padding">
        <Col>
          <ShowMoreText
            className="place-text"
            lines={8}
            more="Show more"
            less="Show less"
            anchorClass=""
            expanded={false}
          >
            {data.gymById.description}
          </ShowMoreText>
        </Col>
      </Col>
    </Col>
  )
}
Descryption.propTypes = {
  match: PropTypes.object.isRequired,
}
export default Descryption
