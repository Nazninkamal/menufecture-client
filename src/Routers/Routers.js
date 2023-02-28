import { createBrowserRouter, } from "react-router-dom";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import Projects from "../Pages/Dashboard/Projects/Projects";
import User from "../Pages/User/User";


export const routers = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout/>,
        children : [
           {
             path: '/user',
            element: <User/>
           },
           {
            path: "project",
            element: <Projects/>,
           
        },
        ]
    },
    
    



]);