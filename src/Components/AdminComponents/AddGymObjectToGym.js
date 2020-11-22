import React from 'react'
import { Button, Form } from 'react-bootstrap'

const AddGymObjectToGym = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Nazwa Obiektu</Form.Label>
        <Form.Control type="text" placeholder="Wprowadź nazwę" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Miasto</Form.Label>
        <Form.Control type="text" placeholder="Wprowadź miasto" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Ulice</Form.Label>
        <Form.Control type="text" placeholder="Wprowadź Ulice" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nr. budynku</Form.Label>
        <Form.Control type="text" placeholder="Wprowadź Nr. budynku" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nr.Lokalu</Form.Label>
        <Form.Control type="text" placeholder="Wprowadź Nr.Lokalu" />
        <Form.Text>Wprowadź jeżeli istnieje</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
export default AddGymObjectToGym
