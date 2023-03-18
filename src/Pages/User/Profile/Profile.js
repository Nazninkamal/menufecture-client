import React from 'react';
import ProfileNavigation from './ProfileNavigation';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div className=' h-screen overflow-y-auto'>
            <ProfileNavigation />
            <Outlet />
        </div>
    );
};

export default Profile;