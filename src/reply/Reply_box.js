import React, { useState } from "react";

const Reply_box =({handleAddReply})=>{

    const [name, setName] = useState("");
    const [reply, setReply] =useState("");
    

    const handleNameChange =(e)=>{
        setName(e.target.value)
    }
    const handleReplyChange =(e)=>{
        setReply(e.target.value)
    }
    const handleReply =()=>{
        let reply_data ={
            name: name,
            reply: reply
        }
        handleAddReply(reply_data)
    }
    return(
        <div className="container mt-3 w-75 ">
        <div className="card first_card">
            <p className="text mx-2">Reply</p>
            <input type="text" className="e-mail m-2" placeholder="name" onChange={(e)=>handleNameChange(e)}/>
            <input type="text" className="e-mail p-2 m-2" placeholder="Reply" onChange={(e)=>handleReplyChange(e)}/>
            <div className="button text-end m-3">
            <button className="btn btn-primary" onClick={handleReply}>POST</button>
            </div>
        </div>
    </div>
    )
}
export default Reply_box;