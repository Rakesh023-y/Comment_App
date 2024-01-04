import React, { useState } from "react";
import moment from "moment";
import Edit from "./Edit";

const Reply = ({ data, index, name, reply, edit, handleEdit, handleUpdateComment }) => {

    const [edited_reply, setEditedReply] = useState(reply);

    const handleEditReply = (e) => {
        setEditedReply(e.target.value)
    }

    return (
        <div className="container mt-3 ">
            <p className="text-end mb-0">Sort By: Date and Time↓</p>
            <div className="card first_card">
            <p className="text-end date_format">{moment(data.date).format("lll")} </p>
                <p className="c_name m-2">{name}</p>
                {edit ? <Edit data={edited_reply}
                    handleEditReply={handleEditReply}
                /> :
                    <div className="reply p-2 mx-2">{reply}</div>}
                <div className="link">
                    {edit ? <button className="btn btn-link" onClick={() => handleUpdateComment(index, edited_reply)}>Update</button> :
                        <button className="btn btn-link" onClick={() => handleEdit()}>Edit</button>}
                </div>
            </div>
        </div>
    )
}
export default Reply;