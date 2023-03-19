import React from 'react';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import { useGetAllUsersQuery } from '../../../Redux/Features/User/userApi';

const UserSupplierInfo = () => {
    const { data: users } = useGetAllUsersQuery();

    return (
        <div className=' h-screen overflow-y-auto'>
       

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">

                <div className="px-4 py-5 sm:px-6 bg-white mt-5">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Users and Supplier</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">A list of all Users and Suppliers in your website including their name, email, country and role</p>
                </div>

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Country
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.result?.map((user) => (
                                <tr key={user._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {user?.fullName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user?.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.country}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.role}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default UserSupplierInfo;