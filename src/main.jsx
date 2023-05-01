import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Banner from './components/Banner/Banner.jsx';
import Blog from './components/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: '/',
        element: <Banner/>
      },
      {
        path: '/blog',
        element: <Blog/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
