import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Signin from "../signIn/Signin";
import { ProductContext } from "../../contexts/ProductContext";
import { useLocation } from "react-router";

function Header(props) {

  
  const [loginPage, setLoginPage] = useState(false);
  const [logoutPage, setLogoutPage] = useState(false);
  const [logged, setLogged] = useState("Login");

  const pageHandler = () => {
    if (props.usernameToken !== false || logged !== "Login") {
      setLogoutPage(true);
      setLoginPage(false);
    } else {
      setLogoutPage(false);
      setLoginPage(true);
    }
  };

  const { value2 } = React.useContext(ProductContext);
  const [cart] = value2;
  let location = useLocation()
  if (location.pathname.match(/admin/)){
    return null
  }
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container__search">
          <div className="input_div">
            <input
              type="search"
              className="header-container__search--input"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="header-container__logo">
          <h1 className="header-container__logo--h1">
            <div className="logo_name">BRANDS</div>
            <span className="logo_span">WEAR</span>
          </h1>
        </div>
        <div className="header-container__cart">
          <button
            className="header-container__cart--btn-login"
            onClick={() => pageHandler()}
          >
            {props.usernameToken ? props.usernameToken : logged}
          </button>
          <div className="btn_cart_counter">
            <button className="header-container__cart--btn-cart">
              <Link className="link" to="/cart">
                Cart <i className="far fa-shopping-cart"></i>
              </Link>
            </button>
            <div className="span_cart_counter">
              {cart && <span>{cart.length}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="header__navbar">
        <ul className="header__navbar--ul">
          <li>
            <Link className="link" to="/">
              <i className="far fa-home"></i>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/shopmen">
              <i className="far fa-male"></i>
              Shop Men
            </Link>
          </li>
          <li>
            <Link className="link" to="/shopwomen">
              <i className="far fa-female"></i>
              Shop Women
            </Link>
          </li>
          <li>
            <Link className="link" to="/sale">
              <i className="far fa-tags"></i>
              Sale
            </Link>
          </li>
          <li>
            <Link className="link" to="/contactus">
              <i className="far fa-file-signature"></i>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <Signin
        loginPage={loginPage}
        setLoginPage={setLoginPage}
        setLogged={setLogged}
        logoutPage={logoutPage}
        tokenHandler={() => props.tokenHandler()}
        setLogoutPage={setLogoutPage}
      />
    </div>
  );
}

export default Header;
