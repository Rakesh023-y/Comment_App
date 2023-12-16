import React, { useState } from "react";
import Comment_box from "./Comment_box";
import Comment from "./Comment";

const Main =()=>{

     const [comment_list, setCommentList] = useState([]);

     const handleAddComment =(data)=>{
        let comments = [...comment_list]
        comments.push(data)
        setCommentList(comments)
     }
     console.log(comment_list)

    return(
        <div className="">
            <Comment_box handleAddComment = {handleAddComment}/>
            <div className="comment_container p-5">
                {comment_list.length>0 && comment_list.map((d,n)=>{
                    return(
                        <div className="">
                            <Comment name= {d.name}
                                     comment = {d.comment}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Main;