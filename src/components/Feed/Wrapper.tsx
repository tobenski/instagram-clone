'use client'
import { userState } from "@/atom/userAtom";
import { useRecoilState } from 'recoil'

const Wrapper = ({children}:{children: React.ReactNode}) => {
    // @ts-ignore
    const [currentUser, setCurrentUser] = useRecoilState<DocumentData | null>(userState)
    return (
        <main className={currentUser ? "grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"}>
            {children}
        </main>
    );
}

export default Wrapper;