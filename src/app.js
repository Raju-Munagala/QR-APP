import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import QrGenerator from "./components/QrGenerator";
import QrValidator from "./components/QrValidator";
import Header from "./components/Header";

const App = ()=>(
    <div>
        <Header/>
        <Outlet/>
    </div>
)

const appRouters = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path:"/",
                element:<h1>home</h1>
            },
            {
                path:"/generator",
                element:<QrGenerator/>
            },
            {
                path:"/validator",
                element:<QrValidator/>
            }
        ],
        errorElement:<h1>error</h1>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouters}/>)

