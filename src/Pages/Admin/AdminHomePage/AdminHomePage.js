import React from 'react';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import AdminCard from './AdminCard';
import UserSupplierInfo from './UserSupplierInfo';

const AdminHomePage = () => {
    return (
    <>
             <SharedBar pageName={"Admin Dashboard"} />
  
       <div className='h-screen overflow-y-auto my-5'>
            <AdminCard/>
            <UserSupplierInfo />
        </div>
        </>
    );
};

export default AdminHomePage;