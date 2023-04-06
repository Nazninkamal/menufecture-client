import React, { useEffect } from 'react';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useCreateProjectMutation } from '../../Redux/Features/projects/projectsApi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import BackButton from '../../Components/Buttons/BackButton';
import { toast } from 'react-hot-toast';


const CreateProjectSchema = yup.object().shape({
    projectName: yup.string().required(),


});

const CreateProjectForm = () => {
    const history = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(CreateProjectSchema)
    });

    const [createProject, { data, isSuccess, isLoading, isError, error }] = useCreateProjectMutation();



    useEffect(() => {
        if (isSuccess) {
            toast.success("Success", { id: "project" })
            history(`/quotes/${data?.result?._id}`)
            reset()
        }
        if (isError) {
            toast.error(error, { id: "project" })
        }
        if (isLoading) {
            toast.loading("Loading...", { id: "project" })
        }
    }, [isSuccess, history, data?.result?._id, reset, isError, error, isLoading])

    const handleCreateProject = ({ projectName }) => {
        createProject({ projectName })

    }
    return (


        <div >
            <BackButton />
            <div className=' flex  justify-center  items-center h-screen   overflow-y-auto'>

                <div>
                    <div className=' text-center'>
                        <h1 className=' pb-8 font-serif font-light uppercase  text-gray-500'>Name you projects</h1>
                    </div>
                    <form onSubmit={handleSubmit(handleCreateProject)}>
                        <div className="relative  w-115">


                            <input
                                {...register("projectName")}
                                type="text"
                                id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Project name</label>
                            <p className="text-red-500 text-xs">{errors.projectName?.message}</p>
                        </div>

                        <p className=' mt-5 text-center text-xs text-gray-500 mb-2'>Examples: Insulin Pump, Quadcopter, Fixture</p>

                        <div className=' text-center'>
                            <button

                                type='submit'

                                className=' py-3 px-6 w-44 rounded-lg text-slate-50 text-sm bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 '>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default CreateProjectForm;