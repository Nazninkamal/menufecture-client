import React from 'react';
import img1 from "../../../Assets/Images/download.png"

const ProjectInfo = () => {
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-100 xl:w-100 p-5" >
        <h1>3D Printing (2 Parts)</h1>
        <div className='flex mt-5'>
            <img src={img1}alt='' className='w-24'/>
            <div className='text-sm mt-3'>
                <h1>Name</h1>
                <p>ID Number: xxxxxxxxxxx</p>
                <p>Update Status: Request for quote</p>
            </div>
        </div>
    </div>
    );
};

export default ProjectInfo;