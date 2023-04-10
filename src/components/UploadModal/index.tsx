'use client'
import { modalState } from '@/atom/modalAtom'
import { useRecoilState } from 'recoil'

const UploadModal = () => {
    const [open, setOpen] = useRecoilState<boolean>(modalState);
    return (
        <div>
            UploadModal
            {open && (<h1>OPEN</h1>)}
        </div>
    );
}

export default UploadModal;