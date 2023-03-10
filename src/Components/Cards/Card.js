import React from 'react';

const Card = ({ children }) => {
    return (
        <div className="  bg-white border   rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-500  hover:border-indigo-500  hover:translate-x-1 hover:translate-y-1  hover:scale-y-110   hover:duration-500">
            {children}
        </div>
    );
};

export default Card;