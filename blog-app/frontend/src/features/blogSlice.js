import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import blogService from "../services/blogService";

const initialState = {
  blog: null,
  blogs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, thunkAPI) => {
    try {
      return await blogService.fetchBlogs();
    } catch (error) {
      const message = error.message || error;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, { payload }) => {
        state.blogs = payload.data;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = payload.message;
      })
      .addCase(fetchBlogs.rejected, (state, { payload }) => {
        state.message = payload;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { reset } = blogsSlice.actions;
export default blogsSlice.reducer;
