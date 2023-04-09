import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registration } from '../../../../Redux/Features/User/AuthSlice';
import { useDispatch, useSelector } from 'react-redux'
import { countryListAllIsoData } from '../../../../Utility/CountryList/CountryList';
import { languages_list } from '../../../../Utility/CountryList/Languagelist';
import { toast } from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';



const SignupSchema = yup.object().shape({
    fullName: yup.string().required('Name is a required field'),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    company: yup.string().required(),
    country: yup.string().required('Phone Number is a required field'),
    phoneNumber: yup.string().required(),
    postalCode: yup.string().required('Postal Code is a required field'),
    language: yup.string().required(),
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
    const user = useSelector(state => state?.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();


    const [pass1, pass2] = watch(['password', 'confirmPassword'])



    useEffect(() => {
        if (pass1 !== pass2) {
            return setError('confirmPassword',
                { type: 'custom', message: 'Confirm Password not exist!' });
        }
    }, [pass1, pass2, setError])


    const onSubmit = (data) => {


        dispatch(registration(data))
            .then(res => {
                if (res.payload.status === 200) {
                    toast.success(res.payload.data.message, { id: "register" })
                    reset();
                    navigate(location?.state?.from || '/login');
                }
                else {
                    toast.error(user.error, { id: "register" })
                }
            })

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

                        {...register("fullName")}
                        type="name"
                        placeholder='Your full Name'
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
                        placeholder='Your Email'
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <p className="text-red-500">{errors.email?.message}</p>
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
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                        <option value=""
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        >No select country</option>
                        {countryListAllIsoData?.map((country, index) => <option key={index} value={country?.name}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        >{country?.name}</option>

                        )}


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
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                        {languages_list?.map((country, index) => <option key={index} value={country?.name}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        >{country?.name}</option>

                        )}



                    </select>
                    <p className="text-red-500 text-sm">{errors.language?.message}</p>
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
                        placeholder='Password'
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
                        placeholder='Confirm Password'
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