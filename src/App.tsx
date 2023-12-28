import React, {useState} from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'
import './App.css';
import {CredentialResponse, GoogleLogin, googleLogout, GoogleOAuthProvider} from '@react-oauth/google';

function App() {
    const [ authData, setAuthData ] = useState(null);

    const logOut = () => {
        googleLogout();
        googleLogout();
        localStorage.removeItem("AuthData");
        window.location.reload();
        setAuthData(null);
    };


    const credentialResponse = async (credentialResponse:CredentialResponse) =>{
        console.log(credentialResponse);
        const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}/google-auth/`,
            {
                // pass the token as part of the req body
                token: credentialResponse.credential,
            }
        );
        setAuthData(data);
    }

  return (
    <div className="App">
      <header className="App-header">
          <h2>React Google Login</h2>
          <GoogleOAuthProvider
              clientId={String(process.env.REACT_APP_GOOGLE_ID)}
          >
          {!authData ? (
          <>
              <GoogleLogin
              useOneTap={true}
              onSuccess={credentialResponse}
              onError={() => {
                  console.log('Login Failed');
              }}
              />
          </>
              ):(
              <>
                  <h1>React x Nestjs Google Sign in</h1>
                  <div className={"container"}>
                      <Button
                          onClick={() => logOut}
                          className={"button"}
                      >
                          Logout
                      </Button>
                  </div>

              </>
            )
          }

          </GoogleOAuthProvider>
      </header>


    </div>
  );
}

export default App;
