import React from 'react';

const LoadingPage = () => {
    return (
        <div className=' h-screen flex justify-center items-center bg-cyan-100'>
            <div className='text-center'>
                <h1 className=' text-emerald-500 font-serif font-extrabold text-xl'>Welcome to Manufacturing site</h1>
                <h4 className='text-yellow-400  font-extrabold text-lg font-mono'>Loading...</h4>
            </div>
        </div>
    );
};

export default LoadingPage;