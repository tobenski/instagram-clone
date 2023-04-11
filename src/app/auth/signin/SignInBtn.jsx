'use client'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app, db } from '@/firebase'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'

const SignInBtn = () => {
	const router = useRouter()
	const onGoogleClick = async () => {
		try {
			const auth = getAuth(app)
			const provider = new GoogleAuthProvider()
			await signInWithPopup(auth, provider)
			const user = auth.currentUser.providerData[0]
			const docRef = doc(db, 'users', user.uid)
			const docSnap = await getDoc(docRef)
			if (!docSnap.exists()) {
				await setDoc(docRef, {
					name: user.displayName,
					email: user.email,
					userImg: user.photoURL,
					uid: user.uid,
					timestamp: serverTimestamp(),
					username: user.displayName
						.split(' ')
						.join('')
						.toLocaleLowerCase(),
				})
			}
			router.push('/')
			// console.log(auth)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<button
			className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'
			onClick={onGoogleClick}>
			Sign in with Google
		</button>
	)
}

export default SignInBtn
