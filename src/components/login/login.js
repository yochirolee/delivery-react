import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import { Firebase } from "../../lib/firebase";
import { useHistory, useLocation } from "react-router-dom";
import GoogleButtonLogin from "./googleButtonLogin";

export default function Login() {
  const firebase = new Firebase();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { activateAuth, userLoaded } = useContext(AuthContext);
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    redirectIfAuthenticated();
  }, []);

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
      console.log({ error });
    }
  };

  let { from } = location.state || { from: { pathname: "/" } };

  const authWithGoogle = () => {
    setLoading(true);
    firebase.doAuthWithGoogle().then((resp) => {
      setLoading(false);
      saveAuthAndRedirect(resp);
    });
  };

  const authWithFacebook = () => {
    setLoading(true);
    firebase.doAuthWithFacebook().then((resp) => {
      setLoading(false);
      saveAuthAndRedirect(resp);
    });
  };

  return (
    <div className="bg-red-700  background h-screen">
      <div className="flex lg:flex-row flex-col mx-4">
        <div className="lg:w-1/2"> </div>

        <div className="lg:w-1/2   ">
          <div className="pt-20 mx-auto ">
            <div className="lg:w-1/2 w-full justify-center mx-auto rounded bg-white p-4">
              {loading ? (
                <div className="w-full">...Login please wait</div>
              ) : (
                <div>
                 
                  <div className=" mx-auto mb-4">
                    <i className="fab fa-facebook text-3xl pr-2 pt-3 mr-2  "></i>
                    <button
                      className="bg-blue-700  text-white w-3/4 py-2"
                      onClick={authWithFacebook}
                    >
                      Facebook login
                    </button>
                  </div>
                   <GoogleButtonLogin authWithGoogle={authWithGoogle} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
