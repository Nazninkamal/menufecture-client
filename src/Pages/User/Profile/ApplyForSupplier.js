import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch, useSelector } from 'react-redux'



const SupplierSchema = yup.object().shape({
    fullName: yup.string().required('Name is a required field'),
    email: yup.string().required(),
    websiteLink: yup.string(),
    productMaterial: yup.string().required(),
    company: yup.string().required(),
    country: yup.string().required('Phone Number is a required field'),
    phoneNumber: yup.string().required(),
    postalCode: yup.string().required('Postal Code is a required field'),
    language: yup.string().required(),
    productCategory: yup.string().required(),
});


const ApplyForSupplierFrom = () => {

    const {
        register,
        handleSubmit,
        setError,
        reset,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SupplierSchema)
    });

    const dispatch = useDispatch();

    const { isSuccess } = useSelector(state => state.auth)







    useEffect(() => {
        if (isSuccess) {
            reset()
        }
    }, [isSuccess, reset])



    const onSubmit = (data) => {

        console.log(data);

    };





    return (
        <div className='flex justify-center items-center  h-screen overflow-y-auto py-16'>
            <div className='w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl'>

                <h1 className="text-3xl font-semibold text-center text-gray-800 uppercase">
                    Apply for supplier
                </h1>
                <p className="text-center text-gray-800">We need some basic info about you.  </p>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input

                            {...register("fullName")}
                            type="name"
                            placeholder='Your full Name'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                        />
                        <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
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
                            placeholder='Your Email'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
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
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm">
                            <option value=""

                            >No select country</option>
                            <option value="Bangladesh"

                            >Bangladesh</option>
                            <option value="India"

                            >India</option>
                            <option value="Pakishtan"

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
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm">
                            <option value="Bangla"

                            >Bangla</option>
                            <option value="Hindi"

                            >Hindi</option>
                            <option value="Urdu"

                            >Urdu</option>
                        </select>
                        <p className="text-red-500 text-sm">{errors.language?.message}</p>
                    </div>


                    <div className="mb-2">
                        <label


                            className="block text-sm font-semibold text-gray-800"
                        >
                            Website link
                        </label>
                        <input
                            {...register("websiteLink")}

                            type="text"
                            placeholder='Website link'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                        />
                        <p className="text-red-500">{errors.websiteLink?.message}</p>
                    </div>


                    <div className="mb-2">
                        <label


                            className="block text-sm font-semibold text-gray-800"
                        >
                            Product Category
                        </label>
                        <input
                            {...register("productCategory")}

                            type="text"
                            placeholder='Product Category'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                        />
                        <p className="text-red-500 text-sm">{errors.productCategory?.message}</p>
                    </div>


                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Mention your product material and quality
                        </label>


                        <textarea
                            {...register("productMaterial")}

                            type="password"
                            placeholder={"Mention your product material and quality, why it's better than other's product, and Per piece prices, how much product you can sell per month."}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none h-48  focus:ring focus:ring-opacity-40 text-sm"
                        />

                        <p className="text-red-500 text-sm">{errors.productMaterial?.message}</p>
                    </div>

                    <div className="mt-6">
                        <button
                            type='submit'
                            className="flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 active:from-cyan-500 text-sm ">
                            Apply now
                        </button>


                    </div>
                </form>


            </div>
        </div>

    );
};



export default ApplyForSupplierFrom;