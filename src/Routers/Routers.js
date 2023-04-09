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
import OrderReviewQuote from "../Pages/Quotes/Configure/ReviewQuote/OrderReviewQuote";
import SupplierRequest from "../Pages/Admin/SupplierRequest/SupplierRequest";
import AllOrder from "../Pages/Supplier/Order/AllOrder";
import AdminRoute from "./AdminRoute";
import SupplierRoute from "./SupplierRoute";
import UserRoute from "./UserRoute";
import MyOrder from "../Pages/MyOrder/MyOrder";
import DashboardHome from "../Dashboard/DashboardHome";
import Contact from "../Pages/User/Contact/Contact";
import Feedback from "../Pages/User/Feedback/Feedback";
import QuoteRequestToAdmin from "../Pages/Admin/QuoteRequestToAdmin/QuoteRequestToAdmin";
import QuoteRequestToSupplier from "../Pages/Supplier/QuoteRequest/QuoteRequestToSupplier";
import AddMaterial from "../Pages/Admin/AddMaterial/AddMaterial";
import ViewAnalysis from "../Pages/Quotes/Quotes/ViewAnalysis";



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
                path: "/supplierRequest",
                element: <AdminRoute><SupplierRequest /></AdminRoute>,

            },
            {
                path: "/quoteRequestToAdmin",
                element: <AdminRoute><QuoteRequestToAdmin /></AdminRoute>,

            },
            {
                path: "/addMaterial",
                element: <AdminRoute><AddMaterial /></AdminRoute>,

            },
            {
                path: "/quoteRequestToSupplier",
                element: <SupplierRoute><QuoteRequestToSupplier /></SupplierRoute>,

            },
            {
                path: "/allOrder",
                element: <SupplierRoute><AllOrder /></SupplierRoute>,

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
                path: '/quotes/viewAnalysis/:id',
                element: <ViewAnalysis />
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