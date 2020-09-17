import React, { useState } from "react";
import { AUTH_TOKEN } from "./constants";
import { Col, Button } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const EncryptAndFind = async (login, password) => {};

const _saveUserData = (token) => {
  localStorage.setItem(AUTH_TOKEN, token);
};

const Login = () => {
  const [login, setlogin] = useState(true);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Col>
      <Col>
        <Col className="signIn-box">
          <h4>
            {login ? "Zaloguj sie do iSportio" : "Zarejestruj sie do ISportio"}
          </h4>
          <Col className="login-column">
            {!login && (
              <TextField
                required
                id="standard-required"
                label="Imię"
                placeholder="Podaj Imię"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            {!login && (
              <TextField
                required
                id="standard-required"
                label="Nazwisko"
                placeholder="Podaj Nazwisko"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            )}

            {!login && (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            )}
            <TextField
              required
              id="standard-required"
              label="Email"
              placeholder="Podaj Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              required
              id="standard-required"
              label="Nazwisko"
              type="password"
              placeholder="Podaj Hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
          <Col>
            <Col onClick={() => setlogin(!login)}>
              {login ? "Nie masz jeszcze konta?" : "Posiadasz już konto?"}
            </Col>
            <Button onClick={() => this.EncryptAndFind(email, password)}>
              {login ? "Zaloguj się" : "Stwórz konto"}
            </Button>
          </Col>
        </Col>
      </Col>
    </Col>
  );
};

export default Login;
