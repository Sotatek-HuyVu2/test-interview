import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  listBox: [],
  listChild: [],
};

export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    addBox: (state, action) => {
      state.listBox.push(action.payload);
    },
    addChild: (state, action) => {
      state.listChild.push(action.payload);
    },
    removeBox: (state, action) => {
      state.listBox = state.listBox.filter((b) => b.id !== action.payload);
    },
    moveChildToBox: (state, action) => {
      state.listChild = action.payload;
    },
    removeChild: (state, action) => {
      state.listChild = state.listChild.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addBox, addChild, removeBox, moveChildToBox, removeChild } = boxSlice.actions;

export default boxSlice.reducer;
