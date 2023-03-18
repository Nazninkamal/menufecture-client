import React from 'react';
import Cards from './Cards';
import Table from './Table';
import Services from './Services';
import SharedBar from '../../../Components/SharedBar/SharedBar';


const UserDashboardPage = () => {
    return (
        <div className=' h-screen overflow-y-auto'>
            <SharedBar pageName={"User Dashboard"} />
            <div className='my-5'>
                <Cards />
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10'>
                    <Table />
                    <Services />
                </div>
            </div>

        </div>
    );
};

export default UserDashboardPage;