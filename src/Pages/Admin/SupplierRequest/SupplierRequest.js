import React, { useState } from 'react';
import { Loading } from '../../../Components/Buttons/LoadingButton';
import { useGetApplyForSupplierQuery } from '../../../Redux/Features/User/userApi';
import { FaUserAlt } from 'react-icons/fa'
import { Dropdown1, } from '../../../Components/Dropdown/Dropdown';
import Dropdown2 from '../../../Components/Dropdown/Dropdown2';



const SupplierRequest = () => {
  const { data: getApplySupplier, isLoading } = useGetApplyForSupplierQuery();




  return (
    <div className='pt-16  '>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">Applier for Supplier Posting</h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
            >
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      Company
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      Phone Number
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      Postal Code
                    </th>
                    <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider text-right"
                    >
                      action
                    </th>


                  </tr>
                </thead>
                <tbody>
                  {
                    getApplySupplier?.result?.supplier?.map((supplier) => (
                      <tr key={supplier?._id} >
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <FaUserAlt size={30} />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {supplier?.fullName}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap text-xs">{supplier?.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{supplier?.company}</p>
                          <p className="text-gray-600 whitespace-no-wrap">{supplier?.country}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{supplier?.phoneNumber}</p>

                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                          >

                            {supplier?.postalCode}

                          </span>

                        </td>
                        <td
                          className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                        >


                          <div className=' relative'>
                            <div className=''>
                            </div>
                          </div>
                              <Dropdown2 />



                        </td>
                      </tr>
                    ))
                  }
                  {
                    getApplySupplier?.result?.supplier?.map((supplier) => (
                      <tr key={supplier?._id} >
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <FaUserAlt size={30} />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {supplier?.fullName}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap text-xs">{supplier?.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{supplier?.company}</p>
                          <p className="text-gray-600 whitespace-no-wrap">{supplier?.country}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{supplier?.phoneNumber}</p>

                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                          >

                            {supplier?.postalCode}

                          </span>

                        </td>
                        <td
                          className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                        >


                          <div className=' relative'>
                            <div className=''>
                            </div>
                          </div>
                              <Dropdown2 />



                        </td>
                      </tr>
                    ))
                  }
                  {
                    getApplySupplier?.result?.supplier?.map((supplier) => (
                      <tr key={supplier?._id} >
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                              <FaUserAlt size={30} />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {supplier?.fullName}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap text-xs">{supplier?.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{supplier?.company}</p>
                          <p className="text-gray-600 whitespace-no-wrap">{supplier?.country}</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">{supplier?.phoneNumber}</p>

                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                          >

                            {supplier?.postalCode}

                          </span>

                        </td>
                        <td
                          className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                        >


                          <div className=' relative'>
                            <div className=''>
                            </div>
                          </div>
                              <Dropdown2 />



                        </td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SupplierRequest;