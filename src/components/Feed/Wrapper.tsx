'use client'
import { useSession } from "next-auth/react";

const Wrapper = ({children}:{children: React.ReactNode}) => {
    const {data:session} = useSession();
    return (
        <main className={session ? "grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"}>
            {children}
        </main>
    );
}

export default Wrapper;