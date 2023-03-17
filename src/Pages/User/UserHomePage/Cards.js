import React from 'react';
import { useGetMyProjectsQuery } from '../../../Redux/Features/projects/projectsApi';
import { useGetMyAllQuotesQuery, useGetMyQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';
import { useGetAllUsersQuery } from '../../../Redux/Features/User/userApi';

const Cards = () => {

   const { data: user } = useGetAllUsersQuery();
   const { data: quotes } = useGetMyAllQuotesQuery();
   const { data: projects } = useGetMyProjectsQuery();

   ;

   return (
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3">

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-evenly ">
            <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400 mt-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div>
               <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Order</p>
               <p className="mb-3 font-extrabold	 ">2257</p>
            </div>
         </div>

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-evenly ">
            <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400 mt-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path opacity="0.15" d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z" fill="#000000" />
               <path d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" />
               <path d="M3 10.5C3 12.433 4.567 14 6.5 14L10 17.5V10.5C10 8.567 8.433 7 6.5 7C4.567 7 3 8.567 3 10.5Z" stroke="#000000" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>

            <div>
               <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Quote</p>
               <p className="mb-3 font-extrabold">{quotes?.result?.length}</p>
            </div>
         </div>

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-evenly ">
            <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400 mt-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g id="SVGRepo_bgCarrier" strokeWidth="0" />
               <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
               <g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white" /> <path fillRule="evenodd" clipRule="evenodd" d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8Z" fill="#323232" /> <path fillRule="evenodd" clipRule="evenodd" d="M5.43094 16.9025C7.05587 16.2213 9.2233 16 12 16C14.771 16 16.9351 16.2204 18.5586 16.8981C20.3012 17.6255 21.3708 18.8613 21.941 20.6587C22.1528 21.3267 21.6518 22 20.9592 22H3.03459C2.34482 22 1.84679 21.3297 2.0569 20.6654C2.62537 18.8681 3.69119 17.6318 5.43094 16.9025Z" fill="#323232" /> </g>
            </svg>

            <div>
               <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Users</p>
               <p className="mb-3 font-extrabold">{user?.result?.length}</p>
            </div>
         </div>

         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-evenly ">
            <svg className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400 mt-4" fill="#000000" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g>
               <path d="M7,1V5h4V1Zm3,3H8V2h2ZM7,7v4h4V7Zm3,3H8V8h2ZM1,1V5H5V1ZM4,4H2V2H4ZM1,7v4H5V7Zm3,3H2V8H4Z" />
            </g>
            </svg>

            <div>
               <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Project</p>
               <p className="mb-3 font-extrabold">{projects?.result?.projects?.length}</p>
            </div>
         </div>


      </div>
   );
};

export default Cards;