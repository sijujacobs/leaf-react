import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import { GoogleLogin } from 'react-google-login';

const Signin = () => {
  const clientId = '998456606735-b96d4ugpeattrunim2uq1dvccms7odnt.apps.googleusercontent.com';
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verificationCode, setVerificationCode] = useState("");

    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const signUpHandler = (event) => {
        console.log('Signin :: signUpHandler : className :', event.target.className);
        UserPool.signUp(email, password, [], null, (err, data) => {
          if (err) {
            console.error(err);
          }
          console.log('SignIn :: signUpHandler : data :', data);
        });
    }
    const forgotPasswordHandler = (event) => {
      cognitoUser.forgotPassword({
        onSuccess: function(result) {
            console.log('call result: ' + result);
        },
        onFailure: function(err) {
            alert(err);
        },
        inputVerificationCode() {
            var verificationCode = prompt('Please input verification code ', '');
            var newPassword = prompt('Enter new password ', '');
            cognitoUser.confirmPassword(verificationCode, newPassword, this);
        }
    });
    }
    const signInHandler = (event) => {
        const authDetails = new AuthenticationDetails({
          Username: email,
          Password: password,
        });
    
        cognitoUser.authenticateUser(authDetails, {
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

    function submitConfirmationCode(e) {
      cognitoUser.confirmRegistration(verificationCode, true, function (err, result) {
          if (err) {
            console.log('submitConfirmationCode :: error : err : ', err);
          }
          console.log('submitConfirmationCode :: success : result : ', result);
      });
    }
    function resendConfirmationCode(e) {
      

      cognitoUser.resendConfirmationCode(function(err, result) {
        if (err) {
          console.log('resendConfirmationCode :: error : err : ', err);
        }
        console.log('resendConfirmationCode :: success : result : ', result);
      });
    }

    const refreshTokenSetup = (res) => {
      // Timing to renew access token
      // let refreshTiming = 50000;
      let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    
      const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        console.log('newAuthRes:', newAuthRes);
        // saveUserToken(newAuthRes.access_token);  <-- save new token
        localStorage.setItem('authToken', newAuthRes.id_token);
    
        // Setup the other timer after the first one
        setTimeout(refreshToken, refreshTiming);
      };
    
      // Setup first refresh timer
      setTimeout(refreshToken, refreshTiming);
    };
    

    const onGoogleSigninFailure = (res) => {
      console.log('onGoogleSigninFailure: ', res);
    }
    const onGoogleSigninSuccess = (googleUser) => {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
      refreshTokenSetup(googleUser);
    }
    return (
      <div id="SignIn">
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
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onGoogleSigninSuccess}
          onFailure={onGoogleSigninFailure}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
         <button className='button' onClick={ signUpHandler }>Sign up</button>
         <button className='button' onClick={ signInHandler }>Sign in</button>
         <p></p>
         <button className='button' onClick={ forgotPasswordHandler }>Forgot password</button>
         <div id="Confirmation">
          <input
            value={verificationCode}
            onChange={(event) => setVerificationCode(event.target.value)}
          ></input>

         <button className='button' onClick={ submitConfirmationCode }>Confirm</button>
         <button className='button' onClick={ resendConfirmationCode }>Resend verification code</button>
        </div>
      </div>
       
      );
    }
export default Signin;