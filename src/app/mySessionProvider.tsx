'use client'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil';

export interface MySessionProps {
	children: React.ReactNode;
}

const MySessionProvider = ({ children } : MySessionProps) => {
	return (
		<SessionProvider>
			<RecoilRoot>
				{children}
			</RecoilRoot>
		</SessionProvider>
	)
}

export default MySessionProvider