const initialState = {
    comment_list: [],
    reply_list: [],
    update_reply: [],
    edit_list: []
}
export const comment_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "COMMENT_LIST":
            return {
                ...state,
                comment_list: action.payload
            }
        case "REPLY_LIST":
            return {
                ...state,
                reply_list: action.payload
            }
        case "UPDATE":
            return {
                ...state,
                update_reply: action.payload
            }
        case "EDIT_COMMENT":
            return {
                ...state,
                edit_list: action.payload
            }
        default:
            return state;
    }
}