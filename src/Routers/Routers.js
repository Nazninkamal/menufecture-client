import { createBrowserRouter, } from "react-router-dom";
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
// import UserDashboardPage from "../Pages/User/UserHomePage/UserHomePage";
// import SupplierHomePage from "../Pages/Supplier/SupplierHomePage/SupplierHomePage";
// import AdminHomePage from "../Pages/Admin/AdminHomePage/AdminHomePage";
import OrderReviewQuote from "../Pages/Quotes/Configure/ReviewQuote/OrderReviewQuote";
import SupplierRequest from "../Pages/Admin/SupplierRequest/SupplierRequest";
import QuoteRequest from "../Pages/Supplier/QuoteRequest/QuoteRequest";
import AllOrder from "../Pages/Supplier/Order/AllOrder";
import AdminRoute from "./AdminRoute";
import SupplierRoute from "./SupplierRoute";
import UserRoute from "./UserRoute";
import AddMaterial from "../Pages/Supplier/AddMaterial/AddMaterial";
import MyOrder from "../Pages/MyOrder/MyOrder";
import DashboardHome from "../Dashboard/DashboardHome";
import Contact from "../Pages/User/Contact/Contact";
import Feedback from "../Pages/User/Feedback/Feedback";



export const routers = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: "/",
                element: <DashboardHome />,

            },
            /* {
                path: "/supplierDashboard",
                element: <SupplierHomePage />,

            },
            {
                path: "/adminDashboard",
                element: <AdminRoute><AdminHomePage /></AdminRoute>,

            }, */

            {
                path: "/supplierRequest",
                element: <AdminRoute><SupplierRequest /></AdminRoute>,

            },
            {
                path: "/quoteRequest",
                element: <SupplierRoute><QuoteRequest /></SupplierRoute>,

            },
            {
                path: "/allOrder",
                element: <SupplierRoute><AllOrder /></SupplierRoute>,

            },
            {
                path: "/addMaterial",
                element: <SupplierRoute><AddMaterial /></SupplierRoute>,

            },

            {
                path: "/projects",
                element: <UserRoute><Projects /></UserRoute>,

            },
            {
                path: "/quotes/:id",
                element: <UserRoute><Quotes /></UserRoute>,

            },
            {
                path: "/quote/configure/:id",
                element: <UserRoute><Configure /></UserRoute>,

            },
            {
                path: "/quotes/services/:id",
                element: <UserRoute><Services /></UserRoute>,

            },
            {
                path: "/quotes/create/:id",
                element: <UserRoute><CreateQuote /></UserRoute>,

            },
            {
                path: "/quotes/my-oder",
                element: <UserRoute><MyOrder /></UserRoute>,

            },
            {
                path: "/create-project",
                element: <UserRoute><CreateProjectForm /></UserRoute>
            },
            {
                path: '/profile/OrderReviewQuote/:id',
                element: <UserRoute><OrderReviewQuote /></UserRoute>
            },
            {
                path: '/contact',
                element: <UserRoute><Contact /></UserRoute>
            },
            {
                path: '/feedback',
                element: <UserRoute><Feedback /></UserRoute>
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
                        element: <UserRoute><ApplyForSupplierFrom /></UserRoute>
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