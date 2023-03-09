import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import About from "./components/About";
import Navigator from "./components/Navigator";
import Blog from "./components/Blog";
import Slug from "./Slug";
import './app.css';
import Loading from "./components/Loading";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path:'/',
        element:<div><Loading/><App/></div>
    },
    {
        path:'about',
        element:<div><Loading/><About/></div>
    },
    {
        path:'blog',
        element:<div><Navigator/><Loading/><Blog/></div>
    },
    {
        path:'slug/:id',
        element:<div><Loading/><Slug/></div>
    }
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
        </RouterProvider>
    </React.StrictMode>
);