import { Button, FloatingLabel, Form } from "react-bootstrap";
import { CImage } from "@coreui/react";
import BMS from "../../assets/BMS.avif";
import { Link } from "react-router-dom";
import { signOut, signIn } from "../../API/API";

const onLogout = () => {
  signOut();
  window.location.href = "/";
};

const onSignIn = () => {
  signIn();
  window.location.href = "/login";
};

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-dark sticky-top">
        <div className="row text-center">
          <div className="col-lg-2 col-sm-12">
            <Link to="/" className="text-decoration-none">
              <CImage
                d-block
                w-100
                className="d-block w-25 my-2"
                src={BMS}
                alt="slide 1"
              />
              {/* <div className="display-6 text-danger py-1"> Book My Show </div> */}
            </Link>
          </div>

          <div className="col-lg-8 col-sm-10 py-2">
            <FloatingLabel
              controlId="floatingInput"
              label="Search a Movie"
              className="mb-2 w-50 text-center"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </div>

          <div className="col-lg-2 col-sm-2 p-2 my-2">
            {localStorage.getItem("accessToken") ? (
              <Button variant="danger" onClick={() => onLogout()}>
                {`${localStorage.getItem("name")} logout`}
              </Button>
            ) : (
              <Button variant="danger" onClick={() => onSignIn()}>
                Login{" "}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
