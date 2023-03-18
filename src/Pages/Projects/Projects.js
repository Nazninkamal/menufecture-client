import React, { useState } from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Card from '../../Components/Cards/Card';
import { useDeleteProjectMutation, useGetMyProjectsQuery } from '../../Redux/Features/projects/projectsApi';
import {Dropdown1} from '../../Components/Dropdown/Dropdown';
import SharedBar from '../../Components/SharedBar/SharedBar';
import CreateProject from './CreateProject';
import Modal from '../../Components/Modal/Modal';
import ProjectRename from './ProjectRename';


const Projects = () => {

    const { data: projects } = useGetMyProjectsQuery();
    const [deleteProject] = useDeleteProjectMutation();


    const [isModal, setModal] = useState(false);
    const [id, setId] = useState('');




    const handleDeleteProject = (id) => {
        deleteProject({ id })
    }

    const selectId = (id) => {
        setId(id)
        setModal(true)
    }

  
    return (
        <div className=' h-screen overflow-y-auto'>

            <SharedBar pageName={"Please Create Your Customize Project Here"} />

            <div className=' p-5'>
                <div className='grid grid-cols-10 gap-5'>
               
                    <CreateProject />
                

                    {
                        projects?.result?.projects.map(project =>
                            <div key={project?._id} className='col-span-10 sm:col-span-5 md:col-span-2 '>
                                <Card>


                                    <div className=''>




                                        <Dropdown1 menus={
                                            [
                                                { title: 'Rename', action: () => selectId(project?._id) },
                                                { title: 'delete', action: () => handleDeleteProject(project?._id) },
                                            ]
                                        } />


                                        <div className=' p-5 h-64 flex justify-center items-center'>
                                            <Link to={`/quotes/${project?._id}`}>
                                                <AiOutlineFundProjectionScreen className='mx-auto w-20 h-20 text-indigo-500' />

                                                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-center">{project?.projectName}</h5>

                                            </Link>
                                        </div>
                                    </div>


                                </Card>
                            </div>)

                    }





                </div>
            </div>
            <div className=' flex justify-center'>
                <Modal isModal={isModal} setModal={setModal}>
                    <ProjectRename setModal={setModal} id={id} />
                </Modal>
            </div>

        </div>
    );
};

export default Projects;