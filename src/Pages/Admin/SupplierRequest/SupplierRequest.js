import React from 'react';
import { Loading } from '../../../Components/Buttons/LoadingButton';
import {useGetMySingleQuotesQuery } from '../../../Redux/Features/quotes/quotesApi';



    


const SupplierRequest = () => {
    const {data:suppliersData,isLoading}=useGetMySingleQuotesQuery();
    const suppliers=suppliersData?.result;

    return (
        <div className='pt-16  '>
        {
          isLoading?<Loading/>:
          <div className=" bg-white shadow sm:rounded-lg w-full">
          <div className="px-4 py-5 sm:px-6 flex justify-between">
            <div >
            <h3 className="text-base font-semibold leading-6 text-gray-900">Your Profile Details</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and contact info</p>
            </div>
            <div>
            <button type="submit" class="flex items-center justify-center text-sm w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md active:ring-2 active:ring-offset-1 active:from-cyan-500">Accept Request</button>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{suppliers?.fullName}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500  ">Profile Category</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 uppercase">{suppliers?.role}/Visitor</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{suppliers?.email}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Company Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{suppliers?.company}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Company Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  .........
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{suppliers?.phoneNumber}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Country</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {suppliers?.country}
                </dd>
              </div>
  
  
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Postal Code</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{suppliers?.postalCode}</dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Website</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{suppliers?.websiteLink}</dd>
              </div>
  
  
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Product Category</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{suppliers?.productCategory}</dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Website</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{suppliers?.productMaterial}</dd>
              </div>
  
  
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Product Category</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{suppliers?.productCategory}</dd>
              </div>
            
  
  
             
            </dl>
          </div>
        </div>
        }
        
      </div>
    );
};

export default SupplierRequest;