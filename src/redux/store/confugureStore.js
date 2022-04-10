import { combineReducers, createStore } from "redux";
import { chatReducer } from "./reducers/chatReducers";
import { messageReducer } from "./reducers/messageReducer";

export const rootReducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})




export const store = createStore(rootReducer)