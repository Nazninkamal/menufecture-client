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
import ProfileDetails from "../Pages/User/Profile/ProfileDetails";
import Password from "../Pages/User/Profile/Password";
import Profile from "../Pages/User/Profile/Profile";
import ProfileUpdateForm from "../Pages/User/Profile/ProfileUpdateForm";
import NoteFoundPage from "../Utility/404/NoteFoundPage";
import PrivateRoute from "./PrivateRoute";
import ApplyForSupplierFrom from "../Pages/User/Profile/ApplyForSupplier";
import UserHomePage from "../Pages/User/UserHomePage/UserHomePage";



export const routers = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: "/",
                element: <UserHomePage />,

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
                        element: <ProfileDetails />
                    },
                    {
                        path: '/profile/password',
                        element: <Password />
                    },
                    {
                        path: '/profile/details/update',
                        element: <ProfileUpdateForm />
                    },
                    {
                        path: '/profile/applyForSupplier',
                        element: <ApplyForSupplierFrom />
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