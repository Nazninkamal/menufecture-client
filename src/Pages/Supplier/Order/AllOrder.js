import React from 'react';
import SharedBar from '../../../Components/SharedBar/SharedBar';

import { Link } from 'react-router-dom';
import { useGetAllOrderQuotesQuery, useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';



const Order = () => {
    const { data: Quotes } = useGetAllOrderQuotesQuery();
    const [updateQuote] = useUpdateMySingleQuotesMutation();
    const orders = Quotes?.result?.filter(data => data?.orderStatus === 'approved' || data?.orderStatus === 'continue' || data?.orderStatus === 'payment' || data?.orderStatus === 'completed');



    const handleStatusChange = async (status, id) => {
        const configure = { orderStatus: status };
        await updateQuote({ id, configure })
    }
    return (
        <div className=' h-screen overflow-y-auto'>
            <div className=' h-screen overflow-y-auto'>
                <SharedBar pageName="Orders" />


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
                                Delivery Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((data => (
                                <tr key={data?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <p>{data?.material}</p>
                                        <Link to={`/quotes/viewAnalysis/${data._id}`} className='px-5 py-1   text-blue-500 underline hover:text-indigo-400 hover:font-bold font-serif'>View Analysis</Link>
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
                                        {(data?.price + data?.profit)
                                            + (data?.price + data?.profit)
                                            * (20 / 100) + 30}€ 
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <select
                                            defaultValue={data?.orderStatus}
                                            onChange={(e) => handleStatusChange(e.target.value, data?._id)}
                                            className={`
                ${data?.orderStatus === "approved" && "bg-green-400 "}
                ${data?.orderStatus === "continue" && "bg-yellow-500 "}
                ${data?.orderStatus === "completed" && "bg-green-700 "}
                ${data?.orderStatus === "rejected" && "bg-red-400 "}
                
                py-1 px-5 rounded-full text-white  font-bold `}
                                        >

                                            {data?.orderStatus === "approved" && <option value="approved">Approved</option>}
                                            <option value="continue">Continue</option>
                                            <option value="completed">Completed</option>
                                            <option value="rejected">Rejected</option>
                                        </select>
                                    </td>
                                </tr>
                            )))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;