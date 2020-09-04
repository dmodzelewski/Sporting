import React from "react";
import { Col, Image } from "react-bootstrap";
import ImageGallery from "react-image-gallery";

const Photos = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <Col className="place-gallery no-padding">
        <section style={{ width: "100%" }}>
          <Col className="no-padding place-gallery-main">
            <ImageGallery showPlayButton={false} items={images} />;
          </Col>
        </section>
      </Col>
    </>
  );
};
export default Photos;
