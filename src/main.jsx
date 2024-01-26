import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/style.scss'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

import Home from './pages/home.jsx';
import Dashboard from './pages/dashboard.jsx';
import ErrorElement from './pages/ErrorElement.jsx';
import ConnectWallet from './pages/ConnectWallet.jsx';
import { Swap } from './pages/Swap.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorElement />
  },
  {
    path: "/wallet",
    element: <ConnectWallet />,
    errorElement: <ErrorElement />
  },
  {
    path: "/swap",
    element: <Swap />,
    errorElement: <ErrorElement />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
