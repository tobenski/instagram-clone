'use client'
import { useRecoilState } from 'recoil'
import Image from "next/image";
import { userState } from "@/atom/userAtom";
import { getAuth, signOut } from 'firebase/auth';
import { app } from '@/firebase';

const MiniProfile = () => {
        // @ts-ignore
        const [currentUser, setCurrentUser] = useRecoilState<DocumentData | null>(userState)
        const auth = getAuth(app)
        const onSignOut = () => {
            signOut(auth)
            setCurrentUser(null)
        }
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <Image 
                src={currentUser?.userImg || ''} 
                alt="user image" 
                height={64} 
                width={64} 
                className="rounded-full border p-[2px]"
            />
            <div className="flex-1 ml-4">
            {/* @ts-ignore */}
                <h2 className="font-bold">{currentUser?.username || ''} </h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>
            <button className="font-semibold text-blur-400 text-sm" onClick={onSignOut}>Sign Out</button>
        </div>
    );
}

export default MiniProfile;