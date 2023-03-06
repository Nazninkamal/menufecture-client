
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
// import { FiMessageSquare, FiFolder, FiShoppingCart, FiLogOut } from "react-icons/fi";




export const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "User", link: "/user", icon: AiOutlineUser },
    { name: "Project", link: "/projects", icon: TbReportAnalytics },
    { name: "Feedback", link: "/feedback", icon: TbReportAnalytics },
    // { name: "messages", link: "/", icon: FiMessageSquare },
    // { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    // { name: "File Manager", link: "/", icon: FiFolder },
    // { name: "Cart", link: "/", icon: FiShoppingCart },
    // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    // { name: "Setting", link: "/", icon: RiSettings4Line },

];