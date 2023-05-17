import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { store } from './store/index'
import { Provider } from 'react-redux'
import { MainCoursesPage, CoursesCartPage, AuthPage } from './pages';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainCoursesPage />
  },
  {
    path: "/cart",
    element: <CoursesCartPage />
  },
  {
    path: "/auth",
    element: <AuthPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);

