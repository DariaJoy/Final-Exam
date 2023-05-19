import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from "axios";

const addToLocalStorage = (id) => {
  let courses = JSON.parse(localStorage.getItem('cart')) || [];
  courses.push(id);
  localStorage.setItem('cart', JSON.stringify(courses))
};

const removeFromLocalStorage = (id) => {
  let courses = JSON.parse(localStorage.getItem('cart')) || [];
  courses = courses.filter((courses) => courses !== id);
  localStorage.setItem('cart', JSON.stringify(courses))
};

export const getCartList = createAsyncThunk(
  'http://localhost:3001/cart/getCartList',
  () => {
  axios.get('http://localhost:3001/courses')
  .then(({ data }) => data);
  }
);

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    list: [],
    amountPrice: 0,
    counter: 0
  },
    reducers: {
      addToCartList: (state, {payload}) => {
          state.list.push(payload);
          state.amountPrice += payload.price;
          state.counter ++;
          addToLocalStorage(payload.id)       
      },
    removeFromCartList: (state, {payload}) => {
        state.amountPrice -= state.list.find((courseId) => courseId.id === payload.id).price;
        state.list = state.list.filter((courseId) => courseId.id !== payload.id);
        state.counter --;
        removeFromLocalStorage(payload.id);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCartList.fulfilled,
      (state, action) => {
        const cartId = JSON.parse(localStorage.getItem('cart')) || [];
        const cart = action.payload.filter((course) => cartId.includes(course.id));
        state.list = cart;
        state.counter = cart.length;
        state.amountPrice = cart.reduce((amountPrice, {price}) => amountPrice + price, 0);

        
      },   
    );
  },
});

export const { addToCartList, removeFromCartList } = coursesSlice.actions

export default coursesSlice.reducer