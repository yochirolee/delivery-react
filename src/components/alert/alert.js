import React,{useEffect} from 'react';

export default function AddedAlert({changeShowAlert,message}){
    let timer = null;

    

    useEffect(() => {
        setTimer();
      }, []);
    
      function setTimer() {
        if (timer != null) {
          clearTimeout(timer)
        }
    
        timer = setTimeout(() => {
          timer = null;
          changeShowAlert();
        }, 1000);
      }

    return(
         <div
            className="border-none px-4 py-1 rounded bg-green-700 hover:border-transparent"
            role="alert"
          >
            <strong class="font-bold text-xs text-white">{message}</strong>
        
          </div>
       
    )
}