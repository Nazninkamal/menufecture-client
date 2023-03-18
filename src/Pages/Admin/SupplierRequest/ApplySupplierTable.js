import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { FaUserAlt } from 'react-icons/fa';
import { useDeleteApplyForSupplierMutation, useMakeAddApplyForSupplierMutation } from '../../../Redux/Features/User/userApi';
const ApplySupplierTable = ({ supplier }) => {
    const [makeAddSupplier, { isError, isSuccess, isLoading, error }] = useMakeAddApplyForSupplierMutation();
    const [deleteSupplier, { isError: deleteIsError, isSuccess: deleteSuccess, isLoading: deleteLoading, error: deleteError }] = useDeleteApplyForSupplierMutation();




    const handleOnchange = (value) => {

        const data = { role: value, email: supplier.email }
        if (value !== "delete") {
            makeAddSupplier(data);
        }
        if (value === "delete") {
            deleteSupplier(data)
        }
    }

    useEffect(() => {
        if (isLoading) {
            toast.loading("Loading...", { id: "approve" })
        }
        if (isError) {
            toast.error(error, { id: 'approve' })
        }
        if (isSuccess) {
            toast.success("Role change is Successfully", { id: "approve" })
        }

    }, [isLoading, isError, error, isSuccess])
    useEffect(() => {
        if (deleteLoading) {
            toast.loading("Loading...", { id: "delete" })
        }
        if (deleteIsError) {
            toast.error(deleteError, { id: 'delete' })
        }
        if (deleteSuccess) {
            toast.success("Delete change is Successfully", { id: "delete" })
        }

    }, [deleteError, deleteSuccess, deleteLoading, deleteIsError])



    return (
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
            <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                <span
                    className="relative inline-block  px-3 py-1 font-semibold text-green-900 leading-tight uppercase"
                >

                    {supplier?.role}

                </span>

            </td>
            <td
                className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
            >


                <div className=' relative'>
                    <div className=''>
                    </div>
                </div>
                <select

                    onChange={(e) => handleOnchange(e.target.value)}
                    className={`
                
                py-1 px-5 rounded-full  font-bold `}
                >
                    <option value="user">Make a user</option>
                    <option value="admin">Make a admin</option>
                    <option value="supplier">Make a Supplier</option>
                    <option value="delete">Delete</option>
                </select>



            </td>
        </tr>
    );
};

export default ApplySupplierTable;