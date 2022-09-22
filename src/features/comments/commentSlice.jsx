import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/comments";

const initialState = {
  entities: [],
  loading: false,
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComment',
  async () => {
    const response = await axios.get(API);
    return response.data;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.entities.push(...action.payload);
      state.loading = false;
    });
    builder.addCase(fetchComments.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      alert("Kesalahan dari sisi user");
    });
  },
});

export default commentSlice.reducer;
