import React from 'react';
import SharedBar from '../../Components/SharedBar/SharedBar';
import { useGetMyAllQuotesQuery } from '../../Redux/Features/quotes/quotesApi';

const MyOrder = () => {
    const { data: myQuotes } = useGetMyAllQuotesQuery();

    const orders = myQuotes?.result.filter((quote) => quote?.orderStatus);


    return (
        <div className=' h-screen overflow-y-auto'>
            <SharedBar pageName="My Order" />


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
                            order Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((data => (
                            <tr key={data?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data?.material}
                                </th>
                                <td className="px-6 py-4">
                                    {data?.type}
                                </td>

                                <td className="px-6 py-4">
                                    {data?.orientation}
                                </td>

                                <td className="px-6 py-4">
                                    {data?.finish}
                                </td>
                                <td className="px-6 py-4">
                                    {data?.resolution}
                                </td>
                                <td className="px-6 py-4">
                                    {data?.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {data?.profit ? data?.price + data?.profit:"N/A"}€
                                </td>
                                <td className="px-6 py-4">
                                    <div className={`
                ${data?.orderStatus === "order" && "bg-yellow-400 "}
                ${data?.orderStatus === "approved" && "bg-green-400 "}
                
                
                py-1 px-5 rounded-full  font-bold uppercase text-center `}> <span>{data?.orderStatus ? data?.orderStatus : "N/A"}</span></div>
                                </td>
                            </tr>
                        )))
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;