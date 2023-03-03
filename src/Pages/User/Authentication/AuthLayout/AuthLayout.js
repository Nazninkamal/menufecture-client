import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';

const AuthLayout = () => {
    const [isToggle, setIsToggle] = useState(false);


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                {!isToggle ? <Login /> :
                    <Register />}

                <p className="mt-8 text-xs font-light text-center text-gray-800 flex justify-center items-center gap-3">

                    {
                        !isToggle ? " Already Have An Account? Please Login" :
                            " No Have An Account? Please Register"
                    }
                    <label
                        className="relative inline-flex items-center mr-5 cursor-pointer">
                        <input

                            onClick={() => setIsToggle(!isToggle)}
                            type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>

                    </label>
                </p>
            </div>
        </div>
    );
};

export default AuthLayout;