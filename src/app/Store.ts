import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice";
import kanbanReducer from "../features/KanbanSlice";
import inboxReducer from "../features/InboxSlice";
import ProductReducer from "../features/ProductSlice";
import apiReducers from "../features/apiSlice";

 const store = configureStore({
    reducer:{
        user:userReducer,
        kanban:kanbanReducer,
        inbox:inboxReducer,
        product:ProductReducer,
        api:apiReducers,
    } 
})
export type RootState = ReturnType<typeof store.getState>

export default store;