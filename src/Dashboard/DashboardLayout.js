import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashBoardSidebar";



export default function DashboardLayout() {
    
    const [open, setOpen] = useState(true);
    return (
        <section className="flex ">
           <DashboardSidebar/>
            <div className=" text-xl text-gray-900 font-semibold ">
                <Outlet />
            </div>
        </section>
    );
};



