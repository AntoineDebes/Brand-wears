import React, { useState } from "react";
import { useClickOutside } from "../../customHooks/useClickOutside";
import Login from "../login/Login";
import Register from "../register/Register";
import "./Signin.css";

function Signin(props) {
  const [signInTrigger, setSignInTrigger] = useState(true);
  const [signUpTrigger, setSignUpTrigger] = useState(false);

  const triggerHandler = () => {
    setSignInTrigger(!signInTrigger);
    setSignUpTrigger(!signUpTrigger);
  };

  const domNode = useClickOutside(() => {
    props.setLoginPage(false);
    setSignInTrigger(true);
    setSignUpTrigger(false);
  });

  const signOut = useClickOutside(() => {
    props.setLogoutPage(false);
  });

  const signoutPageHandler = () => {
    props.tokenHandler();
    props.setLogoutPage(false);
    props.setLogged("Login");
  };

  return props.loginPage ? (
    <>
      <div className="main__inset__background"></div>
      <div className="main__form" ref={domNode}>
        {signInTrigger && (
          <Login
            setLoginPage={() => props.setLoginPage()}
            triggerHandler={triggerHandler}
            setLogged={(e) => props.setLogged(e)}
          />
        )}
        {signUpTrigger && (
          <Register
            setLoginPage={() => props.setLoginPage()}
            signUpTrigger={signUpTrigger}
            triggerHandler={triggerHandler}
            setLogged={(e) => props.setLogged(e)}
          />
        )}
      </div>
    </>
  ) : props.logoutPage ? (
    <>
      <div className="main__inset__background"></div>
      <div className="main__form" ref={signOut}>
        <div className="main__form__btn">
          <h2>Allah wel nabe</h2>
          <button className="form__btn" onClick={signoutPageHandler}>
            Sign-out
          </button>
        </div>
      </div>
    </>
  ) : null;
}

export default Signin;
