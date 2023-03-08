import React, { useEffect } from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useGetSingleMyProjectsQuery, useUpdateProjectMutation } from '../../Redux/Features/projects/projectsApi';


const RenameProjectSchema = yup.object().shape({
    projectName: yup.string().required(),


});

const ProjectRename = ({ setModal, id }) => {

    const { data: singleProject } = useGetSingleMyProjectsQuery({ id });

    const {
        register,
        handleSubmit,
        reset,

        formState: { errors }
    } = useForm({
        resolver: yupResolver(RenameProjectSchema),

    });


    const [rename, { isSuccess: updateSuccess }] = useUpdateProjectMutation();


    useEffect(() => {
        if (updateSuccess) {
            reset()
            setModal(false)
        }
    }, [reset, setModal, updateSuccess])



    const onSubmit = ({ projectName }) => {

        rename({ projectName, id })

    };




    return (
        <div>
            {singleProject?.result?.projectName && <form onSubmit={handleSubmit(onSubmit)} className="mt-6" >

                <div className="mb-2">
                    <label

                        className="block text-sm font-semibold text-gray-800"
                    >
                        Project Name
                    </label>
                    <input
                        required
                        defaultValue={singleProject?.result?.projectName}
                        type="text"
                        placeholder='Project Rename'
                        {...register("projectName")}
                        className="block w-full px-4 py-2 mt-2 text-sm text-purple-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <p className="text-red-500 text-sm">{errors.projectName?.message}</p>
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

export default ProjectRename;