import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import notify from "react-hot-toast";

const API = "https://jsonplaceholder.typicode.com/comments";

const initialState = {
  entities: [],
  loading: false,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await axios.get(API);
    return response.data;
  }
);

const CommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, { payload }) => {
        state.entities = payload;
        state.loading = false;
        notify.success("Get Comment Success!");
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        notify.error("Get Comment Failed!");
      });
  },
});

export default CommentSlice.reducer;
