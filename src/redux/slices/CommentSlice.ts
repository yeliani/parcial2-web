import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export type Comments = {
  id: number;
  name: string;
  email: string;
  body:string
};
type InitialState = {
  comments: Comment[];
};

const initialState: InitialState = {
  comments: [],
};

export const CommentSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {

    saveComments: (state, action: PayloadAction<Comment>) => {
      state.comments = [...state.comments, action.payload];
    },
    //para añadir un comentario
    saveAdd: (state, action: PayloadAction<Comments>) => {
      state.comments.push(action.payload);
    },
    //para añadir un comentario
    saveEdit: (state, action: PayloadAction<Comments>) => {
      state. = state.comments.map((comments) =>
        comments.id === action.payload.id ? action.payload : t
      );
    },

  
  },
});

export const { saveComments } = CommentSlice.actions;
export const { saveAdd } = CommentSlice.actions;
export const { saveEdit } = CommentSlice.actions;



export default CommentSlice.reducer;
