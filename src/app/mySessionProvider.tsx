'use client'
import { SessionProvider } from 'next-auth/react'

export interface MySessionProps {
	children: React.ReactNode;
}

const MySessionProvider = ({ children } : MySessionProps) => {
	return <SessionProvider>{children}</SessionProvider>
}

export default MySessionProvider