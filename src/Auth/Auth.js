import auth0 from "auth0-js";

export default class Auth {
  constructor(history) {
    (this.history = history),
      (this.auth0 = new auth0.WebAuth({
        //change to env variables(my not working thats why its hardcoded)
        domain: "isportio.eu.auth0.com",
        clientID: "0y3c2C58zZb47eWtSbUGFLW2gw8gjgQ1",
        redirectUri: "http://localhost:8080/callback",
        responseType: "token id_token",
        scope: "openid profile email",
      }));
  }
  login = () => {
    this.auth0.authorize();
  };
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.history.push("/");
      } else if (err) {
        this.history.push("/");
        alert(`Error: ${err.error}. Check the console for futher details`);
        console.log(err);
      }
    });
  };
  setSession = (authResult) => {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token",authResult.accessToken)
    localStorage.setItem("id_token",authResult.idToken)
    localStorage.setItem("expires_at",expiresAt)

  };

}
