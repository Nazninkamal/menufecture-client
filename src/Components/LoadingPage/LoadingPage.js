import React from 'react';

const LoadingPage = () => {
    return (
        <div className=' h-screen flex justify-center items-center bg-teal-50'>
            <div className='text-center'>
                <h1 className=' text-emerald-500 font-serif font-extrabold text-xl'>Welcome to Manufacturing site</h1>
                <h4 className='text-yellow-400'>Loading...</h4>
            </div>
        </div>
    );
};

export default LoadingPage;