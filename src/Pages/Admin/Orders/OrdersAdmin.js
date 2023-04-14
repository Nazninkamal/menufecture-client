import React from 'react';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import { useGetAllOrderQuotesQuery, useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';
import { Link } from 'react-router-dom';


const OrdersAdmin = () => {
    const { data: quotes } = useGetAllOrderQuotesQuery();
    const [updateQuote] = useUpdateMySingleQuotesMutation();

    const orders = quotes?.result.filter((quote) => quote?.orderStatus);



    const handleStatusChange = async (status, id) => {
        const configure = { orderStatus: status };
        await updateQuote({ id, configure })
    }

    return (
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
                            order Status
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
                                    {(data?.price * data?.quantity + data?.profit)

                                        + (data?.price * data?.quantity + data?.profit)

                                        * (20 / 100) + 30}€ 
                                </td>
                                <td className="px-6 py-4">
                                    <select
                                        defaultValue={data?.orderStatus}
                                        onChange={(e) => handleStatusChange(e.target.value, data?._id)}
                                        className={`
                ${data?.orderStatus === "order" && "bg-yellow-400 "}
                ${data?.orderStatus === "approved" && "bg-green-400 "}
                ${data?.orderStatus === "completed" && "bg-green-700 "}
                ${data?.orderStatus === "rejected" && "bg-red-400 "}
                
                py-1 px-5 rounded-full text-white  font-bold `}
                                    >

                                        {data?.orderStatus === "order" && <option value="order">Order</option>}
                                        <option value="approved">Approved</option>
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
    );
};

export default OrdersAdmin;