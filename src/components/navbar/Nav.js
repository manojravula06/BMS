import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { signOut, signIn } from "../../API/API";
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
          <div className="col-lg-2 col-sm-center m-auto text-light">
            <Link to="/" className="text-decoration-none text-light">
              <h6 className="display-6">B M S</h6>
            </Link>
          </div>

          <div className="col-lg-6 col-sm-6 p-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for movies"
              className="form-control"
            />
          </div>
          <div className="col-lg-2 col-sm-4 p-2 mx-auto">
            {localStorage.getItem("accessToken") ? (
              <>
                <div className="bg-light text-center rounded p-2 m-2">
                  {localStorage.getItem("name")}
                </div>
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
