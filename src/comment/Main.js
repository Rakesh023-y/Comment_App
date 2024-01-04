import React, { useEffect, useState } from "react";
import moment from "moment";
import Comment_box from "./Comment_box";
import Comment from "./Comment";
import Reply_box from "../reply/Reply_box";
import Reply from "../reply/Reply";
import { useDispatch, useSelector } from "react-redux";
import { Add_Comment, getComment } from "../action/Action";


const Main = () => {

    const [comment_list, setCommentList] = useState([]);
    const [open, setOpen] = useState(false);
    const [selected_list, setSelectedList] = useState({});
    const [selected_index, setSelectedIndex] = useState();
    const [edit, setEdit] = useState(false);
    const [sort_in, setSortIn] = useState("asc")

    const dispatch = useDispatch();

    useEffect(()=>{
     dispatch(getComment)
    },[])

    const handleAddComment = (data) => {
        data["nested_comments"] = []
        data["date"] = new Date();
        //  moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
        // let comments = [...comment_list]
        // comments.push(data)
        // setCommentList(comments)
        dispatch(Add_Comment(data))
    }
    const handleAddReply = (data) => {
        data["date"] = new Date();
        let replys = [...comment_list]
        replys[selected_index].nested_comments.push(data)
        setCommentList(replys)
    }
    const handleReply = (data, index) => {
        setSelectedList(data)
        setSelectedIndex(index)
        setOpen(true)
    }
    const handleEdit = () => {
        setEdit(true)
    }
    const handleUpdateComment = (index, comment) => {
        let updates = [...comment_list];
        updates[index]["comment"] = comment;
        setCommentList(updates)
        setEdit(false)
    }
    const SortedComment = () => {
        let sortedComment = [...comment_list]
        sortedComment = comment_list.sort((a, b) => {
            if (sort_in === "asc") {
                setSortIn("desc")
                return a.date - b.date
            } else {
                setSortIn("asc")
                return b.date - a.date;
            }

        })
        console.log(sortedComment)

        setCommentList(sortedComment)
    }
    const commentList = useSelector(state => state.commentList)
    console.log(commentList)

    return (
        <div className="container-fluid mb-5 w-100 main_container">
            <div className="row head_row">
                <h4 className="text-white mt-4 mx-3 mb-0">ASSIGNMENT</h4>
                <div className="text-white mx-3 ">FRONTEND ENGINEER</div>
            </div>
            <div className="">
                <h4 className="h_text">Objective</h4>
                <p className="">Create a comments section using React.js. Please refer the design below </p>
            </div>
            <Comment_box
                handleAddComment={handleAddComment}
            />
            <p className="text-end mb-0 me-5" onClick={SortedComment}>{sort_in === "asc" ? " Sort By: Date And Time↓" : "Sort By: Date And Time↑"} </p>
            <div className="comment_container mt-3">
                {comment_list.length > 0 && comment_list.map((d, n) => {
                    return (
                        <div key={n} className="">
                            <Comment data={d}
                                index={n}
                                handleReply={handleReply}
                                handleEdit={handleEdit}
                                edit={edit}
                                handleUpdateComment={handleUpdateComment}
                            />
                            {open && d.name === selected_list.name &&
                                <div>
                                    <Reply_box handleAddReply={handleAddReply} />
                                    <div className="reply_container">
                                        {
                                            d.nested_comments.length > 0 && d.nested_comments.map((rep, index) => {
                                                return (
                                                    <div key={index} className="">
                                                        <Reply data = {rep}
                                                            index={index}
                                                            name={rep.name}
                                                            reply={rep.reply}
                                                            edit={edit}
                                                            handleEdit={handleEdit}
                                                            handleUpdateComment={handleUpdateComment} />
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