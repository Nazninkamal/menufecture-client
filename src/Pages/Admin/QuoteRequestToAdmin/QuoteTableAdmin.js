import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';
import { useGetApplyForSupplierQuery } from '../../../Redux/Features/User/userApi';

import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const QuoteTableAdmin = ({ data, handleUpdateStatus }) => {
    const [updateQuote, { isLoading, isError, isSuccess, error }] = useUpdateMySingleQuotesMutation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { register: registerProfit, handleSubmit: handleSubmitProfit } = useForm();
    const { data: getSupplier } = useGetApplyForSupplierQuery();




    const handleStatusChange = (status) => {
        handleUpdateStatus(data?._id, status)

    }

    const onSubmitToSupplier = async (sup) => {
        const configure = { sendToSupplier: 'sended', supplier: sup.supplierId };
        await updateQuote({ id: data?._id, configure })
    };


    const handleAddProfit = async ({ profit }) => {

        const configure = { profit: Number(profit) };
        await updateQuote({ id: data?._id, configure })




    }

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
                <p>{data?.material}</p>
                <Link to={`/quotes/viewAnalysis/${data._id}`} className='px-5 py-1   text-blue-500 underline hover:text-indigo-400 hover:font-bold font-serif'>View Analysis</Link>

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

            <td className="px-1 py-4">
                Price: {data?.price || "N/A"} $
                <hr />
                Quantity: {data?.quantity || "N/A"}
                <hr />
                {data?.profit &&
                    <div>
                        <p> Profit: {data?.profit} $</p>
                        <hr />
                    </div>
                }
                {data?.profit &&
                    <div>
                        <p> Total: {data?.price * data?.quantity + data?.profit} $</p>
                        <hr />
                    </div>
                }
            </td>
            <td className="px-6 py-4">
                <form onSubmit={handleSubmitProfit(handleAddProfit)}>
                    <input
                        defaultValue={data?.profit}
                        {...registerProfit("profit", { required: true })}
                        disabled={data?.profit && true}
                        type="number"
                        placeholder='Profit Price'
                        className=' w-24 text-xs'
                    />
                    {!data?.profit && <button type='submit'
                        disabled={data?.profit && true}
                        className='flex items-center justify-center  w-full text-slate-50 font-extrabold latter tracking-wider  mt-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md   active:ring-2 active:ring-offset-1   text-sm active:bg-gradient-to-l no-underline'
                    >Submit</button>}
                </form>
            </td>


            <td className="px-6 py-4 text-center">

                {data?.deliveryDate ? <span>{data?.deliveryDate} Days</span> : "N/A"}
            </td>



            <td className="px-6 py-4 text-center">
                {data?.sendToSupplier === 'sended' ?
                    <div className=' text-left'>
                        <p className=' text-xs'>Already sended with <br />{data?.supplier?.fullName} <br />
                            <a href={`mailto:${data?.supplier?.email}`}>{data?.supplier?.email}</a></p>
                        <p>{data?.supplier?.company}</p>
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

                                    <option key={i} value={data?._id}>{data?.company}</option>

                                )
                            }
                        </select> <br />
                        {errors.supplierId && <span className=' text-xs text-red-500'>This field is required</span>}
                        <br />
                        <button type='submit' className='px-2 py-1 rounded-full text-white bg-gradient-to-r active:bg-gradient-to-l from-sky-600 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full'>Send</button>
                    </form>}

            </td>

            <td className="px-6 py-4 text-right">
                <select
                    disabled={!data?.price && !data?.deliveryDate && true}
                    defaultValue={data?.status}
                    onChange={(e) => handleStatusChange(e.target.value)}
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