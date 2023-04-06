import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from 'react-icons/io';
import Card from '../../Components/Cards/Card';

const CreateProject = () => {
    return (
        <div className=' col-span-10 sm:col-span-5 md:col-span-2 '>
            <Card>

                <div className=' p-5 h-64 flex justify-center items-center'>
                    <div>
                        <Link to="/create-project">
                            <IoMdAddCircle className='mx-auto w-20 h-20 text-indigo-500' />


                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Create your projects</h5>

                        
                        </Link>
                     
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default CreateProject;