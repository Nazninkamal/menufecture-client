import React from 'react';
import ViewThreeDFile from './ViewThreeDFile';
import { useParams } from 'react-router-dom';
import { useGetMySingleQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';
import SharedBar from '../../../Components/SharedBar/SharedBar';

const ViewAnalysis = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetMySingleQuotesQuery({ id });


    return (
        <div className='  h-screen overflow-y-auto'>
            <SharedBar  pageName="View Analysis"/>
            <div className='grid grid-cols-12 p-5 gap-5'>
                <div className=' col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4  border p-3 flex flex-col justify-between '>
                    <div className=' text-base '>
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
                        <h1>Price: {data?.result?.price || "N/A"} {isLoading && "Loading..."}</h1>
                        <hr />
                        <h1> {data?.result?.updatedAt ? "Last Updated" : "Crating date"}: {
                            new Date(data?.result?.updatedAt || data?.result?.createdAt).toLocaleDateString()} </h1>
                        <hr />
                        <p>Update Status: <span className=' uppercase  text-yellow-600'> {data?.result?.status || 'Request for quote'}</span></p>
                    </div>

                    <a href={data?.result?.threeDFile?.fileURL} download
                        className='flex items-center justify-center  w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md mt-10  active:ring-2 active:ring-offset-1   text-sm active:bg-gradient-to-l no-underline'
                    >Download file</a>
                </div>
                <div className='   col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8  '>
                    <div className=' overflow-y-auto border h-96 md:h-full'>
                        {data?.result?.threeDFile?.fileURL && <ViewThreeDFile file={data?.result?.threeDFile?.fileURL} OrbitControl="OrbitControl" />}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewAnalysis;