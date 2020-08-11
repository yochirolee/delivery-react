import React from "react";
import Spiner from '../Spiner/spiner';

export default function OrderStatusTrack({ status }) {
  let classStatus = null;

  switch (status) {
    case "aceptada":
      classStatus = "rounded-full text-white bg-green-500 w-8 h-8  p-1";
      break;
    case "en proceso":
      classStatus = "rounded-full text-white bg-green-500 w-8 h-8  p-1";
      break;
    case "transportando":
      classStatus = "rounded-full text-white bg-green-500 w-8 h-8  p-1";
      break;

    default:
      break;
  }

  return (
    <div>
      {status === "New" ? (
        <div className="flex flex-row flex-wrap text-center ">
          <div className=" text-center w-full">
            <Spiner/> 
            <p className=' text-sm  text-sm mx-10'>Su orden ha sido enviada con exito, por favor espere</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap text-center mt-4">
          <div className="mx-auto w-1/3 text-center  items-center flex flex-col ">
            <div
              className={
                status == "aceptada"
                  ? classStatus
                  : "rounded-full text-green-400 border border-green-400 w-8 h-8 p-1"
              }
            >
              <i className="fa fa-check"></i>
            </div>
            <div className="text-xs font-bold mt-2">Aceptada</div>
          </div>
          <div className="mx-auto w-1/3 text-center  items-center flex flex-col ">
            <div
              className={
                status == "en proceso"
                  ? classStatus
                  : "rounded-full text-green-400 border border-green-400 w-8 h-8 p-1"
              }
            >
              <i className="fa fa-hourglass-start  "></i>
            </div>
            <div className="text-xs font-bold mt-2">En Proceso</div>
          </div>

          <div className="mx-auto w-1/3 text-center  items-center flex flex-col ">
            <div
              className={
                status == "transportando"
                  ? classStatus
                  : "rounded-full text-green-400 border border-green-400 w-8 h-8 p-1"
              }
            >
              <i className="fa fa-shipping-fast"></i>
            </div>
            <div className="text-xs font-bold mt-2">En Camino</div>
          </div>
        </div>
      )}
    </div>
  );
}
