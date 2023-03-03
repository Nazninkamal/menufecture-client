import { createBrowserRouter, } from "react-router-dom";
import DashboardHome from "../Dashboard/DashboardHome";
import DashboardLayout from "../Dashboard/DashboardLayout";
import NewProject from "../Pages/Projects/NewProject";
import Projects from "../Pages/Projects/Projects";
import CreateQuote from "../Pages/Quotes/CreateQuote/CreateQuote";
import Quotes from "../Pages/Quotes/Quotes/Quotes";
import Services from "../Pages/Quotes/Services/Services";



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
                path: "/quotes/:id",
                element: <Quotes />,

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
                path: "/newProject",
                element: <NewProject />
            },
            
        ]
    }

]);