import React, { useState, useEffect, useCallback } from 'react'
import { Container, Col, Row, Button, Form } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { Plugins } from '@capacitor/core'
import RoomIcon from '@material-ui/icons/Room'
import CalendarField from './Calendar/CalendarField'

const { Geolocation } = Plugins

const Search = () => {
  const [long, setLong] = useState(10)
  const [lat, setLat] = useState(10)
  const [city, setCity] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [date, setDate] = useState(new Date())

  const history = useHistory()
  // City filter part
  const cities = gql`
    query City($localization: String!) {
      cities(first: 5, filter: $localization) {
        NAZWA
        Wojewodztwo
        Gmina
      }
    }
  `

  let currentCityLocation = ''
  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition(true)
    setLong(coordinates.coords.longitude)
    setLat(coordinates.coords.latitude)
  }
  const ReverseGeocoding = async () => {
    getCurrentPosition()
    const place = `https://us1.locationiq.com/v1/reverse.php?key=pk.6cea20c72e201ece96127cb84cd81029&lat=${lat}&lon=${long}&format=json`

    // eslint-disable-next-line no-undef
    const response = await fetch(place)
    const JSONdata = await response.json()

    try {
      currentCityLocation = JSONdata.address.city
    } catch (error) {
      return error
    }
    if (currentCityLocation == null) {
      try {
        currentCityLocation = JSONdata.address.village
      } catch (error) {
        return error
      }
    }

    return currentCityLocation
  }
  useEffect(() => {
    getCurrentPosition()
  })
  const SetCityByLocalization = (myCity) => {
    Promise.resolve(myCity).then(function (val) {
      setCity(val)
    })
  }

  const SelectCityHandler = (e) => {
    const formatCity = e.target.innerHTML.toString().split(',')[0].split(':')[1]

    setCity(formatCity)
  }

  const { loading, error, data } = useQuery(cities, {
    variables: { localization: city },
  })

  const RenderData = () => {
    if (loading) return <p className="search-filter-city">Loading...</p>
    if (error) return `Error! Nie udało się pobrać lokalizacji `
    if (city === '') return ''

    return (
      <>
        <div className="search-filter-city">
          <ul role="listbox">
            <li onClick={() => SetCityByLocalization(ReverseGeocoding())}>
              <RoomIcon />
              <p>Wybierz własną lokalizację</p>
            </li>
            {data.cities.map(({ NAZWA, Wojewodztwo, Gmina }) => (
              <li
                key={NAZWA + Wojewodztwo + Gmina}
                onClick={SelectCityHandler.bind(this)}
              >
                <Col>
                  <Row>Miasto: {NAZWA}</Row>
                  <Row>Gmina : {Gmina}</Row>
                  <Row>Województwo: {Wojewodztwo}</Row>
                </Col>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }

  const CheckNegative = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  const SearchHandle = () => {
    history.push({
      pathname: '/reserve',
      state: {
        passCity: city,
        passDate: date,
        passQuantity: quantity,
        passLongitude: long,
        passLatitude: lat,
      },
    })
  }
  const whenis = useCallback(
    (calendarDate) => {
      setDate(calendarDate)
    },
    [date, setDate],
  )
  return (
    <Container fluid className="search-bg">
      <Row>
        <Col className="search-object">
          <Row>
            <Col className="search-filters">
              <Row>
                <Col sm={12} md={3}>
                  <Row>
                    <Col>
                      <b>Lokalizacja</b>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        plaintext
                        placeholder="Podaj miejscowość"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                      />
                      {RenderData()}
                    </Col>
                  </Row>
                </Col>
                <Col sm={12} md={3} className="no-padding">
                  <CalendarField GetDate={whenis} />
                </Col>
                <Col sm={12} md={3}>
                  <Row>
                    <Col>
                      <b> Liczba dostępnych miejsc</b>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="search-filters-quantity">
                      <RemoveIcon onClick={() => CheckNegative()} />
                      {quantity}
                      <AddIcon onClick={() => setQuantity(quantity + 1)} />
                    </Col>
                  </Row>
                </Col>

                <Col sm={12} md={3}>
                  <Button className="search-button" onClick={SearchHandle}>
                    <Row>
                      <Col sm={3}>
                        <FaSearch />
                      </Col>
                      <Col sm={{ span: 4, offset: 1 }}>Szukaj</Col>
                    </Row>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Search
