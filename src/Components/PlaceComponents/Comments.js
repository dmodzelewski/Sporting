import React from "react";
import { Col } from "react-bootstrap";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ReviewFilter from "../ReserveComponents/Filter/ReviewFilter";
import TextField from "@material-ui/core/TextField";
const Comments = () => {
  return (
    <>
      <Col className="place-commentbox no-padding">
        <Col className="place-add-comment no-padding">
          <Col className="place-text-header no-padding">Dodaj Opinie</Col>
          <FormControl>
            <Col className="place-add-comment-row">
              <InputLabel htmlFor="input-with-icon-adornment">
                Podaj swoje imię
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />

              <ReviewFilter />
            </Col>
            <TextField
              placeholder="MultiLine with rows: 2 and rowsMax: 4"
              multiline
              rows={2}
              rowsMax={4}
            />
          </FormControl>
        </Col>
        <Col className="place-comment no-padding">
          <Col className="place-text-header no-padding">Wszystkie Opinie</Col>
          <Col className="place-comment">
            <ul className="place-comment-all">
              <li className="place-comment-single">
                <Col className="place-comment-review">
                  <Col className="place-comment-review-up">
                    <Col className="place-comment-review-up-value">9</Col>
                    <Col className="place-comment-review-up-date">
                      Dodano 2020
                    </Col>
                  </Col>
                  <Col className="place-comment-review-down">
                    <Col className="place-comment-review-down-icon">s</Col>
                    <Col className="place-comment-review-down-text">s</Col>
                  </Col>
                </Col>
              </li>
            </ul>
          </Col>
        </Col>
      </Col>
    </>
  );
};
export default Comments;
