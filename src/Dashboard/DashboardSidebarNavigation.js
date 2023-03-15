
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
 




export const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard ,role:'user'},
    { name: "Project", link: "/projects", icon: TbReportAnalytics ,role:'user'},
    { name: "Supplier Dashboard", link: "/supplierDashboard", icon: MdOutlineDashboard ,role:'supplier'},
    { name: "Quote Requiest", link: "/quoteRequiest", icon: TbReportAnalytics ,role:'supplier' },
    { name: "All Order", link: "/allOrder", icon: TbReportAnalytics ,role:'supplier'},
    { name: "Admin Dashboard", link: "/adminDashboard", icon: MdOutlineDashboard,role:'admin' },
    { name: "Supplier Requiest", link: "/supplierRequiest", icon: TbReportAnalytics ,role:'admin'  },

];