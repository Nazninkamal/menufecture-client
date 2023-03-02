import React from 'react';

const Card = ({children}) => {
    return (
        <div className="max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 ">
            {children}
        </div>
    );
};

export default Card;