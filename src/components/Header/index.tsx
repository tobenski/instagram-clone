'use client'
import Image from "next/image";
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import { modalState } from '@/atom/modalAtom'
import { userState } from '@/atom/userAtom'
import { useRecoilState } from 'recoil'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app, db } from "@/firebase";
import { DocumentData, doc, getDoc } from "firebase/firestore";

const Header = () => {    
    const [open, setOpen] = useRecoilState<boolean>(modalState);
    // @ts-ignore
    const [currentUser, setCurrentUser] = useRecoilState<DocumentData | null>(userState)
    const router = useRouter()
    const auth = getAuth(app)

    useEffect(() => {
        
        // const uid:string = auth.currentUser?.providerData[0].uid || ''
        onAuthStateChanged(auth, (user) => {
            if(user) {
                const fetchUser = async() => {
                    const docRef = doc(db, "users", auth.currentUser?.providerData[0].uid || '');
                    const docSnap = await getDoc(docRef);
                    if(docSnap.exists()) {
                        setCurrentUser(docSnap.data())
                        console.log(currentUser);
                        
                    }
                }
                fetchUser()
            }
        })
    },[])
    const onSignOut = () => {
        signOut(auth)
        setCurrentUser(null)
    }

    return (
        <div className="shadow-sm border-b sticky top-0 bg-white z-30">
            <div className="flex items-center justify-between max-w-6xl mx-4 lg:mx-auto"> 
            {/* Left */}
                <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
                    <Image 
                        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png`} 
                        alt="Instagram Logo" 
                        fill
                        sizes="100vw"
                        className="object-contain"
                        onClick={()=>router.push('/')}
                        />
                </div>
                <div className="h-24 w-10 relative lg:hidden  cursor-pointer">
                    <Image 
                        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png`} 
                        alt="Instagram Logo" 
                        fill 
                        sizes="100vw"
                        className="object-contain"
                        onClick={()=>router.push('/')}
                        />
                </div>
                {/* Middle */}
                <div className="relative mt-1">
                    <div className="absolute top-2 left-2">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500"/>
                    </div>
                    <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md" />
                </div>
                {/* right */}
                <div className="flex space-x-4 items-center">
                    <HomeIcon className="hidden md:inline-flex h-5 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" onClick={()=>router.push('/')} />
                    {currentUser ? (
                        <>
                            <PlusCircleIcon onClick={()=>setOpen(true)} className="h-5 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
                            <Image 
                                src={currentUser?.userImg || ''} 
                                alt="user image" 
                                height={40}
                                width={40}
                                className="h-100 w-10 rounded-full object-contain cursor-pointer"
                                onClick={() => onSignOut()}
                                />   
                        </>
                    ): (
                        <button onClick={()=> router.push('/auth/signin')}>Sign in</button>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default Header;