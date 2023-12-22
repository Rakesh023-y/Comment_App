import React, { useState } from "react";
import Comment_box from "./Comment_box";
import Comment from "./Comment";
import Reply_box from "../reply/Reply_box";
import Reply from "../reply/Reply";

const Main = () => {

    const [comment_list, setCommentList] = useState([]);
    const [open, setOpen] = useState(false);
    const [selected_list, setSelectedList] = useState({});
    const [selected_index, setSelectedIndex] = useState();
    

    const handleAddComment = (data) => {
        data["nested_comments"] = []
        let comments = [...comment_list]
        comments.push(data)
        setCommentList(comments)
    }
    const handleAddReply = (data) => {
        let replys = [...comment_list]
        replys[selected_index].nested_comments.push(data)
        setCommentList(replys)
    }
    const handleReply =(data,index)=>{
        setSelectedList(data)
        setSelectedIndex(index)
        setOpen(true)
    }
    console.log(selected_list)

    return (
        <div className="container-fluid mb-5 w-100">
            <div className="row head_row">
                <h4 className="text-white mt-4 mx-3">ASSIGNMENT</h4>
                <div className="text-white mx-3">FRONTEND ENGINEER</div>
            </div>
            <div className="">
                <h4 className="h_text">Objective</h4>
                <p className="">Create a comments section using React.js. Please refer the design below </p>
            </div>
            <Comment_box handleAddComment={handleAddComment} />
            <div className="comment_container mt-3">
                {comment_list.length > 0 && comment_list.map((d, n) => {
                    return (
                        <div key={n} className="">
                            <Comment data={d}
                                    index = {n}
                                handleReply = {handleReply} />
            {open && d.name === selected_list.name &&
            <div>
            <Reply_box handleAddReply={handleAddReply} />
            <div className="reply_container">
                {
                    d.nested_comments.length > 0 && d.nested_comments.map((rep, index) => {
                        return (
                            <div key={index} className="">
                                <Reply name={rep.name}
                                    reply={rep.reply}
                                    handleAddReply={handleAddReply} />

                            </div>
                        )
                    })
                }
            </div>
            </div>}
                        </div>
                    )
                })}
            </div>
            
        </div>

    )
}
export default Main;