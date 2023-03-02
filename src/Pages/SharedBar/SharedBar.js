import React from 'react';

const SharedBar = ({pageName}) => {
    return (
        <div className='w-full shadow-md h-16 m-0 p-0'>
            <h2> {pageName}</h2>
        </div>
    );
};

export default SharedBar;