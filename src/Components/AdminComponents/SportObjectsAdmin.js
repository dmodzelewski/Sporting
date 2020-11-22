import React, { useState } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import PropTypes from 'prop-types'
import Map from '../PlaceComponents/Map'

const SportObjectsAdmin = ({ SportObjects }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  return (
    <>
      <Col>
        <Row>
          {SportObjects.map((object) => (
            <Col md={3} key={object._id}>
              <Row>
                <Col>
                  {' '}
                  <Image
                    className="places-photo"
                    src="https://bit.ly/3ns4BtS"
                    alt="Zdjęcie"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="admin-objects">{object.name}</Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="admin-objects-button"
                    aria-describedby={id}
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      handleClick(e)
                    }}
                  >
                    Pokaż Lokalizacje
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <Map object={object} />
                  </Popover>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
    </>
  )
}
SportObjectsAdmin.propTypes = {
  SportObjects: PropTypes.shape({
    name: PropTypes.string,
  }),
}
SportObjectsAdmin.defaultProps = {
  SportObjects: {
    name: 'Domyślna nazwa',
  },
}
export default SportObjectsAdmin
