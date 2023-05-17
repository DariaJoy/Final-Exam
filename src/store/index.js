import { configureStore } from '@reduxjs/toolkit';

import courses from './reducers/courses';
import users from './reducers/users'

export const store = configureStore({
  reducer: {courses, users},
})