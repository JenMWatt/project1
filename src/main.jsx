import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from "./Navbar";
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Datab from "./Datab";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/Datab",
    element: <Datab />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Navbar />
    < App />
  </React.StrictMode>,

);