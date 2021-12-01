import { useState } from "react/cjs/react.development";
import Backdrop from "../UI/Backdrop";
import Button from "../UI/Button";
import SignUpForm from "./SignUpForm";
import "./WelcomeForm.css";
import React from "react";

const WelcomeForm = (props) => {
  const [showRegister, setShowRegister] = useState(false)

  const showRegisterHandler = (event) => {

    setShowRegister(!showRegister)
  }
  return (
    <React.Fragment>
    {showRegister &&<Backdrop><SignUpForm /></Backdrop>}
    <div className="main">
      <div className="form-container">
        <div className="left-form">
          <h2 className="form-text">Sign in</h2>
          <form>
            <input></input>
            <input></input>
          </form>
          <p>Forgot your Password?</p>
          <Button>Reset Password</Button>
        </div>
        <div className="right-form">
          <h2 className="form-text">Not Registered?</h2>
          <p className="little-text-form">
            Fill in a few steps and start ordering your favourite food!
          </p>
          <Button show={showRegisterHandler}>Register for free!</Button>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default WelcomeForm;
