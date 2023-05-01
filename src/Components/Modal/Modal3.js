import React from 'react';

const Modal3 = ({ children }) => {

    return (
        <div className="   bg-zinc-200  bg-opacity-75 fixed inset-0 z-50   ">

            <div className="flex h-screen justify-center items-center md:px-60">

                <div className="flex-col justify-center  bg-white   p-10 border-4 border-sky-500 rounded-xl  ">


                    {children}


                </div>
            </div>
        </div>
    );
};

export default Modal3;