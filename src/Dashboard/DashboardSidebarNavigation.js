import { MdOutlineDashboard, MdAddShoppingCart } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { SiMaterialdesignicons } from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

export const userMenus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Project", link: "/projects", icon: TbReportAnalytics },
    { name: "My Order", link: "/quotes/my-oder", icon: MdAddShoppingCart },
    { name: "Contact Us", link: "/contact", icon: FiMessageSquare, role: 'user' },
    { name: "Feedback", link: "/feedback", icon: AiOutlineHeart, role: 'user' },


];
export const adminMenus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Quote Request", link: "/quoteRequestToAdmin", icon: TbReportAnalytics },
    { name: "Supplier Request", link: "/supplierRequest", icon: TbReportAnalytics },
    { name: "Add Material", link: "/addMaterial", icon: SiMaterialdesignicons },
];
export const supplierMenus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Quote Request", link: "/quoteRequestToSupplier", icon: TbReportAnalytics },
    { name: "All Order", link: "/allOrder", icon: TbReportAnalytics },



];





