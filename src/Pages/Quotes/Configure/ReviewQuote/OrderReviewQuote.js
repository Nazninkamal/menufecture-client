import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { downloadPDF, handlePDFDownloadStatusFalse } from '../../../../Redux/Features/quotes/quotesSlice';
import SharedBar from '../../../../Components/SharedBar/SharedBar';
import { toast } from 'react-hot-toast';
import { useGetMySingleQuotesQuery, useUpdateMySingleQuotesMutation } from '../../../../Redux/Features/quotes/quotesApi';
import ViewThreeDFile from '../../Quotes/ViewThreeDFile';



const OrderReviewQuote = () => {


    const { id } = useParams()
    const { isLoading, isSuccess, isError, error } = useSelector((state) => state.quote);
    const { data: quote } = useGetMySingleQuotesQuery({ id });



    const dispatch = useDispatch();
    const handleDownload = () => {
        dispatch(downloadPDF({ id }))

    }
    const [updateQuote, { isLoading: isLoadingOrder, isError: isErrorOrder, isSuccess: isSuccessOrder, error: errorOrder }] = useUpdateMySingleQuotesMutation();


    const handleOrder = async () => {
        if (quote?.result?.orderStatus) {
            return toast.error("Already ordered this quote ", { id: "order" })
        }
        if (quote?.result?.price && quote?.result?.profit && quote?.result?.status === "approved") {

            await updateQuote({ id: quote?.result?._id, configure: { orderStatus: "order" } })
        }

        else {
            toast.error("Please wait for approve your request!", { id: "order" })
        }
    }




    useEffect(() => {
        if (isLoadingOrder) {
            toast.loading("Loading...", { id: "order" })
        }
        if (isSuccessOrder) {
            toast.success("Order Success", { id: "order" })
        }
        if (isErrorOrder) {
            toast.error(errorOrder, { id: "order" })
        }
    }, [isLoadingOrder, isSuccessOrder, isErrorOrder, errorOrder, dispatch])



    useEffect(() => {
        if (isLoading) {
            toast.loading("Downloading...", { id: "pdf" })
        }
        if (isSuccess) {
            toast.success("Download Success", { id: "pdf" })
            dispatch(handlePDFDownloadStatusFalse())
        }
        if (isError) {
            toast.error(error, { id: "pdf" })
        }
    }, [isLoading, isError, error, isSuccess,dispatch])

    return (
        <div className=' h-screen overflow-y-auto'>

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
                                <h1 className=' text-slate-600 text-base'>Part ={quote?.result?.quantity}</h1>
                                <h1 className=' text-slate-600 text-base'>{quote?.result?.price && quote?.result?.profit && quote?.result?.status === "approved" ? quote?.result?.price + quote?.result?.profit : "N/A"}€</h1>

                            </div>
                            <div className=' py-6 border-b' />


                            <div className=' flex justify-between '>
                                <h1>Total:</h1>
                                <h1>{quote?.result?.price && quote?.result?.profit && quote?.result?.status === "approved" ? quote?.result?.price + quote?.result?.profit : "N/A"}€</h1>
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
                        <h3 className=' text-base  py-1'>Total: </h3>
                        <h3 className=' text-base  py-1'> {quote?.result?.price && quote?.result?.profit && quote?.result?.status === "approved" ? quote?.result?.price + quote?.result?.profit : "N/A"}€</h3>
                    </div>
                    <div className=' flex justify-between'>
                        <h3 className=' text-base  py-1'>Shipping : </h3>
                        <h3 className=' text-base  py-1'>30€</h3>
                    </div>
                    <div className=' flex justify-between'>
                        <h3 className=' text-base  py-1'>Estimated Tax: </h3>
                        <h3 className=' text-base  py-1'>20%</h3>
                    </div>
                    <div className=' flex justify-between'>
                        <h3>Subtotal: </h3>
                        <h3> {


                            quote?.result?.price && quote?.result?.profit && quote?.result?.status === "approved" ?

                                (quote?.result?.price + quote?.result?.profit)

                                + (quote?.result?.price + quote?.result?.profit)

                                * (20 / 100) + 30 : "N/A"}€</h3>
                    </div>
                    <div className=' flex justify-center shadow py-3 mt-3'>

                        <button className={`flex items-center justify-center  w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1   text-sm active:bg-gradient-to-l`} onClick={handleDownload}>PDF Download</button>
                        {/* 
                        {quote?.result?.orderStatus === "approved" && <button className='flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r active:bg-gradient-to-l from-yellow-400 to-red-500 rounded-md active:ring-2 active:ring-offset-1 text-sm '>
                            Checkout Now
                        </button>} */}
                        {
                            quote?.result?.price && quote?.result?.status === "approved" &&

                            <button
                                onClick={handleOrder}
                                className='flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r active:bg-gradient-to-l from-green-300 to-green-500 rounded-md active:ring-2 active:ring-offset-1 text-sm '>
                                Order Now
                            </button>
                        }

                    </div>
                </div>
            </div>


        </div>
    );
};

export default OrderReviewQuote;