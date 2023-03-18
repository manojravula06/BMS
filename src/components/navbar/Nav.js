import React from "react";
import logo from "../../../src/assets/logo.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { signOut, signIn } from "../../API/API";
import "./Nav.css";
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
      <div className="bg-dark container-fluid">
        <div className="row">
          <div className="col-lg-2 col-sm-col-12 m-auto text-light">
            <Link to="/" className="text-decoration-none text-light">
              <img src={logo} className="logo sm-col-12" />
            </Link>
          </div>

          <div className="col-lg-6 col-sm-12 m-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for movies"
              className="form-control p-2 m-2"
            />
          </div>
          <div className="col-lg-2 col-sm-12 p-2 m-auto d-flex flex-row-reverse">
            {localStorage.getItem("accessToken") ? (
              <>
                <Button variant="danger" onClick={onLogout}>
                  Log out
                </Button>
              </>
            ) : (
              <Button variant="danger" onClick={onSignIn}>
                Log in
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
