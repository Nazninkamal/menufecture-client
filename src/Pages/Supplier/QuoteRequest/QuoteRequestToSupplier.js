import React from 'react';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import { useGetAllOrderQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';
import QuoteTableToSupplier from './QuoteTableToSupplier';



const QuoteRequestToSupplier = () => {

    const { data: Quotes } = useGetAllOrderQuotesQuery();

    return (
        <div className=' h-screen overflow-y-auto'>
            <SharedBar pageName="Manage Quote Request" />

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
                            Delivery Days
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                             Status
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Quotes?.result?.filter(data => data?.sendToSupplier === 'sended')?.map((data => (
                            <QuoteTableToSupplier key={data?._id} data={data}  />
                        )))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default QuoteRequestToSupplier;