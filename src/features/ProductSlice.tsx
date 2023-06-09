import {
  createAsyncThunk,
  createSlice,
  AsyncThunkOptions,
} from "@reduxjs/toolkit";
import product from "../json/product.json";
import axios from "axios";


export const fetchProducts = createAsyncThunk<any, any, any>(
  "products/getProducts",
  async (userId, thunkAPI) => {
    const response = await axios.get("https://dummyjson.com/products");
    return response?.data;
  }
);


export const productSlice = createSlice({
  name: "kanban",
  initialState: {
    product: product,
    apiProducts: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // Add user to the state array
      //@ts-ignore
      state.apiProducts.push(action.payload);
    });
  },
});

export default productSlice.reducer;
