import { createBrowserRouter, } from "react-router-dom";
import DashboardHome from "../Dashboard/DashboardHome";
import DashboardLayout from "../Dashboard/DashboardLayout";
import NewProject from "../Pages/Projects/NewProject";
// import NewProject from "../Pages/NewProject/NewProject";
import Projects from "../Pages/Projects/Projects";
import User from "../Pages/User/User";


export const routers = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                path: "/",
                element: <DashboardHome />,

            },
            {
                path: "/projects",
                element: <Projects />,

            },
            {
                path:"/newProject",
                element: <NewProject/>
            },
            {
                path: '/user',
                element: <User />
            },


        ]
    },





]);