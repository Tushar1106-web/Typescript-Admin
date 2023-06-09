import {createSlice } from "@reduxjs/toolkit";

const data = localStorage.getItem("firstName");


export function token(){
  // console.log(tok);
}
// console.log(tok);
const tok = localStorage.getItem("Token");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: data ? data : null,
    token:tok
  },
  reducers: {
    login: (state, action) => {
      // console.log(action.payload);
      state.user = action.payload.name;
    },
    logout: (state) => {
      state.user = null;
    },
    // auto:(state,action) =>{
    //   if(state.token)
    //   {
    //     state.token = action.payload
    //   }
    //   else if(state.token = null)
    //   {
    //      logout();
    //   }
    // } 
  },
  
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state:any) => state.user.user;

export const selectToken = (state:any) => state.token;


export default userSlice.reducer;
