import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineChevronDown } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { RiFolderUserLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Features/User/AuthSlice";
import { adminMenus, supplierMenus, userMenus } from "./DashboardSidebarNavigation";

export default function DashboardSidebar() {


    const [open, setOpen] = useState(true);
    const [dropdown, setDropdown] = useState(false);
    const dispatch = useDispatch();

    const { user } = useSelector(state => state?.auth)

    const role = user?.role;

   

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        dispatch(logout())
    }

    return (

        <section className={`bg-[#0e0e0e] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}>
            <div className="py-3 flex justify-end">
                <HiMenuAlt3
                    size={26}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>
            {/* ------------------------------------------------- */}

            <button
                onClick={() => setDropdown(!dropdown)}
                type='button'
                className={`w-full   group flex items-center text-sm  rounded-b-none gap-3.5 font-medium p-2 hover:bg-gray-700 rounded-md ${dropdown && 'bg-slate-800'}`}
            >
                <div><FaUserCircle size={20} /></div>
                <h2
                    style={{ transitionDelay: `${1}00ms`, }}
                    className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                    {user?.fullName ? user?.fullName : 'User'}
                </h2>
                <h2
                    className={`${open && "hidden"
                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                    {user?.fullName ? user?.fullName : 'User'}
                </h2>
                <HiOutlineChevronDown className={`${dropdown && 'rotate-180 duration-1000'} duration-1000`} />
            </button>


            {
                <div className={`${!dropdown && 'hidden '}  bg-slate-800 rounded-b-lg`}>
                    <Link
                        to='/profile'

                        className={` w-full  group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-700 rounded-md`}
                    >
                        <div><RiFolderUserLine size={20} /></div>
                        <h2
                            style={{ transitionDelay: `${3}00ms`, }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                            Profile
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                            Profile
                        </h2>
                    </Link>


                    <button
                        onClick={handleLogout}

                        className={`w-full   group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-700 rounded-md`}
                    >
                        <div><FiLogOut size={20} /></div>
                        <h2
                            style={{ transitionDelay: `${4}00ms`, }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                            Logout
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}>
                            Logout
                        </h2>
                    </button>
                </div>
            }

            {/* ------------------------------------------------------------------------------------------------------------ */}

            <div className="mt-4 flex flex-col gap-4 relative ">
                {role === "user" && userMenus?.map((menu, i) => (
                    <Link
                        to={menu?.link}
                        key={i}

                        className={` ${menu?.margin && "mt-5"} flex  group  items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${menu?.role === 'supplier' && 'block'}`}
                    >
                        <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                        <h2
                            style={{ transitionDelay: `${i + 3}00ms`, }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                            {menu?.name}
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1  group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                            {menu?.name}
                        </h2>
                    </Link>
                ))}
                {role === "admin" && adminMenus?.map((menu, i) => (
                    <Link
                        to={menu?.link}
                        key={i}

                        className={` ${menu?.margin && "mt-5"} flex  group  items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${menu?.role === 'supplier' && 'block'}`}
                    >
                        <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                        <h2
                            style={{ transitionDelay: `${i + 3}00ms`, }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                            {menu?.name}
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1  group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                            {menu?.name}
                        </h2>
                    </Link>
                ))}
                {role === "supplier" && supplierMenus?.map((menu, i) => (
                    <Link
                        to={menu?.link}
                        key={i}

                        className={` ${menu?.margin && "mt-5"} flex  group  items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${menu?.role === 'supplier' && 'block'}`}
                    >
                        <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                        <h2
                            style={{ transitionDelay: `${i + 3}00ms`, }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                            {menu?.name}
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1  group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                            {menu?.name}
                        </h2>
                    </Link>
                ))}


            </div>
        </section>


    );
};



