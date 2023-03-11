import React from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../../../Components/Buttons/LoadingButton';
import { useGetMySingleQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';
import ViewThreeDFile from '../Quotes/ViewThreeDFile';

const QuotePrinting = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetMySingleQuotesQuery({ id });


    const res = JSON?.parse(localStorage?.getItem("configure"))?.find(con => con?.id === id);
    const handleRequset = () => {
        console.log(res);
    }

    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-100 xl:w-100 p-5 flex flex-col justify-between" >

            {isLoading ? <Loading /> :
                <div>
                    <h1>3D Printing</h1>
                    <div className='grid grid-cols-6 gap-4 '>
                        <div className='col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3'>
                            <ViewThreeDFile OrbitControl={true} file={data?.result?.threeDFile?.fileURL} />
                        </div>

                        <div className='text-sm mt-3 col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3 items-center '>
                            <div className=' '>
                                <h1>Material: {res?.material}</h1>
                                <hr />
                                <h1>Resolution: {res?.resolution}</h1>
                                <hr />
                                <h1>Orientation: {res?.orientation}</h1>
                                <hr />
                                <h1>Finish: {res?.finish}</h1>
                                <hr />
                                <h1>Quantity: {res?.quantity}</h1>
                                <hr />
                                <h1>Price: {res?.price}</h1>
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
                    onClick={handleRequset}
                    type='button'
                    className='flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r active:bg-gradient-to-l from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 text-sm '>Request for Quote</button>

                <button type='button' className='flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1   text-sm active:bg-gradient-to-l'>Review Quote</button>

            </div>

        </div>
    );
};

export default QuotePrinting;