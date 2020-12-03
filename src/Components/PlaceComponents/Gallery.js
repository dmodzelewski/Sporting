import Skeleton from '@material-ui/lab/Skeleton'
import React from 'react'
import { Col } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'
import { gql, useQuery } from '@apollo/client'
import PropTypes from 'prop-types'

const Photos = ({ match }) => {
  const gym = gql`
    query gymById($gymId: ID) {
      gymById(gymId: $gymId) {
        name
        mainPhoto
        sidePhotos
      }
    }
  `
  const res = useQuery(gym, {
    variables: {
      gymId: match.params.gymid,
    },
  })
  if (res.loading) return <Skeleton variant="rect" width={800} height={118} />
  if (res.error) return `Error! ${res.error.message} `

  const images = [
    res.data.gymById.sidePhotos.map((x) => ({
      original: x,
      thumbnail: x,
    })),
  ]
  images[0].unshift({
    original: `${res.data.gymById.mainPhoto}`,
    thumbnail: `${res.data.gymById.mainPhoto}`,
  })
  return (
    <>
      <Col className="place-gallery no-padding">
        <section style={{ width: '100%' }}>
          <Col className="no-padding place-gallery-main">
            <ImageGallery showPlayButton={false} items={images[0]} />;
          </Col>
        </section>
      </Col>
    </>
  )
}
Photos.propTypes = {
  match: PropTypes.object.isRequired,
}
export default Photos
