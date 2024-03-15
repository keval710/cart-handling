import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface fetchData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  qty: number;
}

export const fetchDataFun = createAsyncThunk("fetch-data", async () => {
  try {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
});

const fetchProduct = createSlice({
  name: "fetchData",
  initialState: {
    data: [],
    isLoading: false,
  } as { data: fetchData[]; isLoading: boolean },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDataFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataFun.rejected, (state, action) => {
        console.error("Rejected with error:", action.error);
        state.isLoading = false;
      });
  },
  reducers: {},
});

export default fetchProduct.reducer;
