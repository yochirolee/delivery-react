import React from 'react';
import icon from "../../Ellipsis.svg";


export default function Spiner(){
    return(
    <div className="h-4 flex flex-col  text-white mx-auto  w-20 font-bold">
       
          <img className='bg-none' src={icon}/>
        </div>
    )
}