'use client'
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const MiniProfile = () => {
    const {data:session } = useSession();
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <Image 
                src={session?.user?.image || ''} 
                alt="user image" 
                height={64} 
                width={64} 
                className="rounded-full border p-[2px]"
            />
            <div className="flex-1 ml-4">
            {/* @ts-ignore */}
                <h2 className="font-bold">{session?.user?.username || ''} </h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>
            <button className="font-semibold text-blur-400 text-sm" onClick={()=>signOut()}>Sign Out</button>
        </div>
    );
}

export default MiniProfile;