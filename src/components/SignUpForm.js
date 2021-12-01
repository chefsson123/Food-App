import React, { useState } from "react";
import Backdrop from "../UI/Backdrop";
import "./SignUpForm.css";

const SignUpForm = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("")
 

  const UsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const PasswordHandler2 = (event) => {
    setConfirmPassword(event.target.value);
  };
  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };


  const OnSubmitHandler = (event) => {
      event.preventDefault()
      if(password !== confirmPassword) {
        setError("Confirmed password is different than initial one")
      }

    let registerData = {
        username: username,
        email: email,
        password1: password,
        password2: confirmPassword
    }

    
    console.log(registerData)
  }
 


  

  
  return (

    <Backdrop>
    
      
      <div className="it">
       <div className="checkit"><h1>Tokico</h1></div>
    <h2>Register now and start ordering your favourite food!</h2>
    {error && <span>{error}</span>}
        <button className="close" onClick={props.onHide}>&times;</button>
        <form className="signup-form" onSubmit={OnSubmitHandler}>
          <input
            type="text"
            placeholder="Username"
            onChange={UsernameHandler}
          ></input>
          <input
            type="email"
            placeholder="Email"
            onChange={EmailHandler}
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={PasswordHandler}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={PasswordHandler2}
          ></input>  <footer className="actions-signup">
               <button type="submit">Register</button>
          </footer>
       
        </form>
      
      </div>
    
    </Backdrop>
  );
};
export default SignUpForm;
