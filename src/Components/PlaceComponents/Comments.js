import React, { useState } from "react";
import { Col, Button, Toast } from "react-bootstrap";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ReviewFilter from "../ReserveComponents/Filter/ReviewFilter";
import TextField from "@material-ui/core/TextField";
import Popup from "reactjs-popup";
import Rating from "@material-ui/lab/Rating";

const Comments = () => {
  const [value, setValue] = React.useState(3);
  return (
    <>
      <Col className="place-comment no-padding">
        <Col className="place-text-header no-padding">Wszystkie Opinie</Col>
        <Col className="place-comment-review no-padding">
          <Col style={{ position: "relative", padding: "0px" }}>
            <ul className="place-comment-scroll">
              <li className="place-comment-onereview no-padding">
                <Col className="place-comment-reviewbox no-padding">
                  <Col className="place-comment-rev-up no-padding">
                    <Col className="place-comment-info no-padding">
                      Słaby <span>3.0</span>
                    </Col>
                    <Col className="place-comment-date">
                      Dodano cze 2020, autor: Anonymous
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
                      <p>
                        Bardzo nieuczciwy jest brak informacji, o tym, ze na
                        hotelu są rusztowania. Obiekt jest w dużej mierze
                        "ofoliowany", a głowne drzwi opakowane płytą pilśniową!
                        Mialem wrazenie, ze wchodzę na plac budowy, ze ktos
                        sobie zrobił ze mnie zart! Nie otrzymałem również
                        wcześniej informacji, że drzwi od hotelu będą zamknięte
                        o godzinie 19! Rozumiem powody ich zamykania, ale trzeba
                        dać znać gościom! Tym bardziej, że dzwonek był
                        niewidoczny i nawet nie ma na drzwiach info, żeby
                        dzwonić! Rano jest silny hałas z remontów, ktore mają
                        miejsce przy hotelu. Kolor wody z prysznica: brązowy!
                        Dopiero po o około 20 minutach woda nabrała
                        przejrzystości. Stare, poliestrowe dywany w korytarzach
                        i pokoju. Ten hotel absolutnie nie daje komfortu 5
                        gwiazdek!
                      </p>
                    </Col>
                  </Col>
                </Col>
              </li>
              <li className="place-comment-onereview no-padding">
                <Col className="place-comment-reviewbox no-padding">
                  <Col className="place-comment-rev-up no-padding">
                    <Col className="place-comment-info no-padding">
                      Słaby <span>3.0</span>
                    </Col>
                    <Col className="place-comment-date">
                      Dodano cze 2020, autor: Anonymous
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
                      <p>
                        Bardzo nieuczciwy jest brak informacji, o tym, ze na
                        hotelu są rusztowania. Obiekt jest w dużej mierze
                        "ofoliowany", a głowne drzwi opakowane płytą pilśniową!
                        Mialem wrazenie, ze wchodzę na plac budowy, ze ktos
                        sobie zrobił ze mnie zart! Nie otrzymałem również
                        wcześniej informacji, że drzwi od hotelu będą zamknięte
                        o godzinie 19! Rozumiem powody ich zamykania, ale trzeba
                        dać znać gościom! Tym bardziej, że dzwonek był
                        niewidoczny i nawet nie ma na drzwiach info, żeby
                        dzwonić! Rano jest silny hałas z remontów, ktore mają
                        miejsce przy hotelu. Kolor wody z prysznica: brązowy!
                        Dopiero po o około 20 minutach woda nabrała
                        przejrzystości. Stare, poliestrowe dywany w korytarzach
                        i pokoju. Ten hotel absolutnie nie daje komfortu 5
                        gwiazdek!
                      </p>
                    </Col>
                  </Col>
                </Col>
              </li>{" "}
              <li className="place-comment-onereview no-padding">
                <Col className="place-comment-reviewbox no-padding">
                  <Col className="place-comment-rev-up no-padding">
                    <Col className="place-comment-info no-padding">
                      Słaby <span>3.0</span>
                    </Col>
                    <Col className="place-comment-date">
                      Dodano cze 2020, autor: Anonymous
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
                      <p>
                        Bardzo nieuczciwy jest brak informacji, o tym, ze na
                        hotelu są rusztowania. Obiekt jest w dużej mierze
                        "ofoliowany", a głowne drzwi opakowane płytą pilśniową!
                        Mialem wrazenie, ze wchodzę na plac budowy, ze ktos
                        sobie zrobił ze mnie zart! Nie otrzymałem również
                        wcześniej informacji, że drzwi od hotelu będą zamknięte
                        o godzinie 19! Rozumiem powody ich zamykania, ale trzeba
                        dać znać gościom! Tym bardziej, że dzwonek był
                        niewidoczny i nawet nie ma na drzwiach info, żeby
                        dzwonić! Rano jest silny hałas z remontów, ktore mają
                        miejsce przy hotelu. Kolor wody z prysznica: brązowy!
                        Dopiero po o około 20 minutach woda nabrała
                        przejrzystości. Stare, poliestrowe dywany w korytarzach
                        i pokoju. Ten hotel absolutnie nie daje komfortu 5
                        gwiazdek!
                      </p>
                    </Col>
                  </Col>
                </Col>
              </li>{" "}
              <li className="place-comment-onereview no-padding">
                <Col className="place-comment-reviewbox no-padding">
                  <Col className="place-comment-rev-up no-padding">
                    <Col className="place-comment-info no-padding">
                      Słaby <span>3.0</span>
                    </Col>
                    <Col className="place-comment-date">
                      Dodano cze 2020, autor: Anonymous
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
                      <p>
                        Bardzo nieuczciwy jest brak informacji, o tym, ze na
                        hotelu są rusztowania. Obiekt jest w dużej mierze
                        "ofoliowany", a głowne drzwi opakowane płytą pilśniową!
                        Mialem wrazenie, ze wchodzę na plac budowy, ze ktos
                        sobie zrobił ze mnie zart! Nie otrzymałem również
                        wcześniej informacji, że drzwi od hotelu będą zamknięte
                        o godzinie 19! Rozumiem powody ich zamykania, ale trzeba
                        dać znać gościom! Tym bardziej, że dzwonek był
                        niewidoczny i nawet nie ma na drzwiach info, żeby
                        dzwonić! Rano jest silny hałas z remontów, ktore mają
                        miejsce przy hotelu. Kolor wody z prysznica: brązowy!
                        Dopiero po o około 20 minutach woda nabrała
                        przejrzystości. Stare, poliestrowe dywany w korytarzach
                        i pokoju. Ten hotel absolutnie nie daje komfortu 5
                        gwiazdek!
                      </p>
                    </Col>
                  </Col>
                </Col>
              </li>
            </ul>
          </Col>
        </Col>
        <Popup
          trigger={<Button className="button"> Dodaj opinię </Button>}
          modal
          closeOnDocumentClick
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
              className="place-comment-textfield"
              placeholder="Twoja ocena..."
              multiline
              rows={2}
              rowsMax={4}
            />
            <Col className="place-comment-button">
              <Button onClick={() => setShow(true)}>oceń</Button>
            </Col>
          </Col>
        </Popup>
      </Col>
    </>
  );
};
export default Comments;
