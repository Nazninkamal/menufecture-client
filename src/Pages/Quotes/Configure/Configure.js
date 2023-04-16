import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import MaterialInfo from './MaterialInfo';
import QuotePrinting from './QuotePrinting';
import * as yup from "yup";
import { useParams } from 'react-router-dom';
import { useGetMySingleQuotesQuery, useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';
import { useGetMaterialsQuery } from '../../../Redux/Features/Material/matarialAPI';

const Configure = () => {

    const SignupSchema = yup.object().shape({
        material: yup.string().required('Material is a required field'),
        resolution: yup.string().required('Resolution is a required field'),
        orientation: yup.string().required('Orientation is a required field'),
        finish: yup.string().required('Finish is a required field'),


    });

    const {
        register,
        handleSubmit,
        watch,
        reset,

        formState: { isDirty, errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });

    const { id } = useParams();

    const { data } = useGetMySingleQuotesQuery({ id });

    const [quantity, setQuantity] = useState(data?.result?.quantity) || 1;







    const [updateQuote, { isLoading: isLoadingUpdateQuote }] = useUpdateMySingleQuotesMutation();

    const [singleSLA, setSingleSLA] = useState({});
    const [material, resolution, orientation, finish] = watch(['material', 'resolution', 'orientation', 'finish']);

    const { data: materials } = useGetMaterialsQuery()
    const SLA = materials?.result;
    const setMaterialCallBack = useCallback(async () => {


        const singleSLA = await SLA?.find(s => s?.material === material);

        setSingleSLA(singleSLA);

    }, [material, SLA])

    useEffect(() => {

        setMaterialCallBack()
    }, [setMaterialCallBack]);



    // handle on change for state --------------------

    const handleOnchange = useCallback(
        async () => {


            if (material === '') {
                const configure = {
                    material: '',
                    resolution: '',
                    orientation: '',
                    finish: '',
                    quantity: '',
                    price: ''

                };
                await updateQuote({ id, configure })
            }
            if (material) {
                if (quantity || isDirty) {
                    const configure = {
                        material: material,
                        resolution: resolution,
                        orientation: orientation,
                        finish: finish,
                        quantity: singleSLA?.material ? quantity : 1,
                    }
                    await updateQuote({ id, configure })
                }


            }
        },
        [updateQuote, finish, id, orientation, quantity, singleSLA?.material, isDirty, material, resolution],
    );


    useEffect(() => {

        if (isDirty) {

            handleOnchange()
        }
        if (quantity) {
            handleOnchange()
        }

    }, [handleOnchange, quantity, isDirty])






    // submit for Request handler -----------------------

    const onSubmit = (data) => {

        console.log(data);
        const configure = { status: 'pending', sendToAdmin: 'sended' }
        updateQuote({ id, configure })

    }

    return (
        <>
            <SharedBar pageName={"Configure Part"} />

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid gap-3 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 my-10 mx-5 w-full">
                    <MaterialInfo
                        register={register}
                        watch={watch}
                        errors={errors}
                        reset={reset}
                        id={id}
                        setQuantity={setQuantity}
                        quantity={quantity}
                        singleSLA={singleSLA}
                        isLoadingUpdateQuote={isLoadingUpdateQuote}
                        SLA={SLA}
                    />

                    <QuotePrinting
                        onclick={onSubmit}
                        isLoadingUpdateQuote={isLoadingUpdateQuote}
                    />
                </div>
            </form>

        </>
    );
};

export default Configure;