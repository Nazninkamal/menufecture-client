import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { Link} from 'react-router-dom';
import Card from '../../Components/Cards/Card';
import { useGetMyProjectsQuery } from '../../Redux/Features/projects/projectsApi';
import SharedBar from '../SharedBar/SharedBar';

const Projects = () => {
   
   
    const { data: projects } = useGetMyProjectsQuery();


    return (
        <div>

            <SharedBar pageName={"Please Create Your Cusmize Projct Here"} />

            <div className=' p-5'>
                <div className='grid grid-cols-10 gap-5'>
                    <div className=' col-span-2'>
                        <Card>
                            <Link to="/create-project">
                                <IoMdAddCircle className='mx-auto w-20 h-20 text-indigo-500' />

                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Create your projects</h5>

                                <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400 text-center">Go to this step by step guideline process on how to create your customize project</p>
                            </Link>
                            <div className='text-center'>
                                <a href="/#" className="inline-flex items-center text-blue-600 hover:underline">
                                    <h6 >See our guideline</h6>
                                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                                </a>
                            </div>

                        </Card>
                    </div>
                    {/* projects  */}
                    {
                        projects?.result?.projects.map(project =>
                            <div key={project?._id} className='col-span-2'>
                                <Card>
                                    <Link to={`/quotes/${project?._id}`}>
                                        <AiOutlineFundProjectionScreen className='mx-auto w-20 h-20 text-indigo-500' />

                                        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-center">{project?.projectName}</h5>

                                    </Link>


                                </Card>
                            </div>)

                    }
                </div>
            </div>


        </div>
    );
};

export default Projects;