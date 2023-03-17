import React from 'react';

const QuoteTable = ({ data, handleUpdateStatus }) => {


    const handleChange = async (status) => {
        await handleUpdateStatus(data?._id, status)

    }




    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                {data?.price}
            </td>
            <td className="px-6 py-4 text-right">
                <select defaultValue={data?.status} onChange={(e) => handleChange(e.target.value)}
                    className={`
                ${data?.status === "pending" && "bg-yellow-400 "}
                ${data?.status === "approved" && "bg-green-400 "}
                ${data?.status === "rejected" && "bg-red-400 "}
                
                py-1 px-5 rounded-full text-white  font-bold `}
                >
                    <option  value="pending">Pending</option>
                    <option  value="approved">Approved</option>
                    <option  value="rejected">Rejected</option>
                </select>
            </td>
        </tr>
    );
};

export default QuoteTable;