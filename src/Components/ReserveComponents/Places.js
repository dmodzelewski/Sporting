import React, { useState } from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client'
import StarRateIcon from '@material-ui/icons/StarRate'
import { Link } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'
import Map from '../PlaceComponents/Map'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}))

const Places = ({
  price,
  opinion,
  type,
  choosenType,
  other,
  tag,
  availability,
  city,
  date,
}) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [first, setFirst] = useState(2)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  const SetType = (type) => {
    if (type) {
      return type
    }
    if (choosenType) {
      return choosenType
    }
    return null
  }
  const SetOpinion = (opinion) => {
    if (opinion === 0) {
      return null
    }
    return opinion
  }
  const SetTag = (tag) => {
    if (tag.length === 0) {
      return null
    }
    return tag
  }
  const setCity = (city) => {
    return city.trim()
  }
  const places = gql`
    query GymFilter(
      $maxPrice: Float
      $minPrice: Float
      $starRate: Float
      $gymType: ID
      $gymTags: [ID]
      $availability: Int
      $city: String
      $first: Int
      $skip: Int
    ) {
      sportObjectsByCity(city: $city) {
        name
        _id
        address {
          streetName
          buildingNumber
          flatNumber
          city
          zipCode
          country {
            longName
            code
          }
          geoPoint
        }
        gymsFilter(
          minPrice: $minPrice
          maxPrice: $maxPrice
          starRate: $starRate
          gymType: $gymType
          gymTags: $gymTags
          availability: $availability
          first: $first
          skip: $skip
        ) {
          _id
          gymType {
            name
            namePL
          }
          gymTags {
            _id
            name
            namePL
          }
          name
          mainPhoto
          price
          description
          availability
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
  const { loading, error, data } = useQuery(places, {
    variables: {
      minPrice: price[0],
      maxPrice: price[1],
      starRate: SetOpinion(opinion),
      gymType: SetType(type),
      gymTags: SetTag(tag),
      availability,
      city: setCity(city),
      first,
    },
  })
  if (loading) return <Skeleton variant="rect" width={800} height={118} />
  if (error) return `Error! ${error.message} `
  const HowManyGyms = () => {
    let length = 0
    data.sportObjectsByCity.map((item) => {
      length += item.gymsFilter.length
    })
    return length
  }
  const HowManyOpininons = (opinions) => {
    if (opinions === 0) {
      return 'Brak Opinii'
    }
    if (opinions === 1) {
      return '1 Opinia'
    }
    return `${opinions} Opinie`
  }
  const CalculateOpionions = (opinions) => {
    let suma = 0
    if (opinions === undefined || opinions.length === 0) {
      return 0
    }
    opinions.map((x) => {
      suma += x.starRate
    })
    const wynik = suma / opinions.length
    return wynik.toFixed(2)
  }
  const getEqupment = (listOfEquipments) => {
    const equipments = []
    if (listOfEquipments.length === 0) {
      return 'Brak wyposażenia'
    }
    listOfEquipments.map((x) => {
      equipments.push(x.namePL)
    })
    return equipments
  }
  const showMore = () => {
    setFirst((x) => x + 2)
  }
  return (
    <>
      <Row>
        <Col className="places-header" />
      </Row>
      <Row>
        <Col className="places-counter no-padding">
          {HowManyGyms()} z {HowManyGyms()} obiektów
        </Col>
      </Row>

      {data.sportObjectsByCity.map((building) =>
        building.gymsFilter.map((gym) => (
          <>
            <li key={gym._id} style={{ listStyleType: 'none' }}>
              {loading ? (
                <Skeleton variant="rect" width={800} height={118} />
              ) : (
                <Container className="places-object-main">
                  <Row className="places-object ">
                    <Col sm={12} md={4} className="no-padding">
                      <Image
                        className="places-photo"
                        src={gym.mainPhoto}
                        alt="brak zdjęcia"
                      />
                    </Col>
                    <Col
                      sm={12}
                      md={4}
                      className="places-centerColumn no-padding"
                    >
                      <Col className="places-name no-padding">
                        {building.name}
                        <br />
                        {gym.name}
                      </Col>
                      <Col className="no-padding">
                        <Col className="places-assessment no-padding">
                          <div className="places-score">
                            <StarRateIcon />

                            {CalculateOpionions(gym.reviews)}
                          </div>
                          <div className="places-opinions">
                            {HowManyOpininons(gym.reviews.length)}
                          </div>
                        </Col>
                        <Col className="places-tags-wrap">
                          <Col className="places-tags no-padding">
                            {getEqupment(gym.equipments)}
                          </Col>
                        </Col>
                      </Col>
                      <Col className="places-localization no-padding">
                        <Button
                          aria-describedby={id}
                          variant="contained"
                          color="primary"
                          onClick={handleClick}
                        >
                          Położenie – pokaż na mapie
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
                          <Map {...building} {...other} />
                        </Popover>
                        <Col className="no-padding places-localization-place">
                          {building.address.city}
                        </Col>
                      </Col>
                    </Col>
                    <Col sm={12} md={4} className="places-endColumn">
                      <Col className="places-price no-padding">
                        <Col className="places-stack ">{gym.price} zł/h</Col>
                        <Link
                          className="places-button"
                          to={{
                            pathname: `/placeinfo/${building._id}/${gym._id}`,
                            state: {
                              date,
                            },
                          }}
                        >
                          Wyśwetl Obiekt
                        </Link>
                      </Col>
                    </Col>
                  </Row>
                </Container>
              )}
            </li>
            <br />
          </>
        )),
      )}

      <Row>
        <Button
          className="places-show-more"
          variant="contained"
          onClick={() => showMore()}
        >
          Pokaz Więcej Wyników
        </Button>
      </Row>
    </>
  )
}
Places.defaultProps = {
  city: 'Gdańsk',
}
export default Places
