import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  design: "design1",
  headers: {
    title: "<h1 class='text-2xl font-semibold'>Our Work</h1>",
    subTitle: "<p>Browse through our collection of stunning images</p>",
    btn: "<span>Start Now</span>",
  },
};

export const footerSlice = createSlice({
  name: "footerComp",
  initialState,
  reducers: {
    selectFooterDesign: (state, action) => {
      state.design = `design${action.payload}`;
    },
    editGalleryTitle: (state, action) => {
      state.headers.title = action.payload;
    },
    editGallerySubTitle: (state, action) => {
      state.headers.subTitle = action.payload;
    },
    editGalleryBtn: (state, action) => {
      state.headers.btn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectFooterDesign } = footerSlice.actions;

export default footerSlice.reducer;
