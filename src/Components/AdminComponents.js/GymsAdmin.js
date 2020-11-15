import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";

export const GymsAdmin = () => {
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
  `;
  const res = useQuery(gyms);
  if (res.loading) return <Skeleton />;
  if (res.error) return `Error! ${res.error.message} `;

  return (
    <Col>
      <Row>
        {res.data.sportObjects.map((object) => (
          <Col key={object._id}>
            <Row>
              <Col>
                <Row>
                  <Col className="gyms-objects">{object.name}</Col>
                </Row>
              </Col>
              <Row>
                {object.gyms.map((gym) => (
                  <Col className="gyms-admin" md={3} key={gym._id}>
                    <Row>
                      <Col>
                        <Image
                          className="gyms-admin-photo"
                          src={gym.mainPhoto}
                          alt={"https://bit.ly/3ns4BtS"}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="gyms-objects-text">{gym.name}</Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col className="gyms-objects-avg">
                            Średnia Ocena {gym.avgRate}
                          </Col>
                          <Col className="gyms-objects-price">
                            Cena {gym.price} zł/h
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Row>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
