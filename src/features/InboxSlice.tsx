import { createSlice } from "@reduxjs/toolkit";
import inbox from "../json/inbox.json";

export const inboxSlice = createSlice({
    name: "inbox",
    initialState:{
        inbox:inbox,
    },
    reducers:{
    
    }
});

export default inboxSlice.reducer;
