const initialState = {
    comment_list: [],
}
export const comment_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            console.log(action.payload)
            return {
                ...state,
                comment_list: action.payload
            }
        case "ADD_REPLY":
            return {
                ...state,
                reply_list: action.payload
            }
            case "GET_COMMENT":
                console.log(state)
                return {
                    ...state,
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