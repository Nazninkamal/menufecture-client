import React from 'react';

const SharedBar = ({pageName}) => {
    return (
        <div className='shadow h-16 flex justify-start items-center pl-10 w-full'>
            <h2 className=' '> {pageName}</h2>
        </div>
    );
};
export default SharedBar;

