export const Add_Comment =(data)=>
dispatch=>{
    dispatch({
        type: "ADD_COMMENT",
        payload: data
    })
}

export const Add_Reply =(data)=> 
dispatch=>{
    dispatch({
        type: "ADD_REPLY",
        payload: data
    })
}
export const Update =(data)=> 
dispatch=>{
    dispatch({
        type: "UPDATE",
        payload: data
    })
}
export const Edit_Reply =(data)=> 
dispatch=>{
    dispatch({
        type: "EDIT_REPLY",
        payload: data
    })
}
