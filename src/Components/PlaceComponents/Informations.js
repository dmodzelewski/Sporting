import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Descryption from './InfoComponents/Descryption'
import Price from './InfoComponents/Price'
import Availability from './InfoComponents/Availability'
import Equipments from './InfoComponents/Equipments'
const Informations = (props) => {
  return (
    <>
      <Col className="place-comment no-padding">
        <Col className="place-text-header no-padding">
          Informacje o obiekcie
        </Col>
        <Row>
          <Col md={6}>
            <Col>
              <Col>
                <Descryption match={props} />
              </Col>
              <Col>
                <Price match={props} />
              </Col>
              <Col>
                <Availability match={props} />
              </Col>
            </Col>
          </Col>
          <Col md={6}>
            <Equipments match={props} />
          </Col>
        </Row>
      </Col>
    </>
  )
}
export default Informations
