'use client'
import { signIn } from 'next-auth/react'

const SignInBtn = ({ provider }) => {
	return (
		<button
			className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'
			onClick={() =>
				signIn(provider.id, {
					callbackUrl: '/',
				})
			}>
			Sign in wiht {provider.name}
		</button>
	)
}

export default SignInBtn
