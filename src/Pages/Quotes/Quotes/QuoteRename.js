import React, { useEffect } from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useGetMySingleQuotesQuery, useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';


const QuoteRename = ({ setModal: modal }) => {


    const { setModal, quiteId: id } = modal;

    const QuoteRenameSchema = yup.object().shape({
        quoteTitle: yup.string().required(),


    });



    const { data: singleQuotes } = useGetMySingleQuotesQuery({ id });

    // console.log(singleQuotes);

    const {
        register,
        handleSubmit,
        reset,

        formState: { errors }
    } = useForm({
        resolver: yupResolver(QuoteRenameSchema),

    });


    const [rename, { isSuccess: updateSuccess }] = useUpdateMySingleQuotesMutation();
    useEffect(() => {
        if (updateSuccess) {
            alert("Rename SuccessSully")
            reset()
            setModal(false)
        }
    }, [reset, setModal, updateSuccess])


    const onSubmit = ({ quoteTitle }) => {
        const configure = { quoteTitle };

        console.log(quoteTitle);
        rename({ id, configure })

    };

    return (
        <div>
            {<form onSubmit={handleSubmit(onSubmit)} className="mt-6" >

                <div className="mb-2">
                    <label

                        className="block text-sm font-semibold text-gray-800"
                    >
                        Quote Title
                    </label>
                    <input
                        required
                        defaultValue={singleQuotes?.result?.quoteTitle}
                        type="text"
                        placeholder='Quote Rename'
                        {...register("quoteTitle")}
                        className="block w-full px-4 py-2 mt-2 text-sm text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <p className="text-red-500 text-sm">{errors.quoteTitle?.message}</p>
                </div>

                <div className=' text-center'>
                    <button

                        type='submit'

                        className=' py-2 px-6 w-24 rounded-lg text-slate-50 text-sm bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 '>Rename</button>
                </div>
            </form>
            }
        </div>
    );
};

export default QuoteRename;