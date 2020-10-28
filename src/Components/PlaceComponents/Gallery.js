import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const Photos = (props) => {
  const gym = gql`
    {
      gymById(gymId: "${props.match.params.gymid}") {
        name
        mainPhoto
        sidePhotos
      }
    }
  `;
  const { loading, error, data } = useQuery(gym);
  if (loading) return <Skeleton variant="rect" width={800} height={118} />;
  if (error) return `Error! ${error.message} `;

  const images = [
    data.gymById.sidePhotos.map((x) => ({
      original: x,
      thumbnail: x,
    })),
  ];
  images[0].unshift({
    original: `${data.gymById.mainPhoto}`,
    thumbnail: `${data.gymById.mainPhoto}`,
  });
  return (
    <>
      <Col className="place-gallery no-padding">
        <section style={{ width: "100%" }}>
          <Col className="no-padding place-gallery-main">
            <ImageGallery showPlayButton={false} items={images[0]} />;
          </Col>
        </section>
      </Col>
    </>
  );
};
export default Photos;
