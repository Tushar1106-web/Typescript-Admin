import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Token, logout } from "./UserSlice";
import { RootState } from "../app/Store";
import { fetchProducts } from "./ProductSlice";
import { useParams } from "react-router-dom";

// const token = localStorage.getItem("Token");
// console.log(token)

// const token = useSelector(selectToken);
// console.log(token);

export const fetchTodos: any = createAsyncThunk<
  any,
  { userId: string },
  { state: RootState }
>("todos/fetchTodos", async (userId, thunkApi) => {
  // console.log(thunkApi.getState().api.product);
  
    var tok = localStorage.getItem("Token");

    if (tok) {
      const apiCall = await axios.get("https://dummyjson.com/products");
      // console.log(apiCall.data);
      return apiCall.data;
    }
   else{
    thunkApi.dispatch(logout());
    thunkApi.dispatch(Token());
  }
});

export const fetchcat: any = createAsyncThunk<
  any,
  { userId: number },
  { state: RootState }
>("todoslist/fetchcat", async (userId, thunkAPI) => {
  // var tok = thunkAPI.getState().user.token;
  var tok = localStorage.getItem("Token");

  if (tok) {
    const apiCall = await axios.get("https://dummyjson.com/carts/");

    return apiCall.data;
  } else {
    thunkAPI.dispatch(logout());
    thunkAPI.dispatch(Token());
  }
});

export const single: any = createAsyncThunk<any, { userId: number }, any>(
  "singleproduct/single",
  async (id, thunkAPI) => {
    console.log(thunkAPI.getState());
    const apiCall = await axios.get(`https://dummyjson.com/products/${id}`);

    return apiCall.data;
  }
);

export const apiSlice = createSlice({
  name: "apislice",
  initialState: {
    api: [],
    product: [],
    singleprod: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {});

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      // console.log(action);
      state.product = action.payload;
    });
    builder
      .addCase(fetchTodos.rejected, (state, action) => {
        state.product = [];
        // console.log(action.error);
      })
      .addCase(fetchcat.pending, (state, action) => {});
    builder.addCase(fetchcat.fulfilled, (state, action) => {
      // console.log(action);
      state.api = action.payload;
    });

    builder.addCase(single.fulfilled, (state, action) => {
      state.singleprod = action.payload;
    });
  },
});

export default apiSlice.reducer;
