import React from "react";
import logo from '../../../src/assets/logo.png'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { signOut, signIn } from "../../API/API";
import "./Nav.css"
const Nav = () => {
  const onLogout = () => {
    signOut();
    window.location.href = "/";
  };
  const onSignIn = () => {
    signIn();
    window.location.href = "/login";
  };
  return (
    <>
      <div className="bg-dark container-fluid sticky-top">
        <div className="row">
          <div className="col-lg-2 col-sm-col-12 m-auto text-light">
            <Link to="/" className="text-decoration-none text-light">
              <img src={logo} className="logo"/>
            </Link>
          </div>

          <div className="col-lg-6 col-sm-6 m-3 p-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for movies"
              className="form-control p-2"
            />
          </div>
          <div className="col-lg-2 col-sm-4 p-2 m-auto d-flex flex-row-reverse">
            {localStorage.getItem("accessToken") ? (
              <>
                <Button variant="danger" onClick={onLogout}>
                  Log out
                </Button>
              </>
            ) : (
              <Button variant="danger" onClick={onSignIn}>
                Log in/Register
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
