import React, { Component } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

export default class Photos extends Component {
  render() {
    return (
      <>
        <Container fluid >
          <Row>
            <Col md={6} className="no-padding place-image-main">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg"
                fluid
              />
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6} className="no-padding">
                  {" "}
                  <Image
                    className="place-image-side"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg"
                    fluid
                  />
                </Col>
                <Col md={6} className="no-padding">
                  {" "}
                  <Image
                    className="place-image-side"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg"
                    fluid
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} className="no-padding">
                  {" "}
                  <Image
                    className="place-image-side"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg"
                    fluid
                  />
                </Col>
                <Col md={6} className="no-padding">
                  {" "}
                  <Image
                    className="place-image-side "
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Backyardpool.jpg/1200px-Backyardpool.jpg"
                    fluid
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
