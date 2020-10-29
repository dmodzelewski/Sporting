import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import Popup from "reactjs-popup";
import Rating from "@material-ui/lab/Rating";
import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import Login from "../LoginComponents/Login";
import Skeleton from "@material-ui/lab/Skeleton";

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

const Comments = (props) => {
  const [value, setValue] = useState(3);
  const [hover, setHover] = useState(-1);
  const [Name, setName] = useState("");
  const [Text, setText] = useState("");
  const addOpinion = gql`
    mutation {
      addReview(user: "${localStorage.getItem(
        "userid"
      )}", description: "${Text}", starRate: ${value}, gym: "${
    props.match.params.gymid
  }") {
        _id
      }
    }
  `;
  const [addNewOpinion] = useMutation(addOpinion);
  const comments = gql`
  {
    gymById(gymId: "${props.match.params.gymid}") {
      reviews{
        _id
        starRate
        createdAt
        description
        user{
          _id
          lastName
          firstName 
          }
        }
      }     
     }
`;
  const user = gql`
  {
    userByEmail(loginEmail:"${localStorage.getItem("email")}"){
      lastName
      firstName
    }
    }
  `;
  const res = useQuery(comments);
  const secondRes = useQuery(user);
  if (res.loading) return <Skeleton />;
  if (res.error) return `Error! ${res.error.message} `;
  
  const isLogged = () => {
    if (localStorage.getItem("token")) {
      return false;
    } else {
      return true;
    }
  };
  const GetOpinionName = (name) => {
    return labels[name !== -1 ? name : value];
  };
  const GetDateAndTime = (date) => {
    const currentDate = date.split("T")[0];
    const currentTime =
      date.split("T")[1].split(":")[0] + ":" + date.split("T")[1].split(":")[1];
    const formatTime = currentDate + " " + currentTime;
    return formatTime;
  };
  const AddOpinions = () => {
    addNewOpinion().then(function (val) {
      console.log(val);
    });
  };

  return (
    <>
      <Col className="place-comment no-padding">
        <Col className="place-text-header no-padding">Wszystkie Opinie</Col>
        <Col className="place-comment-review no-padding">
          <Col style={{ position: "relative", padding: "0px" }}>
            <ul className="place-comment-scroll">
              {res.data.gymById.reviews.length === 0 ? (
                <h1>Brak Komentarzy</h1>
              ) : (
                res.data.gymById.reviews.map((item) => (
                  <li key={item._id} className=" no-padding">
                    <Col className="place-comment-reviewbox no-padding">
                      <Col className="place-comment-rev-up no-padding">
                        <Col className="place-comment-info no-padding">
                          {GetOpinionName(item.starRate)}{" "}
                          <span>{item.starRate}</span>
                        </Col>
                        <Col className="place-comment-date">
                          {/* Czekam na dodanie w graphQl */}
                          Dodano {GetDateAndTime(item.createdAt)}, autor:{" "}
                          {item.user.firstName + " " + item.user.lastName}
                        </Col>
                      </Col>
                      <Col className="place-comment-rev-box-down">
                        <Col className="place-comment-rev-box">
                          <Col>
                            <Rating
                              readOnly={true}
                              name="hover-feedback"
                              value={item.starRate}
                              size="large"
                              precision={0.5}
                            />
                          </Col>
                        </Col>
                        <Col className="place-comment-rev-textbox">
                          <p>{item.description}</p>
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
          trigger={
            //disabled={isLogged()}
            <Button className="button"> Dodaj opinię </Button>
          }
          modal
        >
          <Col className="no-padding">
            <InputLabel
              className="place-comment-label"
              htmlFor="input-with-icon-adornment"
            >
              Twoje imię
            </InputLabel>
            <Input
              className="place-comment-input"
              id="input-with-icon-adornment"
              value={
                secondRes.data.userByEmail.firstName +
                " " +
                secondRes.data.userByEmail.firstName
              }
              readOnly={true}
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
              <Button onClick={AddOpinions}>oceń</Button>
            </Col>
          </Col>
        </Popup>
        <Col className="loggin-place">
          <Col className="text-loggin-place">
            <p>
              Aby zarezerwować się do obiektu, lub by dodawać komentarze musisz
              być zalogowany!
            </p>
          </Col>
          <Col className="button-loggin-place">
            <Popup
              trigger={
                <Button
                  style={
                    isLogged()
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                  }
                >
                  Zaloguj Się
                </Button>
              }
              modal
            >
              <Login url={props.match.url} />
            </Popup>
          </Col>
        </Col>
      </Col>
    </>
  );
};
export default Comments;
