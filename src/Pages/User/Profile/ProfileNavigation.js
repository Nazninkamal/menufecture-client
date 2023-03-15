import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ProfileNavigation = () => {
    const { user } = useSelector(state => state?.auth);

    let activeClassName = "  text-purple-400 bg-slate-100 rounded-lg duration-500";

    return (
        <div className='border py-3 px-3 shadow-lg shadow-slate-100 fixed w-full  bg-slate-50'>
            <NavLink to="/profile" className="pr-4 text-base">{user?.fullName}</NavLink>


            <NavLink to='/profile' className="pr-4">

                {({ isActive }) => (
                    <span
                        className={
                            `${isActive && 'text-emerald-600'}  underline-offset-8 text-sm p-2 duration-500 bg-green-100 rounded-lg`
                        }
                    >
                        Profile Details
                    </span>
                )}
            </NavLink>


            <NavLink to='/profile/details/update' className="pr-4">

                {({ isActive }) => (
                    <span
                        className={
                            `${isActive && activeClassName} text-sm p-2 duration-500`
                        }
                    >
                        Update Details
                    </span>
                )}
            </NavLink>
            <NavLink to='/profile/password' className="pr-4">

                {({ isActive }) => (
                    <span
                        className={
                            `${isActive && activeClassName} text-sm p-2 duration-500`
                        }
                    >
                        Password Change
                    </span>
                )}
            </NavLink>
            {user?.role === "user" && <NavLink to='/profile/applyForSupplier' className="pr-4">

                {({ isActive }) => (
                    <span
                        className={
                            `${isActive && activeClassName} text-sm p-2 duration-500`
                        }
                    >
                        Apply For Supplier
                    </span>
                )}
            </NavLink>}

        </div>
    );
};

export default ProfileNavigation;