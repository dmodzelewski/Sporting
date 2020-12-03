import React, { useState } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import AddGymObjectToGym from './AddGymObjectToGym'
import Map from '../PlaceComponents/Map'

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 306,
    maxWidth: 345,
    marginRight: '10px',
    marginBottom: '10px',
  },
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

const SportObjectsAdmin = ({ SportObjects }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [OpenModal, setOpenModal] = useState(false)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
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
                    <Map object={object.address} />
                  </Popover>
                </Col>
              </Row>
              <Row>
                <Col className="no padding admin-objects-button">
                  <Button
                    className="admin-objects-button"
                    variant="contained"
                    color="primary"
                    onClick={handleOpenModal}
                  >
                    Dodaj salę do obiektu
                  </Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={OpenModal}
                    onClose={handleCloseModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={OpenModal}>
                      <Col className={classes.paper}>
                        <AddGymObjectToGym objectid={object._id} />
                      </Col>
                    </Fade>
                  </Modal>
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
