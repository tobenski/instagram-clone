import Image from "next/image";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
        
            
            <div className="flex items-center justify-between max-w-6xl mx-auto"> 
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
                <h1>Right Sides</h1>
            </div>
            
    );
}

export default Header;