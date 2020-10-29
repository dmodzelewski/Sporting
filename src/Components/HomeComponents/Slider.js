import React, { useState } from "react";
import { Carousel, Col } from "react-bootstrap";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Col className="Slider-main no-padding" fluid="true">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 Slider"
            src="https://www.thoughtfulleader.com/wp-content/uploads/2019/09/Motivation-at-Work-Main.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 Slider"
            src="https://trigerz.io/wp-content/uploads/2019/07/I-Can.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 Slider"
            src="https://miro.medium.com/max/4096/1*DE3QhK0g0gLUHKrEKXB7jA.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Col>
  );
};
export default Slider;

