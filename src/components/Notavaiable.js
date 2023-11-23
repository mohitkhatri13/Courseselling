import React from "react";
import { toast } from "react-toastify";
const Notavaiable = ()=>{
     return (
        <div   className="  h-full w-full bg-slate-600 flex scroll-x-hidden
          items-center justify-center ">
            <h1 className=" text-xl font-bold text-white">Not Avaiable</h1>
          {  toast.warning("Currently Not Avaiable")  }
        </div>
     )
}
export default Notavaiable