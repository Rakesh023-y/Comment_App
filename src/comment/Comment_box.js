import React, { useState } from "react";

const Comment_box =({handleAddComment})=>{

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleNameChange =(e)=>{
        setName(e.target.value)
    }
    const handleCommentChange =(e)=>{
        setComment(e.target.value)
    }
    const handleAdd =()=>{
        let data ={
            name: name,
            comment: comment
        }
        handleAddComment(data)
    }

    //  console.log(name,comment)
    return(
        <div className="container bg-light ">
                <div className="card _card">
                    <h5 className="m-2">Comment</h5>
                    <input type="text" className=" m-2" placeholder="name" onChange={(e)=>handleNameChange(e)}/>
                    <input type="text" className=" p-3 m-2" placeholder="Comment" onChange={(e)=>handleCommentChange(e)}/>
                    <div className="button text-end m-3">
                    <button className="btn btn-primary" onClick={()=>handleAdd()} >POST</button>
                    </div>
                </div>
            </div>
    )
}
export default Comment_box;