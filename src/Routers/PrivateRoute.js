import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { Loading } from '../Components/Buttons/LoadingButton';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useSelector(state => state.auth);


    console.log(isLoading);
    let location = useLocation();
    console.log(location);

    if (isLoading) {
        <div className='h-screen
         flex justify-center items-center ' ><Loading /></div>
    }

    else if (!user) {
        return <Navigate to="/login" replace={true} state={{ from: location }} />
    }
    else {
        return children;
    }
    /* if (user) {
        return children;
      } */

    // return <Navigate to="/Login" state={{ from: location }} />;
};

export default PrivateRoute;