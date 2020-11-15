import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { gql, useMutation } from "@apollo/client";
import PasswordStrengthBar from "react-password-strength-bar";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { event } from "jquery";

const Login = (props) => {
  const authToken = localStorage.getItem("token");
  const [login, setlogin] = useState(true);
  const [email, setemail] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("USER");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [jwt, setjwt] = useState(authToken || null);
  const history = useHistory();
  const location = useLocation();

  const isEmailInDB = gql`
  mutation{
    isLoginUserExists(loginEmail:"${email}")
  }
`;

  const GetJwt = gql`
mutation{
  loginUser(loginEmail:"${email}",password:"${password}")
  }
  `;

  const AddUser = gql`
    mutation {
      addUser(
        loginEmail: "${email}"
        password: "${password}"
        firstName: "${name}"
        lastName: "${surname}"
        birthDate: "${selectedDate}"
        role:${role}
      ) {
        loginEmail
      }
    }
  `;

  const verifyUser = gql`
  mutation{
    verifyUser(token:"${jwt}")
  	{
        _id
      loginEmail
      role
      exp
      iat
    }
  }`;

  const [addUser] = useMutation(AddUser);

  const [isEmailValid] = useMutation(isEmailInDB);

  const [Getjwt] = useMutation(GetJwt);

  const [VerifyUser] = useMutation(verifyUser);

  const ChooseUser = () => {
    console.log(event.target.value);
  };
  const LookForData = (type) => {
    if (type == "Signin") {
      if (
        name == "" ||
        surname == "" ||
        email == "" ||
        password == "" ||
        repeatPassword == ""
      ) {
        return true;
      } else {
        return false;
      }
    } else if (type == "Login") {
      if (email == "" || password == "") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const CreateAccountNotify = () => toast("Konto zostało utworzone!");
  const BadPasswordNotify = () => toast("Złe hasło!");
  const NoEmailNotify = () => toast("Błędny adres email!");
  const EmailNotify = () => toast("Adres email jest juz do kogoś przypisany!");
  const LoginNotify = () => toast("Pomyślnie się zalogowano!");

  const CreateUser = () => {
    addUser();

    isEmailValid()
      .then(function (val) {
        if (val.data.isLoginUserExists) {
          EmailNotify();
        } else {
          setName("");
          setSurname("");
          setPassword("");
          setrepeatPassword("");
          setlogin(true);
          setIsEmail(val.data.isLoginUserExists);
          CreateAccountNotify();
        }
      })
      .catch(() => {
        NoEmailNotify();
      });
  };

  const LoginUser = () => {
    if (isEmail == true) {
      Getjwt()
        .then(function (val) {
          localStorage.setItem("token", val.data.loginUser);
          setjwt(val.data.loginUser);

          VerifyUser()
            .then(function (val1) {
              localStorage.setItem("userid", val1.data.verifyUser._id);
              localStorage.setItem("role", val1.data.verifyUser.role);
              localStorage.setItem("email", val1.data.verifyUser.loginEmail);
            })
            .catch(() => {
              console.log("Weryfikacja nie powiodła się");
            });

          if (val.data.loginUser) {
            if (location.pathname == "/login") {
              history.push({
                pathname: "/profile",
                state: {
                  passEmail: email,
                },
              });
              LoginNotify();
            } else {
              console.log(props.url);
              history.push({
                pathname: `${props.url}`,
                state: {
                  passEmail: email,
                },
              });
              LoginNotify();
            }
          } else {
            BadPasswordNotify();
          }
        })
        .catch(() => {
          EmailNotify();
        });
    } else {
      NoEmailNotify();
    }
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
                <PasswordStrengthBar
                  shortScoreWord={"Za krótkie"}
                  scoreWords={[
                    "Słabe",
                    "Słabe",
                    "Dobre",
                    "Bardzo dobre",
                    "Wyśmienite",
                  ]}
                  minLength={8}
                  password={password}
                />
              )}
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
            {login ? null : (
              <Col>
                <Form.Group>
                  <Form.Label>Podaj Rodzaj konta</Form.Label>
                  <Form.Control
                    as="select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="USER">Zwykły uzytkownik</option>
                    <option value="ADMIN">Właściciel Obiektu</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            )}
            {role == "ADMIN" ? <h1>Nazwa</h1> : null}
            <Col>
              <Col onClick={() => setlogin(!login)}>
                {login ? "Nie masz jeszcze konta?" : "Posiadasz już konto?"}
              </Col>
              {login ? (
                <Button
                  disabled={LookForData("Login")}
                  type="submit"
                  onClick={LoginUser}
                >
                  Zaloguj się{" "}
                </Button>
              ) : (
                <Button
                  disabled={LookForData("Signin")}
                  type="submit"
                  onClick={CreateUser}
                >
                  Stwórz konto
                </Button>
              )}
              <ToastContainer />
            </Col>
          </ValidatorForm>
        </Col>
      </Col>
    </Col>
  );
};
Login.propTypes = {
  url: PropTypes.string.isRequired,
};
export default Login;
