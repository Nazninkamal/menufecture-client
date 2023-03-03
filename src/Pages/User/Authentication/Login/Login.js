import React, { useEffect, useState } from 'react';
import { DisableButton } from '../../../../Components/Buttons/DisableButton';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setSetPassword] = useState('');
    const [isDisable, setIsDisable] = useState(true);






    useEffect(() => {
        if (email && password) {
            setIsDisable(false)
        } else {
            setIsDisable(true)
        }
    }, [email, password]);



    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setSetPassword(e.target.value);




    return (
        <React.Fragment>
            <h1 className="text-3xl font-semibold text-center text-gray-800 uppercase">
                Login
            </h1>

            <p className="text-center text-gray-800">We need some basic info about you. <span className="text-blue-500">Learn why we ask.</span> </p>
            <form className="mt-6">

                <div className="mb-2">
                    <label
                     
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        required
                        onChange={emailChange}
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                     
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        onChange={passwordChange}
                        required
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>


                <div
                    className="mt-6">
                    {isDisable ? <DisableButton>
                        Login
                    </DisableButton>
                        :
                        <button
                            className="flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md focus:ring-2 focus:ring-offset-1 focus:from-cyan-500  ">
                            Login
                        </button>}
                </div>
            </form>


        </React.Fragment>
    );
};

export default Login;