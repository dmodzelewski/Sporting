import React from "react";
import { Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import AddSportObject from "../Components/AdminComponents.js/AddSportObject";
import SportObjectsAdmin from "../Components/AdminComponents.js/SportObjectsAdmin";
import { gql, useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import ReverseGeocoding from "../Components/CommonComponents/Search/GetCurrentPosition";
import { GymsAdmin } from "../Components/AdminComponents.js/GymsAdmin";

const SportObject = gql`
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
        mainPhoto
        avgRate
        price
      }
    }
  }
`;
const AdminPanel = () => {
  const res = useQuery(SportObject);
  if (res.loading) return <Skeleton />;
  if (res.error) return `Error! ${res.error.message} `;

  return (
    <>
      <Tabs
        defaultActiveKey="SportObject"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="SportObject" title="Dodaj Obiekt Sportowy">
          <Container>
            <Row>
              <Col>
                <Row>
                  <SportObjectsAdmin SportObjects={res.data.sportObjects} />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="admin-panel-button">
                <Button>Dodaj Nowy Obiekt</Button>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="Gym" title="Dodaj Salę do obiektu spotowego">
          <Container>
            <Row>
              <Col>
                <Row>
                  <GymsAdmin />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="admin-panel-button">
                <Button>Dodaj Sale do Obiektu</Button>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="contact" title="Więcj w przyszłości.." disabled></Tab>
      </Tabs>
    </>
  );
};
export default AdminPanel;
