import { combineReducers } from "redux";
import { comment_Reducer } from "./comment_Reducer";

export const reducers = combineReducers({
   comments : comment_Reducer
  });
  