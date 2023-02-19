import { createBrowserRouter, } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";


export const routers = createBrowserRouter([
    {
        path: "/",
        element:
            <Home />
    },



]);