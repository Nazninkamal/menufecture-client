import React from "react";

import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashBoardSidebar";


export default function DashboardLayout() {

    return (
        <section className="flex">
            <DashboardSidebar />
            <div className="m-3 text-xl text-gray-900 font-semibold w-full">
                <Outlet />
            </div>
        </section>
    );
};


