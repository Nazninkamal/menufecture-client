import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,useLocation } from "react-router-dom";
import { login } from '../../../../Redux/Features/User/AuthSlice';
import { toast } from 'react-hot-toast';

const SignupSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),


});

const Login = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });


    const dispatch = useDispatch();
    const user = useSelector(state => state?.auth)


    const navigate = useNavigate();
    const location = useLocation();




    const onSubmit = (data) => {
        dispatch(login(data))
            .then(res => {
                if (res?.payload?.data?.result?.token) {
                    localStorage.setItem("token", res?.payload?.data?.result?.token);
                    localStorage.setItem("user", JSON.stringify(res?.payload?.data?.result?.user));
                    reset();
                    // navigate('/')
                    navigate(location?.state?.from || '/')
                }
                
            })

    }


    // error handling ------------------
    useEffect(() => {
        if (user.isLoading) {
            toast.loading("Loading...", { id: "login" })
        }
        if (user.isError) {
            toast.error('Wrong Password ,please try again!', { id: "login" })
        }
        if (user?.user?.email) {
            toast.success("Login Success", { id: "login" })
        }
    }, [user.isLoading, user.isError, user?.user?.email, user.error])



    return (
        <React.Fragment>
            <h1 className="text-3xl font-semibold text-center text-gray-800 uppercase">
                Login
            </h1>

            <p className="text-center text-gray-800">We need some basic info about you. <span className="text-blue-500">Learn why we ask.</span> </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6" >

                <div className="mb-2">
                    <label

                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        required
                        type="email"
                        {...register("email")}
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
                        required
                        type="password"
                        {...register("password")}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <p className="text-red-500">{errors.password?.message}</p>
                </div>


                <div
                    className="mt-6">
                    <button
                        type='submit'
                        className="flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 active:from-cyan-500  ">
                        Login
                    </button>
                </div>
            </form>


        </React.Fragment>
    );
};

export default Login;