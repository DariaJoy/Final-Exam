import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { store } from './store/index'
import { Provider } from 'react-redux'
import { MainCoursesPage, CoursesCartPage, AuthPage } from './pages';
import { PrivateRoute, PublicRoute } from './components';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute>
              <MainCoursesPage />
              </PrivateRoute>
  },
  {
    path: "/cart",
    element: <PrivateRoute>
                <CoursesCartPage />
              </PrivateRoute>
  },
  {
    path: "/auth",
    element: <PublicRoute>
                <AuthPage/>
             </PublicRoute>
              
              
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

