import React from 'react';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import Table from '../../User/UserHomePage/Table';
import SupplierCards from './SupplierCards';

const SupplierHomePage = () => {
    return (
        <div className=' h-screen overflow-y-auto'>
          <SharedBar pageName={"Supplier Dashboard"} />
         <div className='my-5'>
         <SupplierCards/>
         <Table/>
         </div>
        </div>
    );
};

export default SupplierHomePage;