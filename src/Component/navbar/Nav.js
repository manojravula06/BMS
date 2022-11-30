import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { signOut, signIn } from "../../API/API";
const Nav = () => {
  const onLogout = () => {
    signOut();
    window.location.href = "/";
  };
  const onSignIn=()=>{
    signIn();
    window.location.href="/login";
  }
  return (
    <>
      <div className="bg-dark container-fluid sticky-top">
        <div className="row">
          
          <div className="col-lg-2 col-sm-center m-2 text-light">
          <Link to="/" className="text-decoration-none text-light">
            <h6 className="display-6">B M S</h6>
            </Link>
          </div>
          
          
          <div className="col-lg-6 col-sm-6 p-2">
            <input type="text" name="" id="" className="form-control" />
            {/* <Button variant="danger">search</Button>   */}
          </div>
          <div className="col-lg-2 col-sm-4 p-2">
          
            {localStorage.getItem("accessToken") ? (
              <>
                <Button variant="danger" onClick={onLogout}>
                  {localStorage.getItem("name")}
                </Button>
              </>
            ) : (
              <Button variant="danger" onClick={onSignIn}>Log in</Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
