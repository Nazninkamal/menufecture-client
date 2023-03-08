import { createBrowserRouter, } from "react-router-dom";
import DashboardHome from "../Dashboard/DashboardHome";
import DashboardLayout from "../Dashboard/DashboardLayout";
import CreateProject from "../Pages/Projects/CreateProject";
import Projects from "../Pages/Projects/Projects";
import Configure from "../Pages/Quotes/Configure/Configure";
import CreateQuote from "../Pages/Quotes/CreateQuote/CreateQuote";
import Quotes from "../Pages/Quotes/Quotes/Quotes";
import Services from "../Pages/Quotes/Services/Services";
import AuthLayout from "../Pages/User/Authentication/AuthLayout/AuthLayout";
import User from "../Pages/User/User";
import PrivateRoute from "./PrivateRoute";



export const routers = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: "/",
                element: <DashboardHome />,

            },
            {
                path: "/user",
                element: <User />,

            },
            {
                path: "/projects",
                element: <Projects />,

            },
            {
                path: "/quotes/:id",
                element: <Quotes />,

            },
            {
                path: "/quote/configure/:id",
                element: <Configure />,

            },
            {
                path: "/quotes/services/:id",
                element: <Services />,

            },
            {
                path: "/quotes/create/:id",
                element: <CreateQuote />,

            },
            {
                path: "/create-project",
                element: <CreateProject />
            },


        ]
    },
    {
        path: "/login",
        element: <AuthLayout />,
    }

]);