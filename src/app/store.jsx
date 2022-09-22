import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "../features/comments/commentSlice";

export default configureStore({
  reducer: {
    comments: commentReducer,
  },
});
