import React from 'react';
import ProfileUpdateForm from './ProfileUpdateForm';
import Tap from './ProfileNavigation';
import ProfileNavigation from './ProfileNavigation';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <ProfileNavigation />
            {/* <ProfileUpdateForm/> */}
            <Outlet />
        </div>
    );
};

export default Profile;