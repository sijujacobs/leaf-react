import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signUpHandler = (event) => {
        // const buttonClass = event.target.className.split(' ')[1];
        console.log('Signin :: signUpHandler : className :', event.target.className);
        UserPool.signUp(email, password, [], null, (err, data) => {
          if (err) {
            console.error(err);
          }
          console.log('SignIn :: signUpHandler : data :', data);
        });
    }
    const signInHandler = (event) => {
        // const buttonClass = event.target.className.split(' ')[1];
        console.log('Signin :: signUpHandler : className :', event.target.className);
        const user = new CognitoUser({
          Username: email,
          Pool: UserPool,
        });
    
        const authDetails = new AuthenticationDetails({
          Username: email,
          Password: password,
        });
    
        user.authenticateUser(authDetails, {
          onSuccess: (data) => {
            console.log("onSuccess: ", data);
          },
          onFailure: (err) => {
            console.error("onFailure: ", err);
          },
          newPasswordRequired: (data) => {
            console.log("newPasswordRequired: ", data);
          },
        });
    }
    return (
      <div id="login">
         <h1>Signin Page</h1>
         <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
         <button className='button' onClick={ signUpHandler }>Sign up</button>
         <button className='button' onClick={ signInHandler }>Sign in</button>
      </div>
      );
    }
export default Signin;