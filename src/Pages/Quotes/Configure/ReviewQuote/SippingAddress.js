import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import Modal from '../../../../Components/Modal/Modal';
import { useChangeProfileDetailsMutation, useGetMeQuery } from '../../../../Redux/Features/User/userApi';

const SippingAddress = ({ isModal, setModal }) => {
    const { register, handleSubmit, reset } = useForm();
    const { data: userData } = useGetMeQuery();
    const [updateProfileDetails, { isSuccess }] = useChangeProfileDetailsMutation();

    const user = userData?.result;
    const onSubmit = ({ phoneNumber, address }) => {
        const data = { phoneNumber, address };
        updateProfileDetails(data)
    };

    useEffect(() => {
        reset({ phoneNumber: user?.phoneNumber, address: user?.address })
    }, [reset, user?.phoneNumber, user?.address]);

    useEffect(() => {
        if (isSuccess) {
            setModal(false)
        }
    }, [isSuccess, setModal]);


    return (


        <Modal
            isModal={isModal}
            setModal={setModal}>

            <div className='w-full p-2 '>

                <h1 className="text-sm font-semibold text-center text-gray-800 uppercase">
                    Add Shipping Details
                </h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-6">
                    <div className="mb-2">
                        <label

                            className="block text-sm font-semibold text-gray-800"
                        >
                            Address*
                        </label>
                        <textarea
                            {...register("address", { required: true })}
                            required
                            type="text"
                            placeholder='Address*'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                        />

                    </div>

                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Phone Number*
                        </label>
                        <input
                            {...register("phoneNumber", { required: true })}
                            required
                            type="tel"
                            placeholder='Phone Number*'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm"
                        />

                    </div>


                    <div className="mt-6">
                        <button
                            type='submit'
                            className="flex items-center justify-center text-sm w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 active:from-cyan-500">
                            Submit
                        </button>


                    </div>
                </form>


            </div>
        </Modal>

    );
};

export default SippingAddress;