import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashBoardSidebar";


export default function DashboardLayout() {
    return (
        <React.Fragment>
            <section className="flex flex-grow">
                <DashboardSidebar />
                <div className="px-3 text-xl text-gray-900 font-semibold h-screen w-full overflow-y-hidden">
                    <Outlet />
                </div>
            </section>
        </React.Fragment>
    );
};



