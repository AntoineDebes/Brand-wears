import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Axios from "axios";

function Login(props) {
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/user/login", {
      username: usernameLog,
      password: passwordLog,
    })
      .then((res) => {
        console.log(res.data.token);
        setErrorMessage(null);
        props.setLogged(res.data.doc[0].username);
        props.setLoginPage(false);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.doc[0].username);
      })

      .catch(
        (e) => {
          console.log(e);
          setErrorMessage("username or password are wrong");
          props.setLogged("Login");
        },
        { timeout: 2 }
      );
  };

  return (
    <>
      <div className="main__form__sign-in">
        <div
          className="main__form__sign-in__exit"
          onClick={() => props.setLoginPage(false)}
        >
          <i className="fas fa-times"></i>
        </div>
        <form action="" className="form__sign-in">
          <div>
            <h1>Sign-in</h1>
          </div>
          <div className="form__email">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsernameLog(e.target.value)}
            />
            {errorMessage && <p className="signIn__error">{errorMessage}</p>}
          </div>
          <div className="form__password">
            <label for="password__sign-in">Password</label>
            <input
              type="password"
              name="password__sign-in"
              id="password__sign-in"
              onChange={(e) => setPasswordLog(e.target.value)}
            />
            {errorMessage && <p className="signIn__error">{errorMessage}</p>}
          </div>
          <button className="form__btn" onClick={login}>
            Sign-in
          </button>
        </form>
        {errorMessage && (
          <Link>
            <div className="main__form__forgot-password">
              <p>Forgot your password?</p>
            </div>
          </Link>
        )}
        <div className="main__form__sign-up">
          <h1 className="main__form__sign-up--text">Sign-up now for free!!</h1>
          <button className="form__btn" onClick={() => props.triggerHandler()}>
            Sign-up
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
