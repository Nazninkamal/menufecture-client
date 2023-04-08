import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';
import { toast } from 'react-hot-toast';


const QuoteTableToSupplier = ({ data, handleUpdateStatus }) => {
    const [updateQuote, { isLoading, isError, isSuccess, error }] = useUpdateMySingleQuotesMutation();
    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = async (d) => {
        await updateQuote({ id: data?._id, configure: d })
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
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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

            <td className="px-6 py-4">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <span>Delivery  date </span>
                    <input

                        {...register("deliveryDate", {
                            required: true
                        })}
                        type='number'
                        defaultValue={data?.deliveryDate}
                        className=' w-full  text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                    {errors.deliveryDate && <span className=' text-xs text-red-500 block'>This field is required</span>}
                    < br /> <br />

                    <span>Set Price </span>
                    <input
                        type="number"
                        {...register("price", { required: true })}
                        defaultValue={data?.price}
                        placeholder='Price'
                        className=' w-full   text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                    {errors.price && <span className=' block text-xs text-red-500'>This field is required</span>}
                    < br /> <br />
                    <button
                        type='submit'
                        className='  px-2 py-1 rounded-full text-white bg-gradient-to-r active:bg-gradient-to-l from-sky-600 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full'>Submit</button>
                </form>
            </td>



        </tr>
    );
};

export default QuoteTableToSupplier;