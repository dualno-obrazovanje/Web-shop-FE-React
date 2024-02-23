import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AdminLandingPage from './pages/AdminLandingPage';
import UserLandingPage from './pages/UserLandingPage';
import { StateContext } from './state/StateContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/landing/admin",
    element: <AdminLandingPage />,
  },
  {
    path: "/landing",
    element: <UserLandingPage />,
  },
]);

const store = {
  users: [
  {
    username: 'nikola',
    role: 'user',
  },
  {
    username: 'marko',
    role: 'admin',
  },
],};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateContext.Provider value={store}>
      <RouterProvider router={router} />
    </StateContext.Provider>
  </React.StrictMode>
);