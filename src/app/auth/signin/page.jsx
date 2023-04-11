import Header from '@/components/Header'

import Image from 'next/image'
import SignInBtn from './SignInBtn'

const Signin = async () => {
	return (
		<>
			<Header />
			<div className='flex justify-center space-x-7 mt-20'>
				<Image
					src='https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png'
					alt='instagram image'
					height={350}
					width={192}
					className='hidden md:inline-flex object-cover rotate-6 md:w-48'
				/>
				<div className=''>
					<div className='flex flex-col items-center'>
						<Image
							src='https://socodigital.com/wp-content/uploads/2021/03/Instagram.png'
							alt='instagram logo'
							height={128}
							width={128}
							className='w-32 object-cover'
						/>
						<p className='text-sm italic my-10 text-center'>
							This app is created for learning purposes
						</p>
						<SignInBtn />
					</div>
				</div>
			</div>
		</>
	)
}

export default Signin
