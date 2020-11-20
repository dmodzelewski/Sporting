import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: "10px",
  },
});

export const GymsAdmin = () => {
  const classes = useStyles();
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

              {object.gyms.map((gym) => (
                <Card className={classes.root} key={gym._id}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      className="gyms-admin-photo"
                      src={gym.mainPhoto}
                      alt={"https://bit.ly/3ns4BtS"}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {gym.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Średnia Ocena {gym.avgRate.toFixed(2)}
                    </Button>
                    <Button size="small" color="primary">
                      Cena {gym.price} zł/h
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Row>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
