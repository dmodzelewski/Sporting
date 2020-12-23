import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import { Link } from 'react-router-dom'
import Backdrop from '@material-ui/core/Backdrop'
import { Plugins, CameraResultType } from '@capacitor/core'
import Fade from '@material-ui/core/Fade'
import AddGymObjectToGym from './AddGymObjectToGym'

const { Camera } = Plugins
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

const GymsAdmin = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const gyms = gql`
    {
      sportObjects {
        _id
        name
        address {
          streetName
          buildingNumber
          flatNumber
          city
          zipCode
          country {
            longName
          }
          geoPoint
        }
        gyms {
          _id
          gymType {
            name
            namePL
          }
          name
          mainPhoto
          description
          availability
          avgRate
          price
          maxAvailability
          gymTags {
            name
            namePL
          }
          equipments {
            name
            namePL
          }
          reviews {
            starRate
            description
          }
        }
      }
    }
  `
  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    })
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl = image.base64String
    // Can be set to the src of an image now
    console.log(imageUrl)
  }
  const SetAvgRate = (rate) => {
    if (rate) {
      return rate.toFixed(2)
    }
    return 'Brak'
  }
  const res = useQuery(gyms)
  if (res.loading) return <Skeleton />
  if (res.error) return `Error! ${res.error.message} `
  console.log(res.data.sportObjects)

  const InsertImage = () => {}
  return (
    <>
      {res.data.sportObjects.map((object) => (
        <Col key={object._id}>
          <Row>
            <Col className="gyms-objects">{object.name}</Col>
          </Row>
          <Row>
            {object.gyms.map((gym) => (
              <Col sm={12} md={3} key={gym._id}>
                <Card className={classes.root} key={gym._id}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      className="gyms-admin-photo"
                      src={gym.mainPhoto}
                      alt="https://bit.ly/3ns4BtS"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {gym.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Średnia Ocena {SetAvgRate(gym.avgRate)}
                    </Button>
                    <Button size="small" color="primary">
                      Cena {gym.price} zł/h
                    </Button>
                  </CardActions>
                </Card>
                <Button
                  className="admin-objects-button"
                  variant="contained"
                  color="primary"
                  onClick={handleOpen}
                >
                  Dodaj wyposażenie do Salki
                </Button>{' '}
                <Button
                  className="admin-objects-button"
                  variant="contained"
                  color="secondary"
                  onClick={takePicture}
                >
                  Dodaj zdjęcie do salki
                </Button>
                <Link
                  className="places-button"
                  to={{
                    pathname: `/admincalendar/${object._id}/${gym._id}`,
                  }}
                >
                  Zobacz Kalendarz
                </Link>
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
                      <AddGymObjectToGym />
                    </Col>
                  </Fade>
                </Modal>
              </Col>
            ))}
          </Row>
        </Col>
      ))}
    </>
  )
}
export default GymsAdmin
