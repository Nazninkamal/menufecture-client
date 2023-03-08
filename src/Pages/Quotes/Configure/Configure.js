import React from 'react';
import SharedBar from '../../SharedBar/SharedBar';
import MaterialInfo from './MaterialInfo';
import ProjectInfo from './ProjectInfo';

const Configure = () => {
    return (
        <>
         <SharedBar pageName={"Configure Part"}/>
        <div className="grid gap-3 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 my-10 mx-5 w-full">
        <MaterialInfo/>
        <ProjectInfo/> 
       

     </div>
     </>
    );
};

export default Configure;