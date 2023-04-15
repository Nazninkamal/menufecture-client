import React from 'react';
import { useGetMyProjectsQuery } from '../../../Redux/Features/projects/projectsApi';
import { useGetMyAllQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';

const Cards = () => {

   const { data: quotes } = useGetMyAllQuotesQuery();
   const { data: projects } = useGetMyProjectsQuery();

   ;

   return (
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3">

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700   ">
           

            <div className='text-center'>
              
               <p className="mb-3 font-extrabold text-4xl">2257</p>
               <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Total Credit Available</p>
            </div>
         </div>


         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

            <div className='text-center'>
              
               <p className="mb-3 font-extrabold text-4xl">30%</p>
               <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Cost Savings</p>
            </div>
         </div>



         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           

            <div className='text-center'>
               <p className="mb-3 font-extrabold text-4xl">{quotes?.result?.length}</p>
               <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"> Your Quote</p>
            </div>

           
         </div>

      

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-evenly ">
           
           <div className='text-center'>
               <p className="mb-3 font-extrabold text-4xl">{projects?.result?.projects?.length}</p>
               <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"> Project</p>
            </div>

            
         </div>


      </div>
   );
};

export default Cards;