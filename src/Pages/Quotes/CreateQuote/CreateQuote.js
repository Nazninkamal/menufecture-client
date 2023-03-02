import React from 'react';
import DragAndDropFileUploader from '../../../Components/DragAndDropFIleUploader/DragAndDropFIleUploader';

const CreateQuote = () => {
    return (
        <div>
            <h2>Upload Your CAD Files</h2>

            <DragAndDropFileUploader/>
        </div>
    );
};

export default CreateQuote;