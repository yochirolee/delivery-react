import React from 'react';

export default function FacebookButtonLogin({authWithFacebook}){

    return(
        <div className=" mx-auto mb-4">
        <i className="fab fa-facebook text-3xl pr-2 pt-3 mr-2  "></i>
        <button
          className="bg-blue-700  text-white w-3/4 py-2"
          onClick={authWithFacebook}
        >
          Facebook login
        </button>
      </div>
    )
}