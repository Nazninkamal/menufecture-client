import React from 'react';
import { useGetAllUsersQuery } from '../../../Redux/Features/User/userApi';

const SupplierCards = () => {
   const { data: order } = useGetAllUsersQuery();

   return (
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3">

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

         {/* <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400 mt-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path opacity="0.15" d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z" fill="#000000" />
               <path d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" />
               <path d="M3 10.5C3 12.433 4.567 14 6.5 14L10 17.5V10.5C10 8.567 8.433 7 6.5 7C4.567 7 3 8.567 3 10.5Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" />
            </svg> */}

            {/* <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400 mt-4"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 10H4M14 14H4M20 5.73295C18.7513 4.53456 16.918 4 14.5 4C9.5 4 7 6.28571 7 12C7 17.7143 9.5 20 14.5 20C16.918 20 18.7513 19.4654 20 18.2671" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}


            
            <div className='text-center'>
              
              <p className="mb-3 font-extrabold text-4xl"> € 257</p>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Total Revenues 
              </p>
           </div>
         </div>

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
           
            <div className='text-center'>
              <p className="mb-3 font-extrabold text-4xl">{order?.result.length}</p>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Number of Order Last Month</p>
           </div>
         </div>

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            
            <div className='text-center'>
              <p className="mb-3 font-extrabold text-4xl"> 15</p>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Product Category</p>
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

export default SupplierCards;