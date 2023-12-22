import React, { useState } from "react";

const Comment = ({ data,index, handleReply }) => {

    return (
        <div className="container">
             <div className="card _card  ">
             <div className="row">
                <p className="c_name mx-2">{data.name} </p><span className="text-end"></span>
                <div className="mx-2 mb-2">{data.comment}</div>
                <div className="link">
                    <button  className="btn btn-link mx-2" onClick={()=>handleReply(data,index)}>Reply <span className="mx-3">Edit</span></button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Comment;