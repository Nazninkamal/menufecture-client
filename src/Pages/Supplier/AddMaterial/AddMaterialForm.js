import { useEffect, useState } from 'react'
import { Combobox } from '@headlessui/react'
import { useForm } from "react-hook-form";
import Modal2 from '../../../Components/Modal/Modal2';
import { useCreateMaterialsMutation } from '../../../Redux/Features/Material/matarialAPI';
import { toast } from 'react-hot-toast';





const AddMaterialForm = () => {
    let [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [createMaterial, { isLoading, isSuccess, isError, error }] = useCreateMaterialsMutation();

    const onSubmit = data => {
        const material = {
            material: data.material,

            resolution: [
                {
                    title: "High Res",
                    price: data.highResPrice
                },
                {
                    title: "Normal Res",
                    price: data.normalResPrice
                }
            ]
            ,
            finish: [
                {
                    title: data.finish,
                }
            ],
            orientation: [
                {
                    title: data.orientation,
                }
            ]

        }

        createMaterial({ material });


    };


    useEffect(() => {
        if (isLoading) {
            toast.loading("Loading...", { id: "material" })
        }
        if (isError) {
            toast.error(error, { id: "material" })
        }
        if (isSuccess) {
            toast.success('Post is Success', { id: "material" })
            setIsOpen(false)
        }

    }, [isLoading, isError, error, isSuccess]);


    return (
        <>

            <Modal2 setIsOpen={setIsOpen} isOpen={isOpen}>
                {/* --------------------------------------------------------------------------------- */}
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    <div className=" ">
                        <div className='col-span-6'>
                            <span className=' text-xs' >Material Name</span>
                            <Combobox >
                                <div className="relative mt-1">
                                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                        <input
                                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0" placeholder='Material Name'
                                            {...register("material", { required: true })}
                                        />

                                    </div>
                                </div>
                            </Combobox>
                            {errors.material && <span className='text-xs text-red-500'>Material field is required</span>}
                        </div>



                    </div>
                    {/* --------------------------------------------------------------------- */}


                    <div className=''>
                        <div className=' '>
                            {/* --------------------------------------------------------------------- */}
                            <div className=" ">
                                <span className=' text-xs' >High Res (Price)</span>
                                <Combobox >
                                    <div className=" mt-1">
                                        <div className=" w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">                                <input
                                            as='input'
                                            type="number"
                                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0" placeholder='Price'
                                            {...register("highResPrice", { required: true })}
                                        />

                                        </div>
                                    </div>
                                </Combobox>
                                {errors.highResPrice && <span className='text-xs text-red-500'>High ResPrice field is required</span>}
                            </div>
                            {/* --------------------------------------------------------------------- */}
                            <div className="">
                                <span className=' text-xs' >Normal res (Price)</span>
                                <Combobox >
                                    <div className=" mt-1">
                                        <div className=" w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">                                <input
                                            as='input'
                                            type="number"
                                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0" placeholder='Price'
                                            {...register("normalResPrice", { required: true })}
                                        />

                                        </div>
                                    </div>
                                </Combobox>
                                {errors.normalResPrice && <span className='text-xs text-red-500'>Normal ResPrice field is required</span>}
                            </div>
                        </div>
                    </div>

                    <div className=' '>
                        {/* ---------------------------------------------------------------------------- */}
                        <div className=" ">
                            <span className=' text-xs' >finish</span>
                            <Combobox >
                                <div className=" w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                    <select  {...register("finish", { required: true })}
                                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                    >
                                        <option value="">No Selected</option>
                                        <option value="Standard">Standard</option>
                                    </select>
                                </div>
                            </Combobox>
                            {errors.finish && <span className='text-xs text-red-500'>finish  field is required</span>}
                        </div>


                        {/* ------------------------------------------------------ ---------------------*/}
                        <div className="  ">
                            <span className=' text-xs' >Orientation</span>
                            <Combobox >
                                <div className=" w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                    <select   {...register("orientation", { required: true })}
                                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                    >
                                        <option value="">No Selected</option>
                                        <option value="Let Us Decide">Let Us Decide</option>
                                    </select>
                                </div>
                            </Combobox>
                            {errors.orientation && <span className='text-xs text-red-500'>Orientation  field is required</span>}
                        </div>
                    </div>
                    <div className=' flex justify-end'>
                        <button type='submit' className='flex items-center justify-center  w-full md:w-60 text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r active:bg-gradient-to-l from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 text-sm  mt-5'>Submit</button>
                    </div>

                </form>


            </Modal2>

        </>
    );
};

export default AddMaterialForm;