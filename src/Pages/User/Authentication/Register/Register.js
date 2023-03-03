import React, { useEffect, useState } from 'react';
import { DisableButton } from '../../../../Components/Buttons/DisableButton';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setSetUserName] = useState('');
    const [password, setSetPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const [isDisable, setIsDisable] = useState(true);





    // validation-----------------------------------
    useEffect(() => {
        if (name && email && userName && password && rePassword) {
            if (password === rePassword) {

                setIsDisable(false)
            } else {
                setIsDisable(true)
                
            }
        } else {
            setIsDisable(true)
        }
    }, [name, userName, email, password, rePassword]);


    // handle change value  
    const nameChange = (e) => setName(e.target.value);
    const userNameChange = (e) => setSetUserName(e.target.value);
    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setSetPassword(e.target.value);
    const rePasswordChange = (e) => setRePassword(e.target.value);

    return (
        <React.Fragment>

            <h1 className="text-3xl font-semibold text-center text-gray-800 uppercase">
                Sign Up
            </h1>
            <p className="text-center text-gray-800">We need some basic info about you. <span className="text-blue-500">Learn why we ask.</span> </p>
            <form className="mt-6">
                <div className="mb-2">
                    <label
                   
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Name
                    </label>
                    <input
                        onChange={nameChange}
                        type="name"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                     
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Username
                    </label>
                    <input
                        onChange={userNameChange}
                        type="username"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label

                        
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
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
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                     
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Confirm Password
                    </label>
                    <input
                        onChange={rePasswordChange}
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="mt-6">
                    {
                        isDisable ? <DisableButton>
                            Register
                        </DisableButton> :
                            <button className="flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md focus:ring-2 focus:ring-offset-1 focus:from-cyan-500">
                                Register
                            </button>}
                </div>
            </form>


        </React.Fragment>

    );
};

export default Register;