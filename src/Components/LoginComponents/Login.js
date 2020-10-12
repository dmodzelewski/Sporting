import React, { useState, useEffect } from "react";
import { Col, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { gql, useMutation } from "@apollo/client";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [login, setlogin] = useState(true);
  const [email, setemail] = useState("");
  const [isEmail, setIsEmail] = useState(false)
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const history = useHistory();


  const isEmailInDB = gql`
  mutation{
    isLoginUserExists(loginEmail:"${email}")
  }
`
  const AddUser = gql`
    mutation {
      addUser(
        loginEmail: "${email}"
        password: "${password}"
        firstName: "${name}"
        lastName: "${surname}"
        birthDate: "${selectedDate}"
        role:USER
      ) {
        loginEmail
      }
    }
  `;

  const [addUser, { data }] = useMutation(AddUser);

  const [isEmailValid, { Emaildata }] = useMutation(isEmailInDB);

  const LookForData = () =>{
    if(name == "" || surname == "" || email == "" || password == "" || repeatPassword == "" ){
      return true;
    }else{
      return false;
    }
  }



  const CreateUser = () => {
    addUser();
    setName("");
    setSurname("");
    setPassword("");
    setrepeatPassword("");
    setlogin(true)
//addToast
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== password) {
        return false;
      }
      return true;
    });

    return () => {
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  });
  Promise.resolve(isEmailValid()).then(function (val) {
    setIsEmail(val.data.isLoginUserExists);
  })
  

  return (
    <Col className="login">
      <Col>
        <Col md={{ span: 6, offset: 3 }} className="signIn-box">
          <ValidatorForm>
            <h4>
              {login
                ? "Zaloguj sie do iSportio"
                : "Zarejestruj sie do ISportio"}
            </h4>
            <Col className="login-column">
              {!login && (
                <TextValidator
                  required
                  id="standard-required"
                  label="Imię"
                  placeholder="Podaj Imię"
                  value={name}
                  errorMessages={["Niepoprawne imię"]}
                  validators={["matchRegexp:^[a-zA-Z]+$"]}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              {!login && (
                <TextValidator
                  required
                  id="standard-required"
                  label="Nazwisko"
                  placeholder="Podaj Nazwisko"
                  value={surname}
                  errorMessages={["Niepoprawne imię"]}
                  validators={["matchRegexp:^[a-zA-Z]+$"]}
                  onChange={(e) => setSurname(e.target.value)}
                />
              )}
              {!login && (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Podaj datę urodzenia"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              )}
              <TextValidator
                required
                id="standard-required"
                label="Email"
                placeholder="Podaj Email"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={[
                  "To pole jest wymagane",
                  "Email jest niepoprawny",
           
                ]}
                onChange={(e) => setemail(e.target.value)}
              />
              <TextValidator
                required
                id="standard-required"
                label="Hasło"
                type="password"
                placeholder="Podaj Hasło"
                value={password}
                validators={["required"]}
                errorMessages={["To pole jest wymagane!"]}
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              {!login && (
                <TextValidator
                  required
                  id="standard-required"
                  label="Powtórz hasło"
                  type="password"
                  placeholder="Powtórz hasło"
                  value={repeatPassword}
                  validators={["isPasswordMatch", "required"]}
                  errorMessages={["Hasła są różne!", "To pole jest wymagane!"]}
                  onChange={(e) => setrepeatPassword(e.target.value)}
                />
              )}
            </Col>
            <Col>
              <Col onClick={() => setlogin(!login)}>
                {login ? "Nie masz jeszcze konta?" : "Posiadasz już konto?"}
              </Col>
              {login ? (
                <Button type="submit"> Zaloguj się </Button>
              ) : (
                <Button disabled ={LookForData()} type="submit" onClick={CreateUser}>
                  Stwórz konto
                </Button>
              )}
             
            </Col>
          </ValidatorForm>
        </Col>
      </Col>
    </Col>
  );
};

export default Login;
