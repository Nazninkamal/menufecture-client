import React, { useEffect } from 'react';
import DragAndDropFileUploader from '../../../Components/DragAndDropFIleUploader/DragAndDropFIleUploader';
import Image from '../../../Assets/Images/download.png'
const CreateQuote = () => {

// let url=window.URL.createObjectURL(Image)




    return (
        <div>
            <div className=' text-center'>
                <h2 className=' text-4xl py-12'>Upload Your CAD Files</h2>
            </div>

            <DragAndDropFileUploader />
        </div>
    );
};

export default CreateQuote;