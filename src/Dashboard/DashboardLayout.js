import React from "react";

import { Outlet } from "react-router-dom";
import AuthLayout from "../Pages/User/Authentication/AuthLayout/AuthLayout";
import DashboardSidebar from "./DashBoardSidebar";


export default function DashboardLayout() {
    const user = false

    return (
        <React.Fragment>
            {
                user ?

                    <section className="flex flex-grow">
                        <DashboardSidebar />
                        <div className="m-3 text-xl text-gray-900 font-semibold w-full">
                            <Outlet />
                        </div>
                    </section> :
                    <AuthLayout />
            }
        </React.Fragment>
    );
};



