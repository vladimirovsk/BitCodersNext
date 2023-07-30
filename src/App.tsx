import React, {useState} from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'
import './App.css';
import {CredentialResponse, GoogleLogin, googleLogout, GoogleOAuthProvider} from '@react-oauth/google';

function App() {
    const [ authData, setAuthData ] = useState(null);

    const logOut = () => {
        googleLogout();
        setAuthData(null);
    };

    // useEffect(()=>{
    //
    // })


    const credentialResponse = async (credentialResponse:CredentialResponse) =>{
        console.log(credentialResponse);
        const { data } = await axios.post(
            "http://localhost:9087/api/v1/google-auth/",
            {
                // pass the token as part of the req body
                token: credentialResponse.credential,
            }
        );
        setAuthData(data);
    }

    // const errorMessage = (error: void) => {
    //     console.log(error);
    // };
    //onSuccess={responseMessage} onError={errorMessage}

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
                          onClick={() => {
                              googleLogout();
                              localStorage.removeItem("AuthData");
                              setAuthData(null);
                              window.location.reload();
                          }}
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