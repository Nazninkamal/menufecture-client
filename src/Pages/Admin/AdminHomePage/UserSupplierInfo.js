import React from 'react';
import SharedBar from '../../../Components/SharedBar/SharedBar';

const UserSupplierInfo = () => {
    return (
        <div>
         <SharedBar pageName={"Admin Dashboad"}/>
           
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

   <div className="px-4 py-5 sm:px-6 bg-white mt-5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Your User</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">A list of all users in your website including their name, email, country and role</p>
        </div>

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name 
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Country
                </th>
                <th scope="col" class="px-6 py-3">
                    Role
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Jhon Smit
                </th>
                <td class="px-6 py-4">
                    jone@gmail.com
                </td>
                <td class="px-6 py-4">
                    USA
                </td>
                <td class="px-6 py-4">
                   Supplier
                </td>
                <td class="px-6 py-4">
                    <a href="#/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Tabassub Araa
                </th>
                <td class="px-6 py-4">
                    tabassumaraa@gmailcom
                </td>
                <td class="px-6 py-4">
                    Bangladesh
                </td>
                <td class="px-6 py-4">
                   Customer
                </td>
                <td class="px-6 py-4">
                    <a href="#/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Harry Potter
                </th>
                <td class="px-6 py-4">
                   harry@gmail.com
                </td>
                <td class="px-6 py-4">
                    London
                </td>
                <td class="px-6 py-4">
                    Supplier
                </td>
                <td class="px-6 py-4">
                    <a href="#/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Akkini Singh
                </th>
                <td class="px-6 py-4">
                    akkini@gmail.com
                </td>
                <td class="px-6 py-4">
                    India
                </td>
                <td class="px-6 py-4">
                Customer
                </td>
                <td class="px-6 py-4">
                    <a href="#/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Jhon Smit
                </th>
                <td class="px-6 py-4">
                    jone@gmail.com
                </td>
                <td class="px-6 py-4">
                    USA
                </td>
                <td class="px-6 py-4">
                   Supplier
                </td>
                <td class="px-6 py-4">
                    <a href="#/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Tabassub Araa
                </th>
                <td class="px-6 py-4">
                    tabassumaraa@gmailcom
                </td>
                <td class="px-6 py-4">
                    Bangladesh
                </td>
                <td class="px-6 py-4">
                   Customer
                </td>
                <td class="px-6 py-4">
                    <a href="#/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Harry Potter
                </th>
                <td class="px-6 py-4">
                   harry@gmail.com
                </td>
                <td class="px-6 py-4">
                    London
                </td>
                <td class="px-6 py-4">
                    Supplier
                </td>
                <td class="px-6 py-4">
                    <a href="#/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Akkini Singh
                </th>
                <td class="px-6 py-4">
                    akkini@gmail.com
                </td>
                <td class="px-6 py-4">
                    India
                </td>
                <td class="px-6 py-4">
                Customer
                </td>
                <td class="px-6 py-4">
                    <a href="#/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
         
        </tbody>
    </table>
</div>

        </div>
    );
};

export default UserSupplierInfo;