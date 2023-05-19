import { configureStore } from '@reduxjs/toolkit';
import { courses, users } from './reducers'

export const store = configureStore({
  reducer: {courses, users},
});