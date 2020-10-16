import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { gql, useMutation } from "@apollo/client";
import PasswordStrengthBar from 'react-password-strength-bar';

const Login = () => {
  const authToken = localStorage.getItem("token");
  
  const [login, setlogin] = useState(true);
  const [email, setemail] = useState("");
  const [isEmail, setIsEmail] = useState(true)
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [jwt, setjwt] =  useState(authToken||null)
  const history = useHistory();


  const isEmailInDB = gql`
  mutation{
    isLoginUserExists(loginEmail:"${email}")
  }
`
const GetJwt = gql`
mutation{
  loginUser(loginEmail:"${email}",password:"${password}")
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
// const verifyUser = gql `
// mutation{
//   verifyUser(token:"${jwt||null}")
// 	{
//     loginEmail
//     role
//     exp
//     iat
//   }
// }`
  const [addUser] = useMutation(AddUser);

  const [isEmailValid] = useMutation(isEmailInDB);

  const [Getjwt] = useMutation(GetJwt);

  // const [VerifyUser, {VerifyUserData}] = useMutation(verifyUser);

  const LookForData = (type) =>{
    if (type == "Signin") {
      if(name == "" || surname == "" || email == "" || password == "" || repeatPassword == "" ){
        return true;
      }else{
        return false;
      }  
    } else if(type == "Login") {
      if( email == "" || password == "" ){
        return true;
      }else{
        return false;
      }
    }
    else{
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

  const LoginUser = () =>{
    
    isEmailValid().then(function (val) {
      setIsEmail(val.data.isLoginUserExists);
    }).catch(() =>{
      console.log("Email nie jest prawidłowy")
    })
    if(isEmail == true){
      Getjwt().then(function (val) {
        localStorage.setItem('token', val.data.loginUser);
        setjwt(val.data.loginUser);
        console.log(val.data.loginUser)
        if(val.data.loginUser){
          history.push({
            pathname: "/profile",
            state: {
              passEmail:email
            },
          });
  localStorage.setItem('email',email)
        }else{
          console.log("hasło jest Nie Poprawne")
        }
      }).catch(() => {console.log("Adres Email nie istnieje")})
      }else{
        console.log("Adres Email nie istnieje")
      }
    }
    

  

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
              <PasswordStrengthBar shortScoreWord={"Za krótkie"} scoreWords={["Słabe","Słabe","Dobre","Bardzo dobre","Wyśmienite"]} minLength={8} password={password}/>
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
            <Col>
              <Col onClick={() => setlogin(!login)}>
                {login ? "Nie masz jeszcze konta?" : "Posiadasz już konto?"}
              </Col>
              {login ? (
                <Button disabled ={LookForData("Login")} type="submit" onClick={LoginUser}> Zaloguj się </Button>
              ) : (
                <Button disabled ={LookForData("Signin")} type="submit" onClick={CreateUser}>
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
