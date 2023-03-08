import React from 'react';

const SharedBar = ({pageName}) => {
    return (
        <div className='shadow-md h-16'>
            <h2 className=' text-center'> {pageName}</h2>
        </div>
    );
};

export default SharedBar;
