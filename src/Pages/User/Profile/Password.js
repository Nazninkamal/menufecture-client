import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useChangePasswordMutation } from '../../../Redux/Features/User/userApi';



const SignupSchema = yup.object().shape({
    oldPassword: yup.string().required("Old password is a required field*"),
    newPassword: yup.string().required("New is a required field*"),
    confirmPassword: yup.string().required("Confirm Password is a required field*"),

});


const Password = () => {

    const {
        register,
        handleSubmit,
        setError,
        reset,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });


    const [changePass, { isSuccess, error }] = useChangePasswordMutation()

    const [pass1, pass2] = watch(['newPassword', 'confirmPassword'])

    console.log(error);

    useEffect(() => {
        if (pass1 !== pass2) {
            return setError('confirmPassword',
                { type: 'custom', message: 'Confirm Password not exist!' });
        }
    }, [pass1, pass2, setError])

    useEffect(() => {
        if (isSuccess) {

            reset();
            alert("Password is change successfully");
        }
    }, [isSuccess, reset])



    const onSubmit = (data) => {

        changePass(data);

    };





    return (
        <div className=' flex justify-center items-center  h-screen'>
            <div className='w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl '>

                <h1 className="text-3xl font-semibold text-center text-gray-800 uppercase">
                    Change Password
                </h1>

                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>





                    <div className="mb-2">
                        <label


                            className="block text-sm font-semibold text-gray-800"
                        >
                            Old Password*
                        </label>
                        <input
                            {...register("oldPassword")}

                            type="password"
                            placeholder='Old Password*'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                        />
                        <p className="text-red-500 text-sm">{errors.oldPassword?.message}</p>
                    </div>
                    <div className="mb-2">
                        <label


                            className="block text-sm font-semibold text-gray-800"
                        >
                            New Password*
                        </label>
                        <input
                            {...register("newPassword")}

                            type="password"
                            placeholder='New Password*'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                        />
                        <p className="text-red-500 text-sm">{errors.newPassword?.message}</p>
                    </div>
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Confirm Password*
                        </label>
                        <input
                            {...register("confirmPassword")}

                            type="password"
                            placeholder='Confirm Password*'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                        />
                        <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
                    </div>

                    <div className="mt-6">
                        <button
                            type='submit'
                            className="flex items-center justify-center text-sm w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 active:from-cyan-500">
                            Change Password
                        </button>


                    </div>
                </form>


            </div>

        </div>
    );
};



export default Password;