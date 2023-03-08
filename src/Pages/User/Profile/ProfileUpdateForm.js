import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from 'react-redux';



const SignupSchema = yup.object().shape({
    fullName: yup.string().required('Name is a required field'),
    email: yup.string().required(),
    company: yup.string().required(),
    country: yup.string().required(),
    phoneNumber: yup.string().required('Phone Number is a required field'),
    postalCode: yup.string().required('Postal Code is a required field'),
    language: yup.string().required(),

});
const ProfileUpdateForm = () => {
    const [isUpdate, setIsUpdate] = useState(true);
    const { user } = useSelector(state => state?.auth)
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema),

    });


    useEffect(() => {
        reset(user)
    }, [reset, user])

    const onSubmit = async (data) => {
        console.log(watch);
    };


    return (
        <div className=' flex justify-center items-center  h-screen '>
            <div className='w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl '>
                <div className=' '>

                    <div className=' flex justify-between'>
                        <h1 className="text-base font-semibold text-gray-800 uppercase">
                            Profile Details
                        </h1>
                        <button onClick={() => setIsUpdate(!isUpdate)} className='active:border px-2 rounded-full text-sm'>Edit</button>
                    </div>
                
                    <form className='pt-6' onSubmit={handleSubmit(onSubmit)} >
                        <div className={`mb-2  `}>
                            <label

                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                // onChange={nameChange}
                                {...register("fullName", { maxLength: 5 })}
                                disabled={isUpdate && !watch("input-a")}
                                type="name"
                                placeholder='Full Name'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm "
                            />
                            <p className="text-red-500  text-sm">{errors.fullName?.message}</p>
                        </div>

                        <div className="mb-2">
                            <label


                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                disabled
                                {...register("email")}
                                type="email"
                                placeholder='Email'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 select-none text-sm "
                            />
                            <p className="text-red-500 text-sm">{errors.email?.message}</p>
                        </div>
                        <div className="mb-2">
                            <label


                                className="block text-sm font-semibold text-gray-800"
                            >
                                Company
                            </label>
                            <input
                                {...register("company")}
                                disabled={isUpdate && !watch("input-a")}
                                type="text"
                                placeholder='Your Company'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                            />
                            <p className="text-red-500 text-sm">{errors.company?.message}</p>
                        </div>
                        <div className="mb-2">
                            <label

                                className="block text-sm font-semibold text-gray-800"
                            >
                                Country
                            </label>
                            <select  {...register("country")}
                                disabled={isUpdate && !watch("input-a")}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm">
                                <option value=""
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                                >No select country</option>
                                <option value="Bangladesh"
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                >Bangladesh</option>
                                <option value="India"
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                >India</option>
                                <option value="Pakishtan"
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                >Pakishtan</option>
                            </select>
                            <p className="text-red-500 text-sm">{errors.country?.message}</p>
                        </div>
                        <div className="mb-2">
                            <label

                                className="block text-sm font-semibold text-gray-800"
                            >
                                Phone Number
                            </label>
                            <input
                                {...register("phoneNumber")}
                                disabled={isUpdate && !watch("input-a")}
                                type="text"
                                placeholder='Phone Number'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                            />
                            <p className="text-red-500 text-sm">{errors.phoneNumber?.message}</p>
                        </div>

                        <div className="mb-2">
                            <label

                                className="block text-sm font-semibold text-gray-800"
                            >
                                Postal Code
                            </label>
                            <input
                                {...register("postalCode")}
                                disabled={isUpdate && !watch("input-a")}
                                type="text"
                                placeholder='Postal Code'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                            />
                            <p className="text-red-500 text-sm">{errors.postalCode?.message}</p>
                        </div>


                        <div className="mb-2">
                            <label

                                className="block text-sm font-semibold text-gray-800"
                            >
                                Language
                            </label>
                            <select  {...register("language")}
                                disabled={isUpdate && !watch("input-a")}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm">
                                <option value=""
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                >No select language</option>
                                <option value="Bangla"
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                >Bangla</option>
                                <option value="Hindi"
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                >Hindi</option>
                                <option value="Urdu"
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                >Urdu</option>
                            </select>
                            <p className="text-red-500 text-sm">{errors.language?.message}</p>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                type='submit'
                                disabled={isUpdate}
                                className={`flex text-xs items-center justify-center   rounded-md  bg-gray-200 font-extrabold latter tracking-wider p-2 border ${!isUpdate && ' text-slate-50 bg-gradient-to-r  from-cyan-500 to-blue-500 active:ring-2 active:ring-offset-1 active:from-blue-500 active:to-cyan-500 active:bg-gradient-to-r'} ${isUpdate && ' text-slate-500'}`}>
                                Update  Profile
                            </button>


                        </div>
                    </form>


                </div>
            </div>
        </div>

    );
};

export default ProfileUpdateForm;