import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import SharedBar from '../../../Components/SharedBar/SharedBar';
import MaterialInfo from './MaterialInfo';
import QuotePrinting from './QuotePrinting';
import * as yup from "yup";
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


    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <SharedBar pageName={"Configure Part"} />

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid gap-3 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 my-10 mx-5 w-full">
                    <MaterialInfo register={register} watch={watch} reset={reset} errors={errors} />
                   
                    <QuotePrinting onSubmit={onSubmit} />
                </div>
            </form>
        </>
    );
};

export default Configure;