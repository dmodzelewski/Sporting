import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ReviewFilter from "../ReserveComponents/Filter/ReviewFilter";
import TextField from "@material-ui/core/TextField";
import Popup from "reactjs-popup";
import Rating from "@material-ui/lab/Rating";

const Comments = () => {
  const [value, setValue] = React.useState(3);
  const [Opinions, setOpinions] = useState([]);
  const [Name, setName] = useState("");
  const [Text, setText] = useState("");
  const AddOpinions = (event) => {
    event.preventDefault();
    setOpinions([
      ...Opinions,
      {
        id: Opinions.length,
        name: Name,
        text: Text,
      },
    ]);
    console.log(Opinions);
  };
  return (
    <>
      <Col className="place-comment no-padding">
        <Col className="place-text-header no-padding">Wszystkie Opinie</Col>
        <Col className="place-comment-review no-padding">
          <Col style={{ position: "relative", padding: "0px" }}>
            <ul className="place-comment-scroll">
              {Opinions.map((item) => (
                <li
                  key={item.id}
                  className="place-comment-onereview no-padding"
                >
                  <Col className="place-comment-reviewbox no-padding">
                    <Col className="place-comment-rev-up no-padding">
                      <Col className="place-comment-info no-padding">
                        Słaby <span>3.0</span>
                      </Col>
                      <Col className="place-comment-date">
                        Dodano cze 2020, autor: {item.name}
                      </Col>
                    </Col>
                    <Col className="place-comment-rev-box-down">
                      <Col className="place-comment-rev-box">
                        <Col>
                          <Rating
                            readOnly={true}
                            name="hover-feedback"
                            value={value}
                            size="large"
                            precision={0.5}
                          />
                        </Col>
                      </Col>
                      <Col className="place-comment-rev-textbox">
                        <p>{item.text}</p>
                      </Col>
                    </Col>
                  </Col>
                </li>
              ))}
            </ul>
          </Col>
        </Col>
        <Popup
          trigger={<Button className="button"> Dodaj opinię </Button>}
          modal
        >
          <Col className="no-padding">
            <InputLabel
              className="place-comment-label"
              htmlFor="input-with-icon-adornment"
            >
              Podaj swoje imię
            </InputLabel>
            <Input
              className="place-comment-input"
              id="input-with-icon-adornment"
              value={Name}
              onChange={(x) => setName(x.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <InputLabel
              className="place-comment-label"
              htmlFor="input-with-icon-adornment"
            >
              Podaj ocenę w skali 1 do 5
            </InputLabel>
            <ReviewFilter />
            <InputLabel
              className="place-comment-label"
              htmlFor="input-with-icon-adornment"
            >
              Napisz co uważasz
            </InputLabel>
            <TextField
              value={Text}
              onChange={(x) => setText(x.target.value)}
              className="place-comment-textfield"
              placeholder="Twoja ocena..."
              multiline
              rows={2}
              rowsMax={4}
            />
            <Col className="place-comment-button">
              <Button onClick={(e) => AddOpinions(e)}>oceń</Button>
            </Col>
          </Col>
        </Popup>
      </Col>
    </>
  );
};
export default Comments;
