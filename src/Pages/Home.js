import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Search from '../Components/CommonComponents/Search/Search'
import Choice from '../Components/HomeComponents/Choice'
import '../Styles/choice.scss'
import Slider from '../Components/HomeComponents/Slider'

const Home = () => {
  return (
    <>
      <Search />
      <Choice />
      <Container fluid style={{ marginBottom: '40px' }}>
        <Col className="no-padding">
          <Row>
            <Col className="no-padding" sm={12} md={6}>
              <Slider />
            </Col>
            <Col sm={12} md={6}>
              <Col>
                <Row>
                  <Col className="home-section">
                    <Row>
                      <Col className="home-header">
                        <h1>
                          <b>Witaj w Isportio</b>
                        </h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="home-paragraph">
                          Witaj na stronie do wyszukiwania obiektów sportowych
                          dzięki nam możesz zapisać się do dowolnego obiektu
                          sportowego znajdujacego się w twojej okolicy.
                        </h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="home-section">
                    <Row>
                      <Col className="home-header">
                        <h1>
                          <b>Wynajmij swój obiekt</b>
                        </h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className="home-paragraph">
                          Jesteś właścicielem obiektu sportowego? Wystaw u nas
                          swój obiekt by pozyskać z niego przychody. Po
                          rezerwacji każdy właściciel ma informacje zwrotną o
                          zapisanym do niego na okresloną godzine osobie.
                        </h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  )
}
export default Home
