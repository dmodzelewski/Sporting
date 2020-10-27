import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const Photos = (props) => {
  const gym = gql`
    {
      gymById(gymId: "redfv") {
        name
        mainPhoto
      }
    }
  `;
  const { loading, error, data } = useQuery(gym);
  if (loading) return <Skeleton variant="rect" width={800} height={118} />;
  if (error) return `Error! ${error.message} `;
  const images = [
    {
      original: `${props.gymById.mainPhoto}`,
      thumbnail: `${props.gymById.mainPhoto}`,
    },
    {
      original: "https://picsum.photos/1000/600/",
      thumbnail: "https://picsum.photos/250/150/",
    },
    {
      original: "https://picsum.photos/1000/600/",
      thumbnail: "https://picsum.photos/250/150/",
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
