import React, { Component } from "react";
import { AUTH_TOKEN } from "./constants";
import { Container, Col, Row, Button, Form } from "react-bootstrap";

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: "",
    password: "",
    name: "",
  };

  render() {
    const { login, email, password, name } = this.state;
    return (
      <Col>
        <Col>
          <Col className="signIn-box">
            <h4>
              {login
                ? "Zaloguj sie do iSportio"
                : "Zarejestruj sie do ISportio"}
            </h4>
            <Col>
              {!login && (
                <input
                  value={name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  type="text"
                  placeholder="Twoje Imię"
                />
              )}
              <input
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
                type="text"
                placeholder="Twój adres email"
              />
              <input
                value={password}
                onChange={(e) => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Podaj hasło"
              />
            </Col>
            <Col>
              <Col onClick={() => this.setState({ login: !login })}>
                {login ? "Nie masz jeszcze konta?" : "Posiadasz już konto?"}
              </Col>
              <Button onClick={() => this._confirm()}>
                {login ? "Zaloguj się" : "Stwórz konto"}
              </Button>
            </Col>
          </Col>
        </Col>
      </Col>
    );
  }

  _confirm = async () => {
    // ... you'll implement this 🔜
  };

  _saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;
