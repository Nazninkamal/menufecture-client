import React from 'react';
import { useGetAllUsersQuery } from '../../../Redux/Features/User/userApi';

const AdminCard = () => {
   const { data: quote, supplier } = useGetAllUsersQuery();


   
   return (

      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3">

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

         <div className='text-center'>
           
           <p className="mb-3 font-extrabold text-4xl">2570</p>
           <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Total Profit</p>
        </div>
      </div>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
        
         <div className='text-center'>
           <p className="mb-3 font-extrabold text-4xl">{quote?.result.length}</p>
           <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Quote Request Last Month</p>
        </div>
      </div>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
         
         <div className='text-center'>
           <p className="mb-3 font-extrabold text-4xl"> {supplier?.result.length}5</p>
           <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Total Supplier</p>
        </div>
      </div>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-evenly ">

      <div className='text-center'>
           <p className="mb-3 font-extrabold text-4xl">90%</p>
           <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Customer Satisfaction</p>
        </div>

        
      </div>


   </div>
   );
};

export default AdminCard;