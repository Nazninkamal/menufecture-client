import React from 'react';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import Table from '../../User/UserHomePage/Table';
import SupplierCards from './SupplierCards';

const SupplierHomePage = () => {
    return (
        <>
          <SharedBar pageName={"Supplier Dashboard"} />
         <div className='my-5'>
         <SupplierCards/>
         <Table/>
         </div>
        </>
    );
};

export default SupplierHomePage;