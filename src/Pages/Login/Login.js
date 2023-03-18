import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../API/API";
import Nav from "../../components/navbar/Nav";
import "./login.css";

const Login = () => {
  const [showSignUp, setShowSignup] = useState(false);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("CUSTOMER");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const redirectURL = () => {
    const userType = localStorage.getItem("userTypes");

    if(!userType){
      setErrorMessage("something went wrong!");
      return;
  }

  if(userType==="CUSTOMER"){
      navigate(-1);
  }
  else if(userType==="CLIENT"){
      navigate("/client");
  }
  else{
      navigate("/admin");
  }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      //redirect URL
      redirectURL();
    }
  }, []);

  const clearState = () => {
    setUserId("");
    setEmail("");
    setPassword("");
    setUserName("");
    setUserType("CUSTOMER");
    setErrorMessage("");
    setMessage("");
  };

  const updateSignUpData = (e) => {
    const id = e.target.id;

    if (id === "username") {
      setUserName(e.target.value);
    } else if (id === "userId") {
      setUserId(e.target.value);
    } else if (id === "email") {
      setEmail(e.target.value);
    } else if (id === "password") {
      setPassword(e.target.value);
    }

    setErrorMessage("");
    setMessage("");
  };

  const handleSelect = (e) => {
    setUserType(e);
  };

  const toggleSignUp = () => {
    clearState();
    setShowSignup(!showSignUp);
  };

  const validateData = (data) => {
    if (data.userId.length < 5 || data.userId.length > 10) {
      setErrorMessage("UserId should be 5 to 10 characters long");
      return false;
    }

    if (data.userId.includes(" ")) {
      setErrorMessage("UserId should not contain spaces");
      return false;
    }

    if (data.password.length < 6 || data.password.length > 10) {
      setErrorMessage("Password should be 6 to 10 characters long");
      return false;
    }

    if (data.password.includes(" ")) {
      setErrorMessage("Password should not contain spaces");
      return false;
    }

    if (data.name) {
      if (data.name.length < 5 || data.name.length > 10) {
        setErrorMessage("UserName should be 5 to 10 characters long");
        return false;
      }
      if (data.name.includes(" ")) {
        setErrorMessage("UserName should not contain spaces");
        return false;
      }
    }
    return true;
  };

  const signupFn = async (e) => {
    e.preventDefault();

    const data = {
      name: userName,
      userId,
      email,
      userType,
      password,
    };

    if (!validateData(data)) {
      return;
    }

    const response = await signUp(data);
    console.log(response)
    if (response.status === 201) {
      setMessage("Signed Up Successfully");
      clearState();
      setShowSignup(false);
    } else {
      setErrorMessage(response.data.message);
    }
  };

  const loginFn = async (e) => {
    e.preventDefault();

    const data = {
      userId,
      password,
    };

    if (!validateData(data)) {
      return;
    }

    const result = await signIn(data);

    if (result.status === 200) {
      setMessage("Login Success");
      console.log(result.data.message)

      const { name, userId, userTypes, userStatus, accessToken } = result.data;

      localStorage.setItem("name", name);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userTypes", userTypes);
      localStorage.setItem("userStatus", userStatus);
      localStorage.setItem("accessToken", accessToken);

      redirectURL();
    }
    console.log(result.data.message);
    setErrorMessage(result.data.message);
  };

  return (
    <div className="container-fluid" id="loginPage">
      <Nav />
      <div id="loginPage" className="cardAlign vh-100 vw-100">
        <div className="card loginCard">
          <h3 className="m-2"> {showSignUp ? "SIGN UP" : "LOGIN"} </h3>
          <form onSubmit={showSignUp ? signupFn : loginFn}>
            <div className="input-group">
              <input
                type="text"
                className="form-control m-2"
                id="userId"
                placeholder={showSignUp ? `Set User Id` : `Enter User Id`}
                value={userId}
                onChange={updateSignUpData}
                autoFocus
                required
              />
            </div>
            {showSignUp && (
              <>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control m-2"
                    id="username"
                    placeholder={
                      showSignUp ? `Set User Name` : `Enter User Name`
                    }
                    value={userName}
                    onChange={updateSignUpData}
                    autoFocus
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control m-2"
                    id="email"
                    placeholder="Enter E-mail ID"
                    value={email}
                    onChange={updateSignUpData}
                    autoFocus
                    required
                  />
                </div>

                <div className="row m-2">
                  <div className="col">
                    <span className="m-2"> User Type </span>
                  </div>

                  <div className="col">
                    <DropdownButton
                      align="end"
                      title={userType}
                      id="userType"
                      onSelect={handleSelect}
                      variant="light"
                    >
                      <Dropdown.Item eventKey="CUSTOMER">
                        CUSTOMER
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="CLIENT"> CLIENT </Dropdown.Item>
                      <Dropdown.Item eventKey="ADMIN"> ADMIN </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
              </>
            )}

            <div className="input-group">
              <input
                type="password"
                className="form-control m-1"
                id="password"
                placeholder="Password"
                value={password}
                onChange={updateSignUpData}
                autoFocus
                required
              />
            </div>

            <div className="input-group">
              <input
                type="submit"
                className="form-control btn btn-danger m-2"
                value={showSignUp ? "Sing Up" : "Log In"}
              />
            </div>

            <div className="text-center m-2 msg" onClick={toggleSignUp}>
              {" "}
              {showSignUp
                ? `Already have an account ? Log in`
                : `Don't have an account ? Sign up`}
            </div>
          </form>
          <div className="errmsg text-success m-2">{message}</div>
          <div className="errmsg text-danger m-2">{errorMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
