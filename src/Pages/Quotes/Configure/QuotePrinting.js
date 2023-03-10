import React from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../../Components/Buttons/LoadingButton';
import { useGetMySingleQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';
import ViewThreeDFile from '../Quotes/ViewThreeDFile';

const QuotePrinting = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetMySingleQuotesQuery({ id });



    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-100 xl:w-100 p-5 flex flex-col justify-between" >
            {isLoading ? <Loading /> :
                <div>
                    <h1>3D Printing (2 Parts)</h1>
                    <div className='grid grid-cols-6 gap-4 '>
                        <div className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3'>
                            <ViewThreeDFile OrbitControl={true} file={data?.result?.threeDFile?.fileURL} />
                        </div>

                        <div className='text-sm mt-3 col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3 items-center '>
                            <div className=' '>
                                <h1>Material: {data?.result?.material}</h1>
                                <hr />
                                <h1>Resolution: {data?.result?.resolution}</h1>
                                <hr />
                                <h1>Orientation: {data?.result?.orientation}</h1>
                                <hr />
                                <h1>Finish: {data?.result?.finish}</h1>
                                <hr />
                                <h1>Quantity: {data?.result?.quantity}</h1>
                                <hr />
                                <h1>Price: {data?.result?.price?data?.result?.price:"equest"}</h1>
                                <hr />
                                {/* <p>ID Number: xxxxxxxxxxx</p> */}
                                <p>Update Status: Request for quote</p>
                            </div>
                        </div>
                    </div>

                </div>

            }
            <div className='  flex justify-around border p-6 gap-5'>
                <button
                    type='submit'
                    className='flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r active:bg-gradient-to-l from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 text-sm '>Request for Quote</button>

                <button type='false' className='flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1   text-sm active:bg-gradient-to-l'>Review Quote</button>
            </div>

        </div>
    );
};

export default QuotePrinting;