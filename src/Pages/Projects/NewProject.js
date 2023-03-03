import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewProject = () => {
    const history = useNavigate();

    const handleRedirectToCreateQuote = () => {
        history('/quotes/123456')

    }
    return (


        <div className=' flex  justify-center  items-center h-screen'>
            <div>
                <div className=' text-center'>
                    <h1 className=' pb-8 font-serif font-light uppercase  text-gray-500'>Name you projects</h1>
                </div>
                <div className="relative  w-115">
                    <input type="text" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Floating filled</label>
                </div>

                <p className=' mt-5 text-center text-xs text-gray-500 mb-2'>Examples: Insulin Pump, Quadcopter, Fixture</p>

                <div className=' text-center'>
                    <button

                        onClick={handleRedirectToCreateQuote}

                        className=' py-3 px-6 w-44 rounded-lg text-slate-50 text-sm bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 '>Continue</button>
                </div>
            </div>
        </div>


    );
};

export default NewProject;