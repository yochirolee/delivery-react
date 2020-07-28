import React from "react";

export default function GoogleButtonLogin({authWithGoogle}) {
  return (
    <button
      className="bg-gray-700 mx-auto  text-white w-64 py-2"
      onClick={authWithGoogle}
    >
      <i className="fab fa-google text-2xl pr-2 mr-2 border-r"></i>
      Log in with Google
    </button>
  );
}
