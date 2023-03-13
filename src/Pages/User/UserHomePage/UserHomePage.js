import React from 'react';
import Cards from './Cards';
import Table from './Table';
import Services from './Services';


const UserHomePage = () => {
    return (
        <div className='mt-5'>
            <Cards/>
            <div className='grid grid-cols-2 gap-5 mt-10'>
             <Table/>
             <Services/>
            </div>
            
        </div>
    );
};

export default UserHomePage;