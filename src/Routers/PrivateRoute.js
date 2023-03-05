import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Loading } from '../Components/Buttons/LoadingButton';

const PrivateRoute = ({ children}) => {
    const { user, isLoading } = useSelector(state => state.auth);
  

    if (isLoading) {
        <div className='h-screen
         flex justify-center items-center ' ><Loading /></div>
    }

    else if (!user) {
        return <Navigate to="/login" replace={true} />
    }
    else {
        return children;
    }


};

export default PrivateRoute;