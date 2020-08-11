import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import { Firebase } from "../../lib/firebase";
import { useHistory, useLocation } from "react-router-dom";
import GoogleButtonLogin from "./googleButtonLogin";
import FacebookButtonLogin from "./facebookButtonLogin";
import Alert from "../alert/alert";
import Spiner from "../Spiner/spiner";

export default function Login() {
  const firebase = new Firebase();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const { activateAuth, userLoaded } = useContext(AuthContext);
  let history = useHistory();
  let location = useLocation();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    redirectIfAuthenticated();
  });

  const redirectIfAuthenticated = () => {
    if (userLoaded) {
      history.replace("/products");
      return true;
    }
    return false;
  };

  const saveAuthAndRedirect = (data) => {
    try {
      const { user } = data;
      let { idToken = null } = data;
      if (!idToken) idToken = user.uid;
      activateAuth(user, idToken);
      setLoading(false);
      history.replace("/products");
    } catch (error) {
      const { message } = error;
      setErrorMessage(message);
    }
  };

  let { from } = location.state || { from: { pathname: "/" } };

  const authWithGoogle = () => {
    setLoading(true);
    firebase
      .doAuthWithGoogle()
      .then((resp) => {
        setLoading(false);
        saveAuthAndRedirect(resp);
      })
      .catch((error) => {
        const { message } = error;
        setLoading(false);
        setErrorMessage(message);
        setShowAlert(true);
      });
  };

  const authWithFacebook = () => {
    setLoading(true);
    firebase
      .doAuthWithFacebook()
      .then((resp) => {
        setLoading(false);
        saveAuthAndRedirect(resp);
      })
      .catch((error) => {
        const { message } = error;
        setLoading(false);
        setErrorMessage(message);
        setShowAlert(true);
      });
  };
  const changeShowAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="bg-red-700  background h-screen">
      <div className="flex lg:flex-row flex-col mx-4">
        <div className="lg:w-1/2"> </div>

        <div className="lg:w-1/2   ">
          <div className="pt-20 mx-auto ">
            {loading ? (
              <div className="items-justified-center">
                <Spiner />
                <p className="mx-auto text-center font-bold mt-8 text-white">...Loading</p>
              </div>
            ) : (
              <div>
                <div className="lg:w-1/2 w-full justify-center mx-auto rounded bg-white p-4">
                  <FacebookButtonLogin authWithFacebook={authWithFacebook} />
                  <GoogleButtonLogin authWithGoogle={authWithGoogle} />
                </div>
              </div>
            )}
            {showAlert ? (
              <div className="mt-4 h-8 w-64 mx-auto">
                <Alert
                  message={errorMessage}
                  changeShowAlert={changeShowAlert}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
