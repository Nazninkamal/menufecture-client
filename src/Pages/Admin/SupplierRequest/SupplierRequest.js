import React from 'react';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import { useGetApplyForSupplierQuery } from '../../../Redux/Features/User/userApi';
import ApplySupplierTable from './ApplySupplierTable';



const SupplierRequest = () => {
  const { data: getApplySupplier } = useGetApplyForSupplierQuery();



  return (
    <div className='h-screen overflow-y-auto '>
      <SharedBar pageName='Applier for Supplier Posting'/>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          
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
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                      Role
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
                      <ApplySupplierTable  key={supplier?._id} supplier={supplier} />
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