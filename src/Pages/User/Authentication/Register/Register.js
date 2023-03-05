import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registration } from '../../../../Redux/Features/User/AuthSlice';
import { useDispatch, useSelector } from 'react-redux'



const SignupSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),

});


const Register = () => {

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

    const dispatch = useDispatch();
    const { isSuccess } = useSelector(state => state.auth)

    const [pass1, pass2] = watch(['password', 'confirmPassword'])



    useEffect(() => {
        if (pass1 !== pass2) {
            return setError('confirmPassword',
                { type: 'custom', message: 'Confirm Password not exist!' });
        }
    }, [pass1, pass2, setError])

    useEffect(() => {
        if (isSuccess) {
            reset()
        }
    }, [isSuccess, reset])



    const onSubmit = async ({ password, confirmPassword, fullName, email }) => {
        const newData = { fullName, email, password }


        dispatch(registration(newData))


    };





    return (
        <React.Fragment>

            <h1 className="text-3xl font-semibold text-center text-gray-800 uppercase">
                Sign Up
            </h1>
            <p className="text-center text-gray-800">We need some basic info about you. <span className="text-blue-500">Learn why we ask.</span> </p>
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <label

                        className="block text-sm font-semibold text-gray-800"
                    >
                        Name
                    </label>
                    <input
                        // onChange={nameChange}
                        {...register("fullName")}
                        type="name"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <p className="text-red-500">{errors.fullName?.message}</p>
                </div>

                <div className="mb-2">
                    <label


                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input

                        {...register("email")}
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <p className="text-red-500">{errors.email?.message}</p>
                </div>
                <div className="mb-2">
                    <label


                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        {...register("password")}

                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <p className="text-red-500">{errors.password?.message}</p>
                </div>
                <div className="mb-2">
                    <label

                        className="block text-sm font-semibold text-gray-800"
                    >
                        Confirm Password
                    </label>
                    <input
                        {...register("confirmPassword")}

                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <p className="text-red-500">{errors.confirmPassword?.message}</p>
                </div>

                <div className="mt-6">
                    <button
                        type='submit'
                        className="flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 active:from-cyan-500">
                        Register
                    </button>


                </div>
            </form>


        </React.Fragment>

    );
};



export default Register;