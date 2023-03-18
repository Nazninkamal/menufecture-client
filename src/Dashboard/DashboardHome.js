import React from "react";
import { useSelector } from "react-redux";
import AdminHomePage from "../Pages/Admin/AdminHomePage/AdminHomePage";
import SupplierHomePage from "../Pages/Supplier/SupplierHomePage/SupplierHomePage";
import UserDashboardPage from "../Pages/User/UserHomePage/UserHomePage";

export default function DashboardHome() {
   const { user } = useSelector(state => state.auth);

   return (
      <div>
         {user?.role === "admin" && <AdminHomePage />}
         {user?.role === "supplier" && <SupplierHomePage />}
         {user?.role === "user" && <UserDashboardPage />}
      </div>
   );
}
