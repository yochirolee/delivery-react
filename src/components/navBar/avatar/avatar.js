import ShoppingCartButton from "../shoppingCartButton/shoppingCartButton";
import React, { useState } from "react";

const Avatar = ({ HandleOpen, user, removeAuth }) => {
  //user for show
  const [openMenu, setOpenMenu] = useState(false);
  

  return user ? (
    <div className="flex flex-row items-center ">
      <div className="text-white font-bold">
        <p> {user.displayName}</p>
      </div>
      <div className="bg-white mx-4 rounded-full">
        <img
          className=" rounded-full relative w-8 h-8 cursor-pointer "
          src={user.photoURL}
          alt="Avatar"
          onClick={() => setOpenMenu(!openMenu)}
        />
        <div
         
          className={
            openMenu
              ? "flex-wrap overflow  rounded fixed right-0 lg:w-1/5 p-4 w-1/2 bg-gray-100  mt-2 "
              : "hidden  "
          }
        >
          <button  onMouseLeave={() => setOpenMenu(false)}
            className="bg-red-700 p-2 w-full border text-white mx-auto"
            onClick={removeAuth}
          >
            Salir
          </button>
        </div>
      </div>

      <ShoppingCartButton HandleOpen={HandleOpen} />
    </div>
  ) : (
    <div className="flex flex-row items-center "></div>
  );
};

export default Avatar;
