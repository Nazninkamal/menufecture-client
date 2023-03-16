import React from 'react';
import AddMaterialForm from './AddMaterialForm';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import { useGetMaterialsQuery } from '../../../Redux/Features/Material/matarialAPI';

const AddMaterial = () => {

    const { data } = useGetMaterialsQuery();

  



    return (
        <div>
            <SharedBar pageName="Add Material" />
            <AddMaterialForm />



            <div>
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">Materials and Resolutions</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full p-6 text-xs text-left whitespace-nowrap">

                            <thead>
                                <tr className=" bg-slate-400 text-white">

                                    <th className="p-3">Material</th>
                                    <th className="p-3">Resolution</th>
                                    <th className="p-3">Finish</th>
                                    <th className="p-3">Orientation</th>
                                    <th className="p-3">Edit</th>

                                </tr>
                            </thead>
                            <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">


                                {
                                    data?.result?.map((data) => (
                                        <tr key={data?._id} className=' bg-slate-100 border-b'>
                                            <td className="px-3 py-2">
                                                <p>{data?.material}</p>
                                            </td>
                                            <td className="px-3 py-2">
                                                {
                                                    data?.resolution?.map((res) => (
                                                        <td key={res?._id} className='flex  justify-between   bg-teal-100 my-1'>
                                                            <div className="px-3 py-2 flex justify-start">
                                                                <p>{res?.title}</p>
                                                            </div>
                                                            <div className="px-3 py-2 flex justify-start ">
                                                                <p>Price</p>
                                                            </div>
                                                            <div className="px-3 py-2">
                                                                <p className="dark:text-gray-400">${res?.price}</p>
                                                            </div>


                                                        </td>
                                                    ))
                                                }

                                            </td>
                                            <td className="px-3 py-2">
                                                {data?.finish?.map((finish) => (
                                                    <p key={finish?._id}>{finish?.title}</p>
                                                ))}
                                            </td>
                                            <td className="px-3 py-2">
                                                {data?.orientation?.map((ori, i) => (
                                                    <p key={ori?._id}>{ori?.title}</p>
                                                ))}

                                            </td>

                                            <td className="px-3 py-2">
                                                <button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-600 hover:dark:bg-gray-700 focus:dark:bg-gray-700">
                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                                    </svg>
                                                </button>
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
    );
};

export default AddMaterial;