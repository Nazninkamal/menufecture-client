import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

export const userMenus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard, role: 'user' },
    { name: "Project", link: "/projects", icon: TbReportAnalytics, role: 'user' },


];
export const adminMenus = [

    { name: "Admin Dashboard", link: "/adminDashboard", icon: MdOutlineDashboard, role: 'admin' },
    { name: "Supplier Request", link: "/supplierRequest", icon: TbReportAnalytics, role: 'admin' },

];
export const supplierMenus = [
    { name: "Supplier Dashboard", link: "/supplierDashboard", icon: MdOutlineDashboard, role: 'supplier' },
    { name: "Quote Request", link: "/quoteRequest", icon: TbReportAnalytics, role: 'supplier' },
    { name: "All Order", link: "/allOrder", icon: TbReportAnalytics, role: 'supplier' },


];





