import React, { useState } from "react";
import SideBarProductsInCart from "../sideBar/SideBardProductsInCart";
import Avatar from "./avatar/avatar";
import {Link} from 'react-router-dom';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const HandleOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex flex-row w-full lg:mx-20  justify-between">
      <div className="lg:text-xl  mt-1 lg:mt-0 text-base text-white font-bold ">
        <Link to="/">
          <h3>Delivery 2.0</h3>
        </Link>
      </div>
      <div>
        <Avatar HandleOpen={HandleOpen} />
        <SideBarProductsInCart open={open} HandleOpen={HandleOpen}/>
      </div>
    </nav>
  );
}
