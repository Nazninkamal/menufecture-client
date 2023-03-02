import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const DragAndDropFileUploader = () => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()} className=' h-60 border-8 border-dotte '>
            <input {...getInputProps()} accept="/.glb*" />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}
export default DragAndDropFileUploader;