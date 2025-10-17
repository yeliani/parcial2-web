import { configureStore } from "@reduxjs/toolkit";
import CommentSlice from "./slices/CommentSlice";

export const store = configureStore({
  reducer: {
    counter: CommentSlice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;