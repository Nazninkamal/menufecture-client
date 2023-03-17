import { MdOutlineDashboard, MdAddShoppingCart } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { SiMaterialdesignicons } from "react-icons/si";

export const userMenus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Project", link: "/projects", icon: TbReportAnalytics },
    { name: "My Order", link: "/quotes/my-oder", icon: MdAddShoppingCart },


];
export const adminMenus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Supplier Request", link: "/supplierRequest", icon: TbReportAnalytics },

];
export const supplierMenus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Quote Request", link: "/quoteRequest", icon: TbReportAnalytics },
    { name: "All Order", link: "/allOrder", icon: TbReportAnalytics },
    { name: "Add Material", link: "/addMaterial", icon: SiMaterialdesignicons },


];





