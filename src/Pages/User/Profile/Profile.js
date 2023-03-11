import React from 'react';
import ProfileNavigation from './ProfileNavigation';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <ProfileNavigation />
            <Outlet />
        </div>
    );
};

export default Profile;