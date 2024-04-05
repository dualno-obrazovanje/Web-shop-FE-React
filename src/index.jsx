import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import UserLandingPage from './pages/UserLandingPage';
import { StateProvider } from './state/StateContext';


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
    element: React.lazy(() => import('./pages/AdminLandingPage')),
  },
  {
    path: "/landing",
    element: <UserLandingPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);