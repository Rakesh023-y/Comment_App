import React from "react";
import moment from "moment";

const Comment = ({ data,index, handleReply,handleEdit }) => {

    return (
        <div className="container mb-2">
                <p className="text-end mb-0">Sort By: Date And Time↓ </p>
             <div className="card _card  ">
                <p className="text-end date_format">{moment(data.date).format("lll")} </p>
                <p className="c_name mx-2">{data.name} </p>
                <span className="text-end"></span>
                <div className="mx-2 mb-2">{data.comment}</div>
                <div className="link">
                    <button  className="btn btn-link " onClick={()=>handleReply(data,index)}>Reply </button>
                    <button className="btn btn-link" onClick={handleEdit}>Edit</button>
                </div>
                </div>
        </div>
    )
}
export default Comment;