import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ProfileNavigation = () => {
    const { user } = useSelector(state => state?.auth);

    let activeClassName = "underline  text-purple-400 bg-slate-100 rounded-lg duration-500";

    return (
        <div className='border py-3 px-3 shadow-lg shadow-slate-100 fixed w-full  bg-slate-50'>
            <NavLink className="pr-4 text-base">{user?.fullName}</NavLink>


            <NavLink to='/profile' className="pr-4">

                {({ isActive }) => (
                    <span
                        className={
                            `${isActive && 'text-emerald-500'}  underline-offset-8 text-sm p-2 duration-500`
                        }
                    >
                        Profile
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
                        Password
                    </span>
                )}
            </NavLink>
           
        </div>
    );
};

export default ProfileNavigation;