import { createSlice } from "@reduxjs/toolkit";
import kanban from "../json/kanban.json";

export const kanbanSlice = createSlice({
    name: "kanban",
    initialState:{
        kanban:kanban,
    },
    reducers:{
    
    }
});

export default kanbanSlice.reducer;
