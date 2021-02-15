import React, { useState, useCallback, useEffect } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import TextField from '@material-ui/core/TextField'
import { gql, useQuery } from '@apollo/client'
import ReviewFilter from '../Components/ReserveComponents/Filter/ReviewFilter'
import Places from '../Components/ReserveComponents/Places'
import TypeFilter from '../Components/ReserveComponents/Filter/TypeFilter'
import Search from '../Components/CommonComponents/Search/Search'

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => {
  return <input type={type} name={name} checked={checked} onChange={onChange} />
}
const Reserve = ({ location }) => {
  const types = gql`
    {
      gymTags {
        _id
        namePL
      }
    }
  `
  const [opinion, setOpinion] = useState(0)
  const [price, setValue] = useState([0, 200])
  const [type, settype] = useState()
  const [checked, setchecked] = useState({})
  const [tag, setTag] = useState([])
  const handlePriceChange = (event, newValue) => {
    setValue(newValue)
  }
  const FilterReview = (opinionFilter) => {
    setOpinion(opinionFilter)
  }
  const FilterType = (typeFilter) => {
    settype(typeFilter)
  }

  const valuetext = (priceFilter) => {
    return `${priceFilter}°C`
  }
  const clearFilters = () => {
    setchecked({})
    settype(null)
    setValue([0, 200])
    setOpinion(0)
  }
  useEffect(() => {
    const allTags = Object.entries(checked).map((x) => {
      if (x[1] === true) {
        return x[0]
      }
      return 'del'
    })
    const abc = allTags.filter((x) => {
      return x !== 'del'
    })
    setTag(abc)
  }, [checked])

  const handleCheckboxChange = useCallback((event) => {
    setchecked({
      ...checked,
      [event.target.name]: event.target.checked,
    })
  })

  const checkboxes = [
    {
      id: '5f8d715427ca0312196cbbef',
      name: 'Darmowy parking',
      key: 'checkBox1',
      label: 'Check Box 1',
    },
    {
      id: '5fa6acd28d95f64e423c23c9',
      name: 'Zniżki dla seniorów',
      key: 'checkBox2',
      label: 'Check Box 2',
    },
  ]
  const res = useQuery(types)
  if (res.loading) return <Skeleton variant="rect" width={800} height={118} />
  if (res.error) return `Error! ${res.error.message} `
  return (
    <>
      <Container className="reserve">
        <Row>
          <Col className="filter" md={3}>
            <Row>
              <Col className="filter-section-header">Udogodnienia</Col>
            </Row>
            <Row className="filters">
              <Col>
                {checkboxes.map((item) => (
                  <Col className="filter-section-checkbox" key={item.key}>
                    <Col sm={4} md={9} className="filter-section-checkbox-name">
                      {item.name}
                    </Col>

                    <Checkbox
                      name={item.id}
                      checked={checked[item.id]}
                      onChange={handleCheckboxChange}
                    />
                  </Col>
                ))}
              </Col>
            </Row>
            <Row>
              <Col className="filter-section-header">Cena</Col>
            </Row>
            <Row className="filters">
              <Col>
                <Form>
                  <Typography id="range-slider" gutterBottom>
                    Cena za godzinę
                  </Typography>
                  <Slider
                    value={price}
                    onChange={handlePriceChange}
                    min={0}
                    max={200}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
                  <Row>
                    <Col className="filter-price">
                      <TextField
                        id="outlined-number"
                        label="Od"
                        type="number"
                        value={price[0]}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-number"
                        label="Do"
                        type="number"
                        value={price[1]}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col className="filter-section-header">Ocena</Col>
            </Row>
            <Col className="filters">
              <ReviewFilter Review={FilterReview} isReadOnly={false} />
            </Col>
            <Row>
              <Col className="filter-section-header">Typy</Col>
            </Row>
            <Col className="filters-end">
              <TypeFilter Type={FilterType} />
            </Col>
            <Button className="filter-button" onClick={() => clearFilters()}>
              Wyczyść
            </Button>
          </Col>

          <Col md={9}>
            <Places
              price={price}
              opinion={opinion}
              type={type}
              choosenType={location.state.passTag}
              other={location.state}
              tag={tag}
              city={location.state.passCity}
              availability={location.state.passQuantity}
              date={location.state.passDate}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
Reserve.propTypes = {
  location: PropTypes.object.isRequired,
}
export default Reserve
