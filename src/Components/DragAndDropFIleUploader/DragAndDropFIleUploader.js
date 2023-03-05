import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFillCloudUploadFill } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import { token } from '../../Utility/Token/token';

const DragAndDropFileUploader = () => {

    const { id } = useParams();
    const [file, setFile] = useState({})
    const history = useNavigate();

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0])
    }, [])



    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })






    const handleCreateQuote = async () => {
        const formData = new FormData();
        formData.append("threeDFile", file);

        const res = await axios.post(`http://localhost:5000/api/v1/quotes/create-a-quote/${id}`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token
                },
                body: formData
            }
        )
        if (res.status === 200) {
            history(`/quotes/${id}`)
        }


    }
    return (
        <div>
            <div {...getRootProps()} className={` ${isDragActive && 'bg-emerald-500 text-slate-50'} h-96 border-2 border-dashed border-blue-500 cursor-pointer`}>
                <div className=' flex justify-evenly py-6 '>
                    <BsFillCloudUploadFill className={` text-7xl text-blue-500 ${isDragActive && 'text-yellow-400'}`} />
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
                    onClick={handleCreateQuote}
                    className=' py-3 px-6 w-44 rounded-lg text-slate-50 text-sm bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 '>Continue</button>
            </div>

    
        </div>
    )
}
export default DragAndDropFileUploader;