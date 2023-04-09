import Image from "next/image";
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className="shadow-sm border-b sticky top-0 bg-white z-30">
            <div className="flex items-center justify-between max-w-6xl mx-4 lg:mx-auto"> 
            {/* Left */}
                <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
                    <Image 
                        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png`} 
                        alt="Instagram Logo" 
                        fill 
                        className="object-contain"
                        />
                </div>
                <div className="h-24 w-10 relative lg:hidden  cursor-pointer">
                    <Image 
                        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png`} 
                        alt="Instagram Logo" 
                        fill 
                        className="object-contain"
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
                    <HomeIcon className="hidden md:inline-flex h-5 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
                    <PlusCircleIcon className="h-5 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
                    <Image 
                        src={'https://i.pinimg.com/280x280_RS/31/ea/ec/31eaec68556ad38582536cf34f228df9.jpg'} 
                        alt="user image" 
                        height={10}
                        width={10}
                        className="h-100 w-10 rounded-full object-contain cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default Header;