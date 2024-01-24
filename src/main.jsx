import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/style.scss'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/home.jsx';
import Dashboard from './pages/dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: Home,
  },
  {
    path: "/dashboard",
    element: Dashboard,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
  <App />
  </React.StrictMode>,
)
