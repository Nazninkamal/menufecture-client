import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import DashboardSidebar from "./DashBoardSidebar";



export default function DashboardLayout() {
    
    const [open, setOpen] = useState(true);
    return (
        <section className="flex gap-6">
           <DashboardSidebar/>
            <div className="m-3 text-xl text-gray-900 font-semibold">
                <Outlet />
            </div>
        </section>
    );
};



