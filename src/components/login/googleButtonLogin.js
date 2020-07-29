import React from "react";

export default function GoogleButtonLogin({authWithGoogle}) {
  return (
    <div className=' mx-auto'> 
    <i className="fab fa-google text-3xl pr-2 pt-3 mr-2  "></i>
    <button
      className="bg-gray-700  text-white w-3/4 py-2"
      onClick={authWithGoogle}
    >
     
      Login with Google
    </button>
    </div>
  );
}
