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
import Recipes from './components/Recipes/Recipes.jsx';
import Login from './components/Login/Login.jsx';
import Registretion from './components/Registretion/Registretion.jsx';
import AuthProviders from './components/providers/AuthProviders.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';

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
        path: "/chef/:id",
        element: <ChefCard />,
      },
      {
        path: '/chef/:id/recipes',
        element: <PrivateRoute><Recipes /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registretion />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)
