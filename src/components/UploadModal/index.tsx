'use client'
import { modalState } from '@/atom/modalAtom'
import { useRecoilState } from 'recoil'
import Modal from 'react-modal'
import { CameraIcon } from '@heroicons/react/24/outline'
import { FormEvent, useRef, useState } from 'react'
import Image from 'next/image'

const UploadModal = () => {
    const [open, setOpen] = useRecoilState<boolean>(modalState);
    const [selectedFile, setSelectedFile] = useState<any>(null)
    const filePickerRef = useRef<HTMLInputElement>(null);

    const addImageToPost = (e:any) => {
        const reader = new FileReader()
        if(e?.target?.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target?.result)
        }
    }

    return (
        <div>
            {open && (
                <Modal
                    isOpen={open}
                    onRequestClose={()=>{
                        setOpen(false)
                        setSelectedFile(null)
                    }}
                    className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
                >
                    <div className="flex flex-col justify-center items-center h-full">
                    {selectedFile ? (
                        <div className="relative h-96 max-h-96 w-full">
                            {/* onClick={() => setSelectedFile(null)} */}
                            <Image onClick={()=> { filePickerRef.current && filePickerRef.current.click() }} src={selectedFile} alt='' fill sizes='100vw' className='object-cover cursor-pointer' />
                        </div>
                    ) : (
                        <CameraIcon onClick={()=> { filePickerRef.current && filePickerRef.current.click() }} className='cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500' />
                    )}
                    
                    <input type='file' hidden ref={filePickerRef} onChange={addImageToPost} />
                    <input 
                        type="text" 
                        maxLength={150} 
                        placeholder='Please enter your caption... '
                        className='m-4 border-none text-center w-full focus:ring-0'
                    />
                    <button disabled className='w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100'>Opload Post</button>
                    </div>
                    
                </Modal>
            )}
        </div>
    );
}

export default UploadModal;