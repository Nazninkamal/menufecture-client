import React from 'react';
import { useGetAllUsersQuery } from '../../../Redux/Features/User/userApi';

const SupplierCards = () => {
   const { data: order } = useGetAllUsersQuery();

   return (
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3">

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='text-center'>

               <p className="mb-3 font-extrabold text-4xl"> € 257</p>
               <p className="mb-3 font-extrabold text-gray-500 dark:text-gray-400">Total Revenues
               </p>
            </div>
         </div>

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">

            <div className='text-center'>
               <p className="mb-3 font-extrabold text-4xl">{order?.result.length}</p>
               <p className="mb-3 font-extrabold text-gray-500 dark:text-gray-400">Number of Order Last Month</p>
            </div>
         </div>

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

            <div className='text-center'>
               <p className="mb-3 font-extrabold text-4xl"> 15</p>
               <p className="mb-3 font-extrabold text-gray-500 dark:text-gray-400">Product Category</p>
            </div>
         </div>

         {/* <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-evenly ">

            <div className='text-center'>
               <p className="mb-3 font-extrabold text-4xl">90%</p>
               <p className="mb-3 font-extrabold text-gray-500 dark:text-gray-400">Customer Satisfaction</p>
            </div>


         </div> */}


      </div>
   );
};

export default SupplierCards;