/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { Col, Form } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import { gql, useMutation } from '@apollo/client'
import PasswordStrengthBar from 'react-password-strength-bar'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { event } from 'jquery'
import { Plugins, HapticsImpactStyle } from '@capacitor/core'

const { Haptics } = Plugins

const hapticsImpactLight = (style) => {
  this.hapticsImpact(HapticsImpactStyle.Light)
}

const Login = (props) => {
  const authToken = localStorage.getItem('token')
  const [login, setlogin] = useState(true)
  const [email, setemail] = useState('')
  const [isEmail, setIsEmail] = useState(true)
  const [password, setPassword] = useState('')
  const [repeatPassword, setrepeatPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [role, setRole] = useState('USER')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const history = useHistory()
  const location = useLocation()

  const isEmailInDB = gql`
    mutation isLoginUserExists($loginEmail: String) {
      isLoginUserExists(loginEmail: $loginEmail)
    }
  `

  const GetJwt = gql`
    mutation loginUser($loginEmail: String, $password: String) {
      loginUser(loginEmail: $loginEmail, password: $password)
    }
  `

  const AddUser = gql`
    mutation addUser(
      $loginEmail: String!
      $password: String!
      $firstName: String!
      $lastName: String!
      $birthDate: Date!
      $role: Role
    ) {
      addUser(
        loginEmail: $loginEmail
        password: $password
        firstName: $firstName
        lastName: $lastName
        birthDate: $birthDate
        role: $role
      ) {
        loginEmail
      }
    }
  `

  const getUserData = gql`
    mutation verifyUser($token: String) {
      verifyUser(token: $token) {
        _id
        loginEmail
        role
      }
    }
  `

  const [addUser, { data }] = useMutation(AddUser)

  const [isEmailValid] = useMutation(isEmailInDB)

  const [Getjwt] = useMutation(GetJwt)

  const [GetUserData] = useMutation(getUserData)

  const LookForData = (type) => {
    if (type === 'Signin') {
      if (
        name === '' ||
        surname === '' ||
        email === '' ||
        password === '' ||
        repeatPassword === '' ||
        password.length < 8 ||
        password !== repeatPassword
      ) {
        return true
      }
      return false
    }
    if (type === 'Login') {
      if (email === '' || password === '') {
        return true
      }
      return false
    }
    return false
  }

  const CreateAccountNotify = () => toast('Konto zostało utworzone!')
  const BadPasswordNotify = () => toast('Złe hasło!')
  const EmailNotify = () => toast('Adres email jest juz do kogoś przypisany!')
  const EmailNotExist = () => toast('Podany adres email nie istnieje!')
  const LoginNotify = () => toast('Pomyślnie się zalogowano!')
  const Verify = () => toast('Błąd weryfikacji!')

  const CreateUser = () => {
    isEmailValid({
      variables: { loginEmail: email },
    }).then((isEmailExist) => {
      const exists = isEmailExist.data.isLoginUserExists
      if (exists) {
        EmailNotify()
      } else {
        addUser({
          variables: {
            loginEmail: email,
            password,
            firstName: name,
            lastName: surname,
            birthDate: selectedDate,
            role,
          },
        })
        setName('')
        setSurname('')
        setPassword('')
        setrepeatPassword('')
        setlogin(true)
        setIsEmail(val.data.isLoginUserExists)
        CreateAccountNotify()
      }
    })
  }

  const LoginUser = () => {
    isEmailValid({ variables: { loginEmail: email } }).then((isEmailExist) => {
      const exists = isEmailExist.data.isLoginUserExists

      if (exists) {
        Getjwt({ variables: { password, loginEmail: email } }).then((token) => {
          if (token.data.loginUser) {
            localStorage.setItem('token', token.data.loginUser)

            GetUserData({
              variables: { token: token.data.loginUser },
            }).then((userData) => {
              localStorage.setItem('userid', userData.data.verifyUser._id)
              localStorage.setItem('role', userData.data.verifyUser.role)
              localStorage.setItem('email', userData.data.verifyUser.loginEmail)
            })
            if (location.pathname === '/login') {
              history.push({
                pathname: '/profile',
                state: {
                  passEmail: email,
                },
              })
              LoginNotify()
            } else {
              history.push({
                pathname: `${props.url}`,
                state: {
                  passEmail: email,
                },
              })
              LoginNotify()
            }
          } else {
            BadPasswordNotify()
            hapticsImpactLight()
          }
        })
      } else {
        EmailNotExist()
      }
    })
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== password) {
        return false
      }
      return true
    })

    return () => {
      ValidatorForm.removeValidationRule('isPasswordMatch')
    }
  })

  return (
    <Col className="login">
      <Col>
        <Col md={{ span: 6, offset: 3 }} className="signIn-box">
          <ValidatorForm>
            <Col className="singIn-boxcenter">
              <h4>
                {login
                  ? 'Zaloguj sie do iSportio'
                  : 'Zarejestruj sie do ISportio'}
              </h4>
              <Col className="login-column">
                {!login && (
                  <TextValidator
                    required
                    id="standard-required"
                    label="Imię"
                    placeholder="Podaj Imię"
                    value={name}
                    errorMessages={['Niepoprawne imię']}
                    validators={['matchRegexp:^[a-zA-Z]+$']}
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
                    errorMessages={['Niepoprawne imię']}
                    validators={['matchRegexp:^[a-zA-Z]+$']}
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
                        'aria-label': 'change date',
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
                  validators={['required', 'isEmail']}
                  errorMessages={[
                    'To pole jest wymagane',
                    'Email jest niepoprawny',
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
                  validators={['required']}
                  errorMessages={['To pole jest wymagane!']}
                  onChange={(e) => setPassword(e.target.value)}
                />{' '}
                {!login && (
                  <PasswordStrengthBar
                    className="password-bar"
                    shortScoreWord="Za krótkie"
                    scoreWords={[
                      'Słabe',
                      'Słabe',
                      'Dobre',
                      'Bardzo dobre',
                      'Wyśmienite',
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
                    validators={['isPasswordMatch', 'required']}
                    errorMessages={[
                      'Hasła są różne!',
                      'To pole jest wymagane!',
                    ]}
                    onChange={(e) => setrepeatPassword(e.target.value)}
                  />
                )}
              </Col>
              <br />
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
              <Col>
                <Col onClick={() => setlogin(!login)}>
                  {login ? 'Nie masz jeszcze konta?' : 'Posiadasz już konto?'}
                </Col>
                {login ? (
                  <Button
                    disabled={LookForData('Login')}
                    type="submit"
                    onClick={LoginUser}
                  >
                    Zaloguj się{' '}
                  </Button>
                ) : (
                  <Button
                    disabled={LookForData('Signin')}
                    type="submit"
                    onClick={CreateUser}
                  >
                    Stwórz konto
                  </Button>
                )}

                <Col>* Wymagane Pola</Col>
                <ToastContainer />
              </Col>
            </Col>
          </ValidatorForm>
        </Col>
      </Col>
    </Col>
  )
}
Login.propTypes = {
  url: PropTypes.string.isRequired,
}
export default Login
