import React from 'react';
import Cards from './Cards';
import Services from './Services';
import SharedBar from '../../../Components/SharedBar/SharedBar';


const UserDashboardPage = () => {
    return (
        <div className=' h-screen overflow-y-auto'>
            <SharedBar pageName={"User Dashboard"} />
              <div className='my-5'>
                <Cards />
               
                
                    <Services />
                
            </div>

        </div>
    );
};

export default UserDashboardPage;