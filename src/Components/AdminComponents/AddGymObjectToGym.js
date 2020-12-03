import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { gql, useMutation, useQuery } from '@apollo/client'
import Skeleton from '@material-ui/lab/Skeleton'

const gymType = gql`
  {
    gymTypes {
      _id
      name
      namePL
    }
  }
`
const addGymToSportObject = gql`
  mutation addGym(
    $sportObject: ID
    $gymType: ID
    $name: String
    $description: String
    $phoneNumber: String
    $price: Float
    $availability: Int
  ) {
    addGym(
      sportObject: $sportObject
      gymType: $gymType
      name: $name
      description: $description
      phoneNumber: $phoneNumber
      price: $price
      availability: $availability
    ) {
      _id
    }
  }
`
const AddGymObjectToGym = ({ objectid }) => {
  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [price, setprice] = useState(0)
  const [availability, setavailability] = useState(1)
  const [type, setType] = useState('')
  const [AddGym] = useMutation(addGymToSportObject)
  const res = useQuery(gymType)
  if (res.loading) return <Skeleton variant="rect" width={800} height={118} />
  if (res.error) return `Error! ${res.error.message} `
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Nazwa Obiektu</Form.Label>
          <Form.Control
            type="text"
            placeholder="Wprowadź nazwę"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rodzaj sali</Form.Label>
          <Form.Control
            as="select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {res.data.gymTypes.map((item) => (
              <option value={item._id}>{item.namePL}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Opis</Form.Label>
          <Form.Control
            type="text"
            placeholder="Wprowadź opis"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Numer Telefonu</Form.Label>
          <Form.Control
            type="text"
            placeholder="Wprowadź numer Telefonu"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Cena za godzinę</Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź Cenę"
            value={price}
            onChange={(e) => setprice(parseInt(e.target.value, 10))}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ilość miejsc</Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź ilość miejsc"
            value={availability}
            onChange={(e) => setavailability(parseInt(e.target.value, 10))}
          />
          <Form.Text>Wprowadź jeżeli istnieje</Form.Text>
        </Form.Group>
        <Button
          onClick={() =>
            AddGym({
              variables: {
                sportObject: objectid,
                gymType: type,
                name,
                description,
                phoneNumber,
                price,
                availability,
              },
            })
          }
          variant="primary"
          type="button"
        >
          Submit
        </Button>
      </Form>
    </>
  )
}
export default AddGymObjectToGym
