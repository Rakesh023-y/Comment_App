import React from "react";

const Comment =({name, comment})=>{
    return(
        <div className="row">
        <p className="c_name mx-2">{name} </p><span className="text-end"></span>
        <div className="mx-2 mb-2">{comment}</div>
        <div className="link">
            <a href="reply" className="mx-2">Reply <span className="mx-3">Edit</span></a>
        </div>
        </div>
    )
}
export default Comment;