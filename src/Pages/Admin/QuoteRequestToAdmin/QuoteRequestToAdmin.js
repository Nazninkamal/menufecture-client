import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import { useGetAllOrderQuotesQuery, useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';
import QuoteTableAdmin from './QuoteTableAdmin';


const QuoteRequestToAdmin = () => {

    const { data: Quotes } = useGetAllOrderQuotesQuery();
    const [updateQuote, { isLoading, isError, isSuccess, error }] = useUpdateMySingleQuotesMutation();






    const handleUpdateStatus = async (id, status) => {
        const configure = { status };
        await updateQuote({ id, configure })
    }





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
        <div className=' h-screen overflow-y-auto'>
            <SharedBar pageName="Manage Quote Request" />

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2 overflow-x-auto">
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
                            Product Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Profit Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Delivery Days
                        </th>

                        <th scope="col" className="px-6 py-3 text-center">
                            Send to Supplier

                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Quotes?.result?.filter(data => data?.sendToAdmin === 'sended')?.map((data => (
                            <QuoteTableAdmin
                                key={data?._id}
                                data={data}
                                handleUpdateStatus={handleUpdateStatus}
                            />
                        )))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default QuoteRequestToAdmin;