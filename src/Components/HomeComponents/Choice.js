import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import {
  FaSwimmingPool,
  FaBasketballBall,
  FaFutbol,
  FaDumbbell,
  FaQuidditch,
} from 'react-icons/fa'
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi'
import { useHistory } from 'react-router-dom'
import { IoMdTennisball } from 'react-icons/io'

const Choice = () => {
  const history = useHistory()
  const handleTag = (tag) => {
    history.push({
      pathname: '/reserve',
      state: { passTag: tag },
    })
  }
  return (
    <Container fluid className="choice">
      <Row>
        <Col className="choice-object">
          <Row>
            <Col className="choice-header">Wybierz interesujący Cię sport</Col>
          </Row>
          <Row className="choice-sports">
            <Col
              onClick={() => handleTag('5f8d6dffac92050c9948611d')}
              className="choice-sports-objects"
              style={{ background: '#819ABE' }}
            >
              <Row>
                <Col className="choice-sports-body swimming">
                  <FaSwimmingPool className="choice-sports-icons" />
                </Col>
              </Row>
              <Row>
                <Col className="choice-sports-text">Pływanie</Col>
              </Row>
            </Col>
            <Col
              onClick={() => handleTag('5f98045d3c81155f98a70279')}
              className="choice-sports-objects"
              style={{ background: '#CBA967' }}
            >
              <Row>
                <Col className="choice-sports-body basketball">
                  <FaBasketballBall className="choice-sports-icons" />
                </Col>
              </Row>
              <Row>
                <Col className="choice-sports-text">Koszykówka</Col>
              </Row>
            </Col>
            <Col
              onClick={() => handleTag('football')}
              className="choice-sports-objects"
              style={{ background: '#CECECE' }}
            >
              <Row>
                <Col className="choice-sports-body football">
                  <FaFutbol className="choice-sports-icons" />
                </Col>
              </Row>
              <Row>
                <Col className="choice-sports-text">Piłka nożna</Col>
              </Row>
            </Col>
            <Col
              onClick={() => handleTag('tennis')}
              className="choice-sports-objects"
              style={{ background: '#B4C084' }}
            >
              <Row>
                <Col className="choice-sports-body tennis">
                  <IoMdTennisball className="choice-sports-icons" />
                </Col>
              </Row>
              <Row>
                <Col className="choice-sports-text">Tenis</Col>
              </Row>
            </Col>
            <Col
              onClick={() => handleTag('yoga')}
              className="choice-sports-objects"
              style={{ background: '#CDB8D4' }}
            >
              <Row>
                <Col className="choice-sports-body yoga">
                  <FaSwimmingPool className="choice-sports-icons" />
                </Col>
              </Row>
              <Row>
                <Col className="choice-sports-text">Yoga</Col>
              </Row>
            </Col>
            <Col
              onClick={() => handleTag('gym')}
              className="choice-sports-objects"
              style={{ background: '#CA6D6D' }}
            >
              <Row>
                <Col className="choice-sports-body gym">
                  <FaDumbbell className="choice-sports-icons" />
                </Col>
              </Row>
              <Row>
                <Col className="choice-sports-text">Siłownia</Col>
              </Row>
            </Col>
            <Col
              className="choice-sports-objects"
              style={{ background: '#AB9382' }}
            >
              <Row>
                <Col className="choice-sports-body quidditch">
                  <FaQuidditch className="choice-sports-icons" />
                </Col>
              </Row>
              <Row>
                <Col className="choice-sports-text">Quidditch</Col>
              </Row>
            </Col>
            <Col
              onClick={() => handleTag('fight')}
              className="choice-sports-objects"
              style={{ background: '#DABB6C' }}
            >
              <Row>
                <Col className="choice-sports-body fight">
                  <SportsKabaddiIcon className="choice-sports-icons" />
                </Col>
              </Row>
              <Row>
                <Col className="choice-sports-text">Sporty walki</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Choice
