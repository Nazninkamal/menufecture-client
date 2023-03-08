import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFillCloudUploadFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { createQuote } from '../../Redux/Features/quotes/quotesSlice';


const DragAndDropFileUploader = () => {

    const { id } = useParams();
    const [file, setFile] = useState({})
    const [extError, setExtError] = useState('')
    const history = useNavigate();

    const dispatch = useDispatch();


    function useQuery() {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }



    let query = useQuery();
    const type = query.get("type")

console.log(type);
    const onDrop = useCallback(acceptedFiles => {

        if (acceptedFiles[0].name.indexOf(".glb") === -1) {
            return setExtError('Supported only three D printing glb file')
        }

        setFile(acceptedFiles[0])
        setExtError('')
    }, [])



    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })





    const handleCreateQuote = async () => {
        if (!file) {
            return
        }
        const formData = new FormData();
        formData.append("threeDFile", file);
        formData.append("type", type);


        dispatch(createQuote({ formData, id }))
            .then(res => {

                if (res.payload.status === 200) {
                    history(`/quotes/${id}`)
                }
            }
            )
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
                        <p className='text-sm'>We accept the following CAD files for 3D printing: (.glb) .</p>
                        {
                            file.name && <p className=' text-sm text-green-400'><span>Selected file:</span> {file?.name}</p>
                        }
                        {
                            extError && <p className=' text-red-500 text-sm'>{extError}</p>
                        }
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