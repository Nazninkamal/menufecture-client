import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useGetMySingleQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';
import ViewThreeDFile from '../Quotes/ViewThreeDFile';

const QuotePrinting = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetMySingleQuotesQuery({ id });


    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-100 xl:w-100 p-5 flex flex-col justify-between" >


            <div>
                <h1>3D Printing</h1>
                <div className='grid grid-cols-6 gap-4 '>

                    <div className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3  flex justify-center'>
                        {
                            isLoading ? null : <ViewThreeDFile OrbitControl={true} file={data?.result?.threeDFile?.fileURL} />
                        }
                    </div>


                    <div className='text-sm mt-3 col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3 items-center '>
                        <div className=' '>
                            <h1>Material: {data?.result?.material} {isLoading && "Loading..."}</h1>
                            <hr />
                            <h1>Resolution: {data?.result?.resolution} {isLoading && "Loading..."}</h1>
                            <hr />
                            <h1>Orientation: {data?.result?.orientation} {isLoading && "Loading..."}</h1>
                            <hr />
                            <h1>Finish: {data?.result?.finish} {isLoading && "Loading..."}</h1>
                            <hr />
                            <h1>Quantity: {data?.result?.quantity} {isLoading && "Loading..."}</h1>
                            <hr />
                            <h1>Price: {data?.result?.price} {isLoading && "Loading..."}</h1>
                            <hr />
                            <h1> Last Updated: {data?.result?.updatedAt || data?.result?.createdAt} {isLoading && "Loading..."}</h1>
                            <hr />
                            <p>Update Status: <span className=' uppercase  text-yellow-600'> {data?.result?.status || 'Request for quote'}</span></p>
                        </div>
                    </div>
                </div>

            </div>


            <div className='  flex justify-around border p-6 gap-5'>
                {data?.result?.status ? <button

                    type='button'
                    className='flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r  from-zinc-500 to-slate-300-500 rounded-md  text-sm '>Already Requested this quote</button> : <button

                        type='submit'
                        className='flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r active:bg-gradient-to-l from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 text-sm '>Request for Quote</button>}


                <NavLink to={`/profile/OrderReviewQuote/${id}`} className='flex items-center justify-center  w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1   text-sm active:bg-gradient-to-l'>Review Quote
                </NavLink>

            </div>

        </div>
    );
};

export default QuotePrinting;