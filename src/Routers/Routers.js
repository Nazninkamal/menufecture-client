import { createBrowserRouter, } from "react-router-dom";
import DashboardHome from "../Dashboard/DashboardHome";
import DashboardLayout from "../Dashboard/DashboardLayout";
import CreateProjectForm from "../Pages/Projects/CreateProjectForm";
import Projects from "../Pages/Projects/Projects";
import Configure from "../Pages/Quotes/Configure/Configure";
import CreateQuote from "../Pages/Quotes/CreateQuote/CreateQuote";
import Quotes from "../Pages/Quotes/Quotes/Quotes";
import Services from "../Pages/Quotes/Services/Services";
import AuthLayout from "../Pages/User/Authentication/AuthLayout/AuthLayout";
import Password from "../Pages/User/Profile/Password";
import Profile from "../Pages/User/Profile/Profile";
import ProfileUpdateForm from "../Pages/User/Profile/ProfileUpdateForm";
import NoteFoundPage from "../Utility/404/NoteFoundPage";
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
                element: <CreateProjectForm />
            },
            {
                path: "/profile",
                element: <Profile />,
                children: [
                    {
                        path: '/profile',
                        element: <ProfileUpdateForm />
                    },
                    {
                        path: '/profile/password',
                        element: <Password />
                    },
                   
                ]
            },


        ]
    },
    {
        path: "/login",
        element: <AuthLayout />,
    },
    {
        path: "*",
        element: <NoteFoundPage />,
    },

]);