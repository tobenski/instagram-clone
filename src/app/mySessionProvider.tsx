'use client'
import { RecoilRoot } from 'recoil';

export interface MySessionProps {
	children: React.ReactNode;
}

const MySessionProvider = ({ children } : MySessionProps) => {
	return (
			<RecoilRoot>
				{children}
			</RecoilRoot>
	)
}

export default MySessionProvider