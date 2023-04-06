import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';
import { useGetApplyForSupplierQuery } from '../../../Redux/Features/User/userApi';

import { toast } from 'react-hot-toast';
const QuoteTableAdmin = ({ data, handleUpdateStatus, handleDeliveryDate }) => {
    const [updateQuote, { isLoading, isError, isSuccess, error }] = useUpdateMySingleQuotesMutation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: getSupplier } = useGetApplyForSupplierQuery();
    const { user } = useSelector(state => state.auth);


    const handleDateChange = (date, id) => {
        handleDeliveryDate(date, id)
    }

    const handleStatusChange = (status) => {
        handleUpdateStatus(data?._id, status)

    }

    const onSubmitToSupplier = async (sup) => {
        const configure = { sendToSupplier: 'sended', supplier: sup.supplierId };
        await updateQuote({ id: data?._id, configure })
    };


    useEffect(() => {
        if (isLoading) {
            toast.loading("Loading...", { id: "quote" })
        }
        if (isError) {
            toast.error(error, { id: "quote" })
        }
        if (isSuccess) {
            toast.success('Success', { id: "quote" })
        }

    }, [isLoading, isError, error, isSuccess]);
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {data?.material}
            </th>
            <td className="px-6 py-4">
                {data?.type}
            </td>

            <td className="px-6 py-4">
                {data?.orientation}
            </td>

            <td className="px-6 py-4">
                {data?.finish}
            </td>
            <td className="px-6 py-4">
                {data?.resolution}
            </td>
            <td className="px-6 py-4">
                {data?.quantity}
            </td>
            <td className="px-6 py-4">
                ${data?.price || "N/A"}
            </td>
            <td className="px-6 py-4 text-center">

                <input type="date" disabled={user?.role !== "supplier"} onChange={(e) => handleDateChange(e.target.value, data?._id)} defaultValue={data?.deliveryDate} name="" id="" />
            </td>



            <td className="px-6 py-4 text-center">
                {data?.sendToSupplier === 'sended' ?
                    <div>
                        <p className=' text-xs'>Already sended with <br />{data?.supplier?.fullName} <br />
                            <a href={`mailto:${data?.supplier?.email}`}>{data?.supplier?.email}</a></p>
                    </div> :


                    <form onSubmit={handleSubmit(onSubmitToSupplier)}>

                        <select {...register("supplierId", { required: true })}
                            className={`
                py-1 px-5 rounded-full  font-bold `}
                        >

                            <option value=''>

                                No select

                            </option>
                            {
                                getSupplier?.result?.supplier?.filter(sup => sup?.role === 'supplier')?.map((data, i) =>

                                    <option key={i} value={data?._id}>{data?.email}</option>

                                )
                            }
                        </select> <br />
                        {errors.supplierId && <span className=' text-xs text-red-500'>This field is required</span>}
                        <br />
                        <button type='submit' className='px-2 py-1 rounded-full text-white bg-gradient-to-r active:bg-gradient-to-l from-sky-600 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full'>Send</button>
                    </form>}

            </td>

            <td className="px-6 py-4 text-right">
                <select defaultValue={data?.status} onChange={(e) => handleStatusChange(e.target.value)}
                    className={`
                ${data?.status === "pending" && "bg-yellow-400 "}
                ${data?.status === "approved" && "bg-green-400 "}
                ${data?.status === "rejected" && "bg-red-400 "}
                
                py-1 px-5 rounded-full text-white  font-bold `}
                >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                </select>
            </td>
        </tr>
    );
};

export default QuoteTableAdmin;