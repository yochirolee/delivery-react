import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Firebase } from "../../lib/firebase";
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
} from "react-router-dom";
import GoogleButtonLogin from './googleButtonLogin';

export default function Login() {
  const firebase = new Firebase();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { activateAuth } = useContext(AuthContext);
  let history = useHistory();
  let location = useLocation();

  const saveAuthAndRedirect = (data) => {
    try {
      const { user } = data;
      let { idToken = null } = data;
      if (!idToken) idToken = user.uid;
      activateAuth(user, idToken);
      setLoading(false);
      history.replace("/products");
    } catch (error) {
      console.log({ error });
    }
  };

  let { from } = location.state || { from: { pathname: "/" } };

  const authWithGoogle = () => {
    firebase.doAuthWithGoogle().then((resp) => {
      console.log(resp, "response from auth google");
      saveAuthAndRedirect(resp);
    });
  };

  return (
    <div className="bg-red-700  background h-screen">
      <div className="flex flex-row">
        <div className="w-1/2"> </div>

        <div className=" w-1/2 ">
          <div className="pt-20 ">
            <div className="w-1/2 justify-center rounded bg-white p-4">
              <GoogleButtonLogin authWithGoogle={authWithGoogle}/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
