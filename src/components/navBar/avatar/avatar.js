import ShoppingCartButton from "../shoppingCartButton/shoppingCartButton";
import React from "react";

const Avatar = ({ HandleOpen, user }) => {
  //user for show
  user = true;

  return user ? (
    <div className="flex flex-row items-center ">
      <div className="text-white font-bold">
        <p> Yochiro Lee Cruz</p>
      </div>
      <div className="bg-white mx-4 rounded-full">
        <img
          className=" rounded-full  w-8 h-8 "
          src="img/avatar.jpg"
          alt="Avatar"
        />
      </div>
      <ShoppingCartButton HandleOpen={HandleOpen} />
    </div>
  ) : (
    <div className="flex flex-row items-center "></div>
  );
};

export default Avatar;
