import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import SharedBar from '../../../Components/SharedBar/SharedBar';
import { useGetAllOrderQuotesQuery, useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';

import QuoteTable from './QuoteTable';



const QuoteRequest = () => {

    const { data: allOrderQuotes } = useGetAllOrderQuotesQuery();


    const [updateStatus, { isLoading, isError, isSuccess, error }] = useUpdateMySingleQuotesMutation();



    const handleUpdateStatus = async (id, status) => {
        const configure = { status };
        await updateStatus({ id, configure })
    }

    useEffect(() => {
        if (isLoading) {
            toast.loading("Loading...", { id: "quote" })
        }
        if (isError) {
            toast.error(error, { id: "quote" })
        }
        if (isSuccess) {
            toast.success('Update Status is Success', { id: "quote" })
        }

    }, [isLoading, isError, error, isSuccess]);


    return (
        <div className=' h-screen overflow-y-auto'>
            <SharedBar pageName="All Order" />

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Material
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Orientation
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Finish
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Resolution
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrderQuotes?.result?.map((data => (
                            <QuoteTable key={data?._id} data={data} handleUpdateStatus={handleUpdateStatus} />
                        )))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default QuoteRequest;