import React, { useEffect } from 'react';
import ViewThreeDFile from './ViewThreeDFile';
import { useParams } from 'react-router-dom';
import { useGetMySingleQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import { useDispatch, useSelector } from 'react-redux';
import { downloadPDF } from '../../../Redux/Features/quotes/quotesSlice';
import { toast } from 'react-hot-toast';

const ViewAnalysis = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetMySingleQuotesQuery({ id });

    const { isLoading: isLoadingPDF, isSuccess: isSuccessPDF, isError: isErrorPDF, error: errorPDF } = useSelector((state) => state.quote);
    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    const handleDownload = () => {
        dispatch(downloadPDF({ id }))

    }

    useEffect(() => {
        if (isLoadingPDF) {
            toast.loading("Loading...", { id: "quote" })
        }
        if (isErrorPDF) {
            toast.error(errorPDF, { id: "quote" })
        }
        if (isSuccessPDF) {
            toast.success('Success', { id: "quote" })
        }

    }, [isLoadingPDF, errorPDF, isErrorPDF, isSuccessPDF]);





    return (
        <div className='  h-screen overflow-y-auto'>
            <SharedBar pageName="View Analysis" />
            <div className='grid grid-cols-12 md:p-5 gap-5'>

                <div className=' col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4  border md:p-3 flex flex-col justify-between '>
                    <h1 className=' text-sm text-white bg-gradient-to-l from-indigo-400 from-10% via-sky-400 via-30% to-emerald-400 to-90% px-1 py-2'>Product info</h1>
                    <div className=' text-sm border p-2'>
                        <h1>Material: {data?.result?.material} {isLoading && "Loading..."}</h1>
                        <hr />
                        <h1>Resolution: {data?.result?.resolution} {isLoading && "Loading..."}</h1>
                        <hr />
                        <h1>Finish: {data?.result?.finish} {isLoading && "Loading..."}</h1>
                        <hr />
                        <h1>Orientation: {data?.result?.orientation} {isLoading && "Loading..."}</h1>
                        <hr />
                        <h1>Quantity: {data?.result?.quantity} {isLoading && "Loading..."}</h1>
                        <hr />
                        <h1>Price: {data?.result?.price + data?.result?.profit || "N/A"} {isLoading && "Loading..."}€</h1>
                        <hr />

                        <h1>Tax:22% {isLoading && "Loading..."}</h1>
                        <hr />
                        <h1>Shipping:30  {isLoading && "Loading..."}€ </h1>
                        <hr />
                        <h1>Total: {
                            (data?.result?.price + data?.result?.profit)
                            + (data?.result?.price + data?.result?.profit)
                            * (22 / 100) + 30 || "N/A"} {isLoading && "Loading..."}€ </h1>
                        <hr />
                        <h1> {data?.result?.updatedAt ? "Last Updated" : "Crating date"}: {
                            new Date(data?.result?.updatedAt || data?.result?.createdAt).toLocaleDateString()} </h1>
                        <hr />
                        <p>Update Status: <span className=' uppercase  text-yellow-600'> {data?.result?.status || 'Request for quote'}</span></p>
                    </div>

                    {/* customer info ------------------------- */}

                    {
                        user?.role === "admin" &&
                        <div>
                            <h1 className='text-sm mt-9 text-white bg-gradient-to-l from-indigo-400 from-10% via-sky-400 via-30% to-emerald-400 to-90% px-1 py-2'>Customer info</h1>
                            <div className=' text-sm border p-2'>
                                <h1>Name: {data?.result?.user?.fullName}</h1>
                                <hr />
                                <h1>Email: {data?.result?.user?.email}</h1>
                                <hr />
                                <h1>Phone: {data?.result?.user?.phoneNumber}</h1>
                                <hr />
                                <h1>Company: {data?.result?.user?.company}</h1>
                                <hr />
                                <h1>Country: {data?.result?.user?.country}</h1>
                                <h1>Postal Code: ({data?.result?.user?.postalCode})</h1>


                            </div>
                        </div>}

                    <div className=' grid grid-cols-6 gap-5 px-1 md:px-0'>
                        <a href={data?.result?.threeDFile?.fileURL} download
                            className='col-span-6 md:col-span-3 text-xs flex items-center justify-center  w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md mt-10  active:ring-2 active:ring-offset-1   active:bg-gradient-to-l no-underline'
                        >Download file</a>

                        <button
                            onClick={handleDownload}
                            className='col-span-6 md:col-span-3 flex items-center justify-center  w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md md:mt-10  active:ring-2 active:ring-offset-1   text-xs active:bg-gradient-to-l no-underline'>Download Info</button>
                    </div>
                </div>


                <div className='   col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8    overflow-y-auto border  md:h-full bg-gradient-to-tr from-indigo-400 from-10% via-sky-400 via-30% to-emerald-400 to-90%'>

                    {data?.result?.threeDFile?.fileURL && <ViewThreeDFile file={data?.result?.threeDFile?.fileURL} OrbitControl="OrbitControl" />}

                </div>
            </div>

        </div>
    );
};

export default ViewAnalysis;