import React from "react";

const Edit =({data,handleEditComment})=>{

    return(
     <div className="">
      <input type="text" value={data} onChange={(e)=>handleEditComment(e)}/>
     </div>
    )
}
export default Edit;