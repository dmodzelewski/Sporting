import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import Popup from "reactjs-popup";
import Rating from "@material-ui/lab/Rating";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const labels = {
 
  0.5: "Żenada",
  1: "Beznadziejnie",
  1.5: "Okropnie",
  2: "Słabo",
  2.5: "Ok",
  3: "Nawet dobrze",
  3.5: "Dobrze",
  4: "Bardzo dobrze",
  4.5: "Wyśmienicie",
  5: "Niesamowicie",
};

const Comments = () => {


  const [value, setValue] = useState(3);
  const [hover, setHover] = useState(-1);
  const [Opinions, setOpinions] = useState([]);

  const [Name, setName] = useState("");
  const [Text, setText] = useState("");
  const currentDate = new Date();
  const AddOpinions = (event) => {
    event.preventDefault();
    setOpinions([
      ...Opinions,
      {
        id: Opinions.length,
        opinionName : labels[hover !== -1 ? hover : value],
        opinionValue : value,
        name: Name,
        text: Text,

        starValue: value,
      },
    ]);
  };
  return (
    <>
      <Col className="place-comment no-padding">
        <Col className="place-text-header no-padding">Wszystkie Opinie</Col>
        <Col className="place-comment-review no-padding">
          <Col style={{ position: "relative", padding: "0px" }}>
            <ul className="place-comment-scroll">
              {Opinions.length === 0 ? (
                <h1>Brak Komentarzy</h1>
              ) : (
                Opinions.map((item) => (
                  <li key={item.id} className=" no-padding">
                    <Col className="place-comment-reviewbox no-padding">
                      <Col className="place-comment-rev-up no-padding">
                        <Col className="place-comment-info no-padding">
                          {item.opinionName} <span>{item.opinionValue}</span>
                        </Col>
                        <Col className="place-comment-date">
                          Dodano{" "}
                          {currentDate.getDay() +
                            "." +
                            currentDate.getMonth() +
                            "." +
                            currentDate.getFullYear() +
                            " "}
                          , autor: {item.name}
                        </Col>
                      </Col>
                      <Col className="place-comment-rev-box-down">
                        <Col className="place-comment-rev-box">
                          <Col>
                            <Rating
                              readOnly={true}
                              name="hover-feedback"
                              value={item.starValue}
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
                ))
              )}
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
            <Rating
              name="hover-feedback"
              value={value}
              size="large"
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            <InputLabel
              className="place-comment-label"
              htmlFor="input-with-icon-adornment"
            >
              Napisz co uważasz
            </InputLabel>
            <TextField
              value={Text}
              onChange={(x) => setText(x.target.value)}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
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
