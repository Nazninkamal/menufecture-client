import React from 'react';

const ServicesCard = ({children}) => {
    return (
        <div className='border-2 h-60 w-60 flex justify-around items-center duration-500 hover:border-blue-500 rounded-xl hover:duration-500 hover:translate-x-1 hover:translate-y-1  cursor-pointer'>
            {children}
        </div>
    );
};

export default ServicesCard;