import React from "react";
import {toast} from "react-toastify"
const Network = ()=>{
     return (
        
            <div className=" h-screen w-full bg-slate-500 flex 
             items-center justify-center flex-col">
                 <h1 className="font-bold text-[200px] ">404 </h1>
                 <p className=" fonr-bold text-[150px]">Page Not Found</p>
                 {toast.warning("Error Occured")}
            </div>
        
     );
}
export default Network