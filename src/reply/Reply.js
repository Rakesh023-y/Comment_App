import React, { useState } from "react";

const Reply =({name,reply})=>{

    return(
        <div className="container mt-3 w-75 ">
        <div className="card first_card">
            <p className="c_name m-2">{name}</p>
            <div className="reply p-2 m-2">{reply}</div>
            <div className="link m-3">
            <button className="btn btn-link">Edit</button>
            </div>
        </div>
    </div>
    )
}
export default Reply;