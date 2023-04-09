import Image from "next/image";

const Header = () => {
    return (
        <div>
            {/* Left */}
            <div className="flex items-center justify-between max-w-6xl mx-auto"> 
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
                <h1>Right Sides</h1>
            </div>
            {/* Middle */}

            {/* right */}
        </div>
    );
}

export default Header;