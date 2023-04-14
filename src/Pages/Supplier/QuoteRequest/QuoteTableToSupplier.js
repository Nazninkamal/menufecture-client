import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const QuoteTableToSupplier = ({ data, handleUpdateStatus }) => {
    const [updateQuote, { isLoading, isError, isSuccess, error }] = useUpdateMySingleQuotesMutation();
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();



    const onSubmit = async (d) => {
        await updateQuote({ id: data?._id, configure: d })
    };
    const { price, deliveryDate } = watch()



    useEffect(() => {
        if (deliveryDate < 1) {
            setValue('deliveryDate', 1, { shouldValidate: true })
        }
        if (price < 1) {
            setValue('price', 1, { shouldValidate: true })
        }
    }, [setValue, deliveryDate, price])



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


            <td className="px-6 py-4">
                {data?.price }€ 
            </td>


            <td className="px-6 py-4">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Delivery  Days </p>
                    <input
                        disabled={data?.deliveryDate && true}
                        {...register("deliveryDate", {
                            required: true
                        })}
                        type='number'
                        defaultValue={data?.deliveryDate}
                        className='  text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                    {errors.deliveryDate && <p className=' text-xs text-red-500 block'>This field is required</p>}
                    < br /> <br />

                    <p>Set Price  </p>
                    <input
                        disabled={data?.price && true}
                        type="number"
                        {...register("price", { required: true })}
                        defaultValue={data?.price}
                        placeholder='Price'
                        className='   text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                    {errors.price && <p className=' block text-xs text-red-500'>This field is required</p>}
                    < br /> <br />
                    {!data?.deliveryDate &&
                        <button
                            type='submit'
                            className='  px-2 py-1 rounded-full text-white bg-gradient-to-r active:bg-gradient-to-l from-sky-600 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full'>Submit</button>}
                </form>
            </td>

            <td className="px-6 py-4 text-center">
                <p> {
                    data?.orderStatus || data?.status || "N/A"
                }</p>
            </td>

        </tr>
    );
};

export default QuoteTableToSupplier;