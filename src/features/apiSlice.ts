import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const token = localStorage.getItem("Token");
// console.log(token)

 
// const token = useSelector(selectToken);
// console.log(token);



export const fetchTodos:any = createAsyncThunk("todos/fetchTodos", async (_:number, thunkAPI) => {
  // const token1 = useSelector((state:any) => state.token);
    
    try {
      console.log(_,thunkAPI);
        const apiCall = await axios.get("https://dummyjson.com/products");
      if (apiCall.status === 200) {
        return apiCall.data;
      }
    } catch (err) {
      return err;
    }
  });
  
 export  const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
      const response = await axios.get("https://dummyjson.com/products");
      return response?.data
    }
  )
  
  export const fetchcat:any = createAsyncThunk("todoslist/fetchcat", async () => {
    // const response = await axios.get("/fakeApi/todos");
    try {
        const apiCall = await axios.get("https://dummyjson.com/carts");
      if (apiCall.status === 200) {
        return apiCall.data;
      }
    } catch (err) {
      return err;
    }
  });

 

export const apiSlice = createSlice({
    name:"apislice",
    initialState:{
        api:[],
        product:[]
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchTodos.pending, (state, action) => {});

          builder.addCase(fetchTodos.fulfilled, (state, action) => {
            // console.log(action);
            state.product = action.payload;
          });
          builder.addCase(fetchTodos.rejected, (state, action) => {
            state.product = [];
            // console.log(action.error);
          }).addCase(fetchcat.pending,(state,action) =>{});
          builder.addCase(fetchcat.fulfilled, (state, action) => {
            // console.log(action);
            state.api = action.payload;
          });
          builder.addCase(fetchUserById.fulfilled, (state, action) => {
            // Add user to the state array
            //@ts-ignore
            state.api.push(action.payload)
          })
      },

})

export default apiSlice.reducer;