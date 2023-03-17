import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { downloadPDF } from '../../../../Redux/Features/quotes/quotesSlice';
import SharedBar from '../../../../Components/SharedBar/SharedBar';
import { toast } from 'react-hot-toast';
import { useGetMySingleQuotesQuery } from '../../../../Redux/Features/quotes/quotesApi';
import ViewThreeDFile from '../../Quotes/ViewThreeDFile';



const OrderReviewQuote = () => {


    const { id } = useParams()
    const { isLoading, isError, error } = useSelector((state) => state.quote);
    const { data: quote } = useGetMySingleQuotesQuery({ id });

  

    const dispatch = useDispatch();
    const handleDownload = () => {
        dispatch(downloadPDF({ id }))
    }






    useEffect(() => {
        if (isLoading) {
            toast.loading("Downloading...", { id: "pdf" })
        }
        if (isError) {
            toast.error(error, { id: "pdf" })
        }
    }, [isLoading, isError, error])

    return (
        <div>

            <SharedBar pageName="Quote Review" />
            <div className='border shadow mt-8'>
                <div className='py-10 px-6 shadow'>
                    <h1>{quote?.result?.type}</h1>
                </div>
                <div className=' grid grid-cols-12'>
                    <div className=' grid grid-cols-12 gap-5 md:col-span-6 sm:col-span-12 col-span-12'>
                        <div className=' md:col-span-6 sm:col-span-12 col-span-12'>
                            <div className='h-full'>
                                <ViewThreeDFile file={quote?.result?.threeDFile?.fileURL} />
                            </div>
                        </div>
                        <div className=' md:col-span-6 sm:col-span-12 col-span-12 p-10'>
                            <div>
                                <h1> {quote?.result?.quoteTitle}</h1>
                                <h6 className=' text-sm text-slate-600 py-2'>{quote?.result?.material}</h6>
                                <h6 className=' text-sm text-slate-600 py-2'>{quote?.result?.resolution} </h6>
                                <h6 className=' text-sm text-slate-600 py-2'>{quote?.result?.orientation}</h6>
                                <h6 className=' text-sm text-slate-600 py-2'>{quote?.result?.finish} </h6>

                            </div>
                        </div>

                    </div>

                    <div className=' md:col-span-3 sm:col-span-12 col-span-12 '>
                        <h1 className=' text-center py-3'>Quantity</h1>
                        <div className=' shadow py-2 text-center'>
                            <h1>{quote?.result?.quantity}</h1>
                        </div>
                    </div>

                    <div className=' md:col-span-3 sm:col-span-12 col-span-12 p-10 '>
                        <div className=' shadow p-8 flex flex-col justify-between h-full bg-slate-100'>
                            <div className=' flex justify-between'>
                                <h1 className=' text-slate-600 text-base'>{quote?.result?.quantity} Part = ${quote?.result?.price}</h1>
                                <h1 className=' text-slate-600 text-base'>${quote?.result?.price}</h1>

                            </div>
                            <div className=' py-6 border-b' />


                            <div className=' flex justify-between '>
                                <h1>Total:</h1>
                                <h1>${quote?.result?.price}</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



            <div className=' grid gap-5 md:grid-cols-12 sm:grid-cols-6 mt-5'>
                <div className=' col-span-8 shadow p-5'>
                    <div className='grid grid-cols-12 gap-3'>

                        <div className=' col-span-6'>
                            <h1 className=' text-base'> Shipping To: <Link className=' text-violet-500'>(Change)</Link></h1>
                        </div>
                        <div className=' col-span-6'>
                            <h1 className='text-base'>Shipping Options</h1>
                            <h1 className='text-base'>No carrier account <Link className=' text-violet-500'>(Add account)</Link></h1>
                        </div>
                    </div>
                </div>
                <div className=' col-span-4 shadow p-5'>
                    <div className=' text-center shadow py-2 bg-slate-100'>
                        <h1>Order Summary </h1>
                    </div>

                    <div className=' flex justify-between'>
                        <h3 className=' text-base  py-1'>Subtotal: </h3>
                        <h3 className=' text-base  py-1'> ${quote?.result?.price}</h3>
                    </div>
                    <div className=' flex justify-between'>
                        <h3 className=' text-base  py-1'>Shipping : </h3>
                        <h3 className=' text-base  py-1'> TBD</h3>
                    </div>
                    <div className=' flex justify-between'>
                        <h3 className=' text-base  py-1'>Estimated Tax: </h3>
                        <h3 className=' text-base  py-1'> TBD</h3>
                    </div>
                    <div className=' flex justify-between'>
                        <h3>Total: </h3>
                        <h3> ${quote?.result?.price}</h3>
                    </div>
                    <div className=' flex justify-center shadow py-3 mt-3'>

                        <button disabled={quote?.result?.status !== "approved" && true} className='flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r active:bg-gradient-to-l from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 text-sm ' onClick={handleDownload}>PDF Download</button>

                        <button className='flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r active:bg-gradient-to-l from-yellow-400 to-red-500 rounded-md active:ring-2 active:ring-offset-1 text-sm '>
                            Checkout Now
                        </button>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default OrderReviewQuote;