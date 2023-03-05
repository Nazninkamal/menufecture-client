import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFillCloudUploadFill } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
const DragAndDropFileUploader = () => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const { id } = useParams();
    const history = useNavigate();

    const handleNavigate = () => {
        history(`/quotes/${id}`)
    }
    return (
        <div>
            <div {...getRootProps()} className=' h-96 border-2 border-dashed border-blue-500 cursor-pointer'>
                <div className=' flex justify-evenly py-6 '>
                    <BsFillCloudUploadFill className=' text-7xl text-blue-500' />
                </div>
                <input {...getInputProps()} accept="/.glb*" />


                <div className=' flex justify-center'>
                    <div className=' w-96  text-center'>
                        <p className=' text-base'>Drag and drop your 3D Printing files anywhere</p>
                        or
                        <p className=' text-base'>You can also browse your computer</p>
                        <p className='text-sm'>We accept the following CAD files for 3D printing: MESH (.stl), STEP (.stp/.step), SOLIDWORKS (.sldprt), or IGES (.igs/.iges).</p>
                        <p className=' text-xs '>Maximum File Size: 125 MB</p>
                    </div>


                </div>

            </div>
            <div className=' flex justify-center'>
                <button
                    onClick={handleNavigate}
                    className=' py-3 px-6 w-44 rounded-lg text-slate-50 text-sm bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 '>Continue</button>
            </div>
        </div>
    )
}
export default DragAndDropFileUploader;