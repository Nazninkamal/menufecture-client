import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
const BackButton = () => {
    return (

        <div className='text-right  absolute right-0'>
            <button
                onClick={() => window.history.back()}
                className=' text-red-400   font-extrabold rounded-full p-2 '>
                <AiOutlineClose size={30} />
            </button>
        </div>

    );
};

export default BackButton;