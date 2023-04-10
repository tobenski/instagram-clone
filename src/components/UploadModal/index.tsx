'use client'
import { modalState } from '@/atom/modalAtom'
import { useRecoilState } from 'recoil'
import Modal from 'react-modal'
import { CameraIcon } from '@heroicons/react/24/outline'
import { FormEvent, useRef, useState } from 'react'
import Image from 'next/image'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '@/firebase'
import { useSession } from 'next-auth/react'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'

const UploadModal = () => {
    const [open, setOpen] = useRecoilState<boolean>(modalState);
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const {data:session }: {data: any} = useSession();
    const filePickerRef = useRef<HTMLInputElement>(null);
    const captionRef = useRef<HTMLInputElement>(null);

    const uploadPost = async () => {
        if(loading) return;
        
        setLoading(true);

        const docRef = await addDoc(collection(db, "posts"), {
            caption: captionRef?.current?.value,
            username: session?.user?.username,
            profileImg: session?.user?.image,
            timestamp: serverTimestamp(),
        });

        const imageRef = ref(storage, `posts/${docRef.id}/image`);
        await uploadString(imageRef, selectedFile, "data_url").then(
            async(snapshot)=> {
                const downloadUrl = await getDownloadURL(imageRef);
                await updateDoc(doc(db, "posts", docRef.id),{
                    image: downloadUrl,
                })
            }
        )
        setOpen(false);
        setLoading(false);
        setSelectedFile(null);
    }

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
                        ref={captionRef}
                    />
                    <button 
                        onClick={uploadPost}
                        disabled={!selectedFile || loading } 
                        className='w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100'>Opload Post</button>
                    </div>
                    
                </Modal>
            )}
        </div>
    );
}

export default UploadModal;