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
import Pagenotfound from './components/404page/Pagenotfound.jsx';
import ChefCard from './components/ChefCard/ChefCard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Banner />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: "*",
        element: <Pagenotfound />
      },
      {
        path: "/chefcard/:id",
        element: <ChefCard />,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
