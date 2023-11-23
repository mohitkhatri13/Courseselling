import React from "react";

const Filter = (props) =>{
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    function filterHandler(title){
         setCategory(title);
    }
   return (
     <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center" >
         {
            filterData.map((datax)=>(
                <button className={ `text-lg px-2 py-1 rounded-md font-medium text-white
                 bg-black hover:bg-opacity-70 border-2 transition-all duration-300 

                 
                 ${category===datax.title?"opacity-80 border-white":"opacity-40 border-transparent"} `}
                  key={datax.id}
                onClick = {()=>filterHandler(datax.title)}>{datax.title}</button>
            ))
         }
     </div>
   );

}
export default Filter