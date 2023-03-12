import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import MaterialInfo from './MaterialInfo';
import QuotePrinting from './QuotePrinting';
import * as yup from "yup";
import { useParams } from 'react-router-dom';
import { useGetMySingleQuotesQuery, useUpdateMySingleQuotesMutation } from '../../../Redux/Features/quotes/quotesApi';
import { Loading } from '../../../Components/Buttons/LoadingButton';
import { SLA } from './MaterialsData/MaterialsData';
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
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();

    const [updateQuote, { isLoading: isLoadingUpdateQuote, isSuccess, isError, error }] = useUpdateMySingleQuotesMutation();
    const [singleResolution, setSingleResolution] = useState({});
    const [singleSLA, setSingleSLA] = useState({});
    const [material, resolution, orientation, finish] = watch(['material', 'resolution', 'orientation', 'finish']);




    useEffect(() => {
        const singleSLA = SLA?.find(s => s?.material === material);
        const singleResolution = singleSLA?.resolution?.find(s => s?.title === resolution);
        setSingleSLA(singleSLA);
        setSingleResolution(singleResolution);

    }, [material, resolution]);



    // handle on change for state --------------------

    const handleOnchange = useCallback(
        () => {
            const configure = {
                material: material || singleSLA?.material,
                resolution: singleSLA?.material ? singleResolution?.title : '',
                price: singleSLA?.material ? parseInt(Number(singleResolution?.price)) * quantity : null,
                orientation: singleSLA?.material ? orientation : '',
                finish: singleSLA?.material ? finish : '',
                quantity: singleSLA?.material ? quantity : 1,
            }
            updateQuote({ id, configure })
        },
        [updateQuote, finish, id, orientation, quantity, singleResolution?.price, singleResolution?.title, singleSLA?.material, material],
    )


    useEffect(() => {
        handleOnchange()
    }, [handleOnchange])


    // submit for Request handler -----------------------

    const onSubmit = (data) => {
        const configure = { status: 'pending' }
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