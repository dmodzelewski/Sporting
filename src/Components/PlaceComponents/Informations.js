import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckSquare } from "react-icons/fa";
const Informations = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col className="place-text-header">Informacje o obiekcie</Col>
          </Row>
          <Row>
            <Col className="place-text">
              Nisi dolor anim dolore nostrud velit deserunt enim cupidatat
              consequat velit ipsum eiusmod consequat. Nostrud ex eu fugiat
              aliqua mollit eiusmod ea ipsum do exercitation consequat. Dolor
              proident ea tempor cupidatat laboris consectetur exercitation
              Lorem adipisicing consectetur sit. Duis id ullamco esse ad labore
              est esse qui reprehenderit consequat eiusmod consectetur eu.
              Tempor cillum dolore aliqua nulla magna dolore cillum et
              consectetur non nisi eu. Reprehenderit et reprehenderit ut
              deserunt. Fugiat pariatur ea occaecat nisi aute minim cillum
              dolore ea sint anim aute dolor. Duis do veniam elit voluptate
              aliquip ad excepteur magna ipsum duis. Esse minim occaecat ea
              proident voluptate eu. Ea occaecat adipisicing minim nisi id
              eiusmod laboris. Sit magna proident incididunt nulla cillum quis
              nostrud in sint sit consectetur ex amet. Quis enim officia nisi do
              Lorem magna quis labore magna minim enim nulla aliquip non. Id ad
              minim reprehenderit amet irure eu culpa deserunt nulla voluptate
              ullamco occaecat. Adipisicing aliqua excepteur laboris do. Ipsum
              quis excepteur voluptate consequat sunt quis nostrud. Est do
              officia aliqua minim commodo cillum do dolor dolor adipisicing
              non. Eiusmod laborum tempor elit amet laboris aliquip Lorem amet
              eiusmod Lorem esse Lorem culpa. Reprehenderit amet cillum anim
              duis irure laboris in esse consectetur. Est aliqua ullamco tempor
              irure qui officia duis nisi. Labore tempor commodo sit minim
              veniam ea aute consequat ad laborum. Mollit elit proident qui
              nulla velit amet elit cupidatat. Lorem do tempor id enim ea
              exercitation Lorem consectetur dolor eu aliqua culpa velit. Velit
              in do dolore irure cupidatat aliquip. Exercitation culpa quis
              laboris eiusmod enim proident do proident commodo ut duis
              exercitation sint.
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row>
            <Col className="place-text-header">Udogodnienia</Col>
          </Row>
          <Row>
            <Col className="place-benefits">
              <Row>
                <Col md={1}>
                  <FaCheckSquare />
                </Col>
                <Col>Darmowy Parking</Col>
              </Row>{" "}
              <Row>
                <Col md={1}>
                  <FaCheckSquare />
                </Col>
                <Col>Darmowy Parking</Col>
              </Row>{" "}
              <Row>
                <Col md={1}>
                  <FaCheckSquare />
                </Col>
                <Col>Darmowy Parking</Col>
              </Row>{" "}
              <Row>
                <Col md={1}>
                  <FaCheckSquare />
                </Col>
                <Col>Darmowy Parking</Col>
              </Row>{" "}
              <Row>
                <Col md={1}>
                  <FaCheckSquare />
                </Col>
                <Col>Darmowy Parking</Col>
              </Row>{" "}
              <Row>
                <Col md={1}>
                  <FaCheckSquare />
                </Col>
                <Col>Darmowy Parking</Col>
              </Row>{" "}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Informations;
