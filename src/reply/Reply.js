import React, { useState } from "react";
import moment from "moment";
import Edit from "./Edit";

const Reply = ({ name, reply }) => {

    return (
        <div className="container mt-3 ">
            <p className="text-end mb-0">Sort By: Date and Time↓</p>
            <div className="card first_card">
                <p className="c_name m-2">{name}</p>
                <div className="reply p-2 mx-2">{reply}</div>
                <div className="link">
                    <button className="btn btn-link">Edit</button>
              {/* { Edit &&  <div>
                       <Edit/>
                 </div>} */}
                </div>
            </div>
        </div>
    )
}
export default Reply;