import React from 'react';
import DragAndDropFileUploader from '../../../Components/DragAndDropFIleUploader/DragAndDropFIleUploader';

const CreateQuote = () => {
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